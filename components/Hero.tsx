import Link from "next/link";
import React, { useEffect, useState } from "react";
import DragCat from "./animations/DragCat";

import Clock from "./Clock";
import ConnectWalletButton from "./ConnectWalletButton";
import MintCounter from "./MintCounter";
import LooksRareIconSVG from "./svgs/LooksRareIcon";

function Hero() {
  const mint_button =
    "connect-wallet-button relative mb-10 z-30 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
  let deadline = "February, 15 2022 14:00:00 PST";
  const [showWalletConnect, setShowWalletConnect] = useState(false);

  const handleTimeUpdate = (time: number) => {
    if (time <= 0) {
      setShowWalletConnect(true);
    } else {
      setShowWalletConnect(false);
    }
  };
  return (
    <div className="up lg:top-32 top-12 relative h-screen background-game overflow-hidden max-w-full flex flex-col justify-center items-center">
      <h1 className="up font-title mb-14 max-w-full overflow-hidden">
        HERO GALAXY
      </h1>

      <span className="relative z-50">
        {/* {showWalletConnect && <ConnectWalletButton />} */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://armory.herogalaxy.io/heroes"
        >
          <button className={mint_button}>Go to Armory</button>
        </a>
      </span>
      {showWalletConnect ? (
        <></>
      ) : (
        <>
          <h3 className="text-6xl font-bold mb-10">SOLD OUT</h3>
        </>
      )}
      {/* <MintCounter /> */}

      <div className="flex flex-row px-10 relative z-50">
        <Link href="https://opensea.io/collection/hero-galaxy-heroes">
          <a target="_blank">
            {" "}
            <img
              className="mx-5 w-14 flex justify-center"
              src="/img/opensea.svg"
              alt="opensea"
            />
          </a>
        </Link>
        <Link href="https://looksrare.org/collections/0xD77e17Ecc3942B6E83F67c56999C5230c70A85a4">
          <a target="_blank">
            {" "}
            <LooksRareIconSVG
              className={"mx-5 w-14 flex justify-center looks-rare-icon"}
            />
          </a>
        </Link>
        <Link href="https://discord.com/invite/mdG6H64Fjf">
          <a target="_blank">
            {" "}
            <img className="mx-5" src="/img/discord.svg" alt="discord" />
          </a>
        </Link>
        <Link href="https://twitter.com/HeroGalaxyNFT">
          <a target="_blank">
            <img className="mx-5" src="/img/twitter.svg" alt="discord" />
          </a>
        </Link>
      </div>
      <div className="flex height-1000 z-30 lg:bottom-5 items-center absolute flex-row max-w-full overflow-hidden absolute ">
        <DragCat />
      </div>
    </div>
  );
}

export default Hero;
