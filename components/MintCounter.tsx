import { useWeb3React } from "@web3-react/core";
import { SlowBuffer } from "buffer";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { mintContractAbi } from "../data/mintContractAbit";
import { injected } from "./Connector";


declare var window: any

const MintCounter = () => {
  const [tokenSupply, setTokenSupply] = useState(3008);
  useEffect(() => {
      const getTokenSupply = async () => {
        let response = await fetch("api/mint_count");
        const data = await response.text()
        setTokenSupply(JSON.parse(data).count)
      };
      getTokenSupply()
    }, [tokenSupply])

  return (
    <div className="text-4xl font-bold pb-10">
      {tokenSupply}/5555 Minted
    </div>
  )
}
export default MintCounter;
