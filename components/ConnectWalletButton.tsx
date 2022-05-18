import { useWeb3React } from "@web3-react/core";
import { SlowBuffer } from "buffer";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { mintContractAbi } from "../data/mintContractAbit";
import dummyMint from "../data/dummyMint.json";
import { injected } from "./Connector";
import Modal from "./modal/Modal";
import DragCat from "./animations/DragCat";
import { motion } from "framer-motion";

declare var window: any;

interface WlSignatureRequest {
  account: string;
}

const ConnectWalletButton = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [mintText, setMintText] = useState("Mint One");
  const [minting, setMinting] = useState(false);
  const [signature, setSignature] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [presaleStatus, setPresaleStatus] = useState(false);
  //modal states, metamask check states
  const [userAccount, setUserAccount] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //starts web3 to see if metamask is initiated
    const web3 = new Web3(window.ethereum);
    web3.eth.getAccounts(function (err, accounts) {
      if (err != null) console.error("An error occurred: " + err);
      else if (accounts.length == 0) {
        console.log("User is not logged in to MetaMask");
        setUserAccount(false);
      } else {
        console.log("User is logged in to MetaMask");
        getPresaleStatus();
        setUserAccount(true);
      }
    });
    const getPresaleStatus = async () => {
      const web3 = new Web3(window.ethereum);
      //@ts-ignore
      const heroGalaxyContract = new web3.eth.Contract(
        //@ts-ignore
        mintContractAbi,
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
      );
      const presaleActive = await heroGalaxyContract.methods
        .presaleActive()
        .call();
      setPresaleStatus(presaleActive);
    };
  }, [presaleStatus]);

  const mintPublic = async () => {
    const web3 = new Web3(window.ethereum);

    const mintCost = 0.069;

    //@ts-ignore
    const HeroGalaxyMint = new web3.eth.Contract(
      //@ts-ignore
      mintContractAbi,
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    );
    const mintResponse = await HeroGalaxyMint.methods
      .publicMint(mintAmount)
      .send({
        from: account,
        value: web3.utils.toWei((mintCost * mintAmount).toString(), "ether"),
      });
    setLoading(true);

    if (mintResponse.status === true) {
      setLoading(false);
      setShowModal(true);
    } else if (mintResponse.status === false) {
      setLoading(false);
      setErrorModal(true);
    }
    console.log("mint response right?", mintResponse);
  };

  const connect = async () => {
    if (userAccount === true) {
      try {
        await activate(injected);
        setUserModal(false);
      } catch (ex) {
        console.log("exception")
        console.log(ex);
      }
    } else {
      try {
        await activate(injected);
        // console.log("no account... probably", userModal);
        // console.log("is user account", userAccount);
      } catch (ex) {
        setUserModal(true);
        console.log("exception")
        console.log(ex);
      }
    }
  };

  const mint_button =
    "connect-wallet-button relative mb-10 z-30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
  const inc_buttons =
    "inc-mint-number connect-wallet-button relative mb-10 z-30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";

  const updateMintData = (amount: number) => {
    setMintAmount(amount);
    let stringAmount = "";
    if (amount == 1) {
      stringAmount = "Mint One";
    } else if (amount == 2) {
      stringAmount = "Mint Two";
    } else if (amount == 3) {
      stringAmount = "Mint Three";
    } else if (amount == 4) {
      stringAmount = "Mint Four";
    } else if (amount == 5) {
      stringAmount = "Mint Five";
    }
    setMintText(stringAmount);
  };

  const getMintButton = () => {
    if (!active) {
      return (
        <button onClick={connect} className={mint_button}>
          {"Connect Wallet"}
        </button>
      );
    } else {
      return (
        <>
          <button
            onClick={
              account
                ? () => {
                    mintPublic();
                  }
                : () => {
                    console.log(account);
                  }
            }
            className={mint_button}
          >
            {mintText}
          </button>
        </>
      );
    }
  };
  const increaseMintAmount = () => {
    if (!active) {
      return null;
    }
    return (
      <button
        onClick={() => {
          mintAmount < 5 ? updateMintData(mintAmount + 1) : null;
        }}
        className={inc_buttons}
      >
        {"+"}
      </button>
    );
  };

  const decreaseMintAmount = () => {
    if (!active) {
      return null;
    }
    return (
      <button
        onClick={() => {
          mintAmount > 1 ? updateMintData(mintAmount - 1) : null;
        }}
        className={inc_buttons}
      >
        {"-"}
      </button>
    );
  };
  return (
    <>
      <div className="new button">
        {decreaseMintAmount()}
        {getMintButton()}
        {increaseMintAmount()}
        {/* no metamask modal */}
        {loading ? (
          <>
            <div className="fixed top-28 w-screen z-30">
              <h2 className="dongle fixed top-10 flex flex-col text-9xl">
                Loading...
              </h2>
              <motion.div
                style={{
                  width: 216,
                  height: 216,
                  zIndex: -1,
                }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              >
                <div className="w-96 h-96 absolute top-0"></div>
                <img
                  className="fixed z-50"
                  src="/img/floating helmet 1.png"
                  alt="cat helmet"
                />
              </motion.div>
            </div>
            <div
              onClick={() => setShowModal(false)}
              className="blur opacity-75 fixed inset-0 z-0 bg-black"
            ></div>
          </>
        ) : (
          <></>
        )}

        {userModal ? (
          <>
            <div
              id="modal"
              className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
            >
              <div className="relative p-5 top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
                <div className="flex telex text-5xl justify-between items-center text-red-500 text-xl rounded-t-md px-4 py-2">
                  <h3>ERROR</h3>
                  <button
                    className="text-blue-500"
                    onClick={() => setUserModal(false)}
                  >
                    x
                  </button>
                </div>

                <div className="max-h-58 text-4xl text-black p-4">
                  <p>Metamask not found.</p>
                  <p>
                    Please make sure you have metamask installed and set to the
                    Ethereum Mainnet on your browser or mobile phone.{" "}
                  </p>
                </div>

                <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                  <button
                    className="bg-blue-500 telex text-xl text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setUserModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="relative z-50">
          {/* successfully minted modal */}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            content="Successfully minted"
            style="absolute"
            statusColor="text-green-700 "
          />
          {/* mint failed modal */}
          <Modal
            showModal={errorModal}
            setShowModal={setErrorModal}
            content="Failed mint"
            style="absolute"
            statusColor="text-red-700"
          />
        </div>
      </div>
    </>
  );
};

export default ConnectWalletButton;
