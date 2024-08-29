import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { PredictionContext } from "../context/PredictionContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const styles = {
  container: "flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed",
  leftHeader: "flex flex-1",
  searchWrapper: "flex flex-1",
  searchInputContainer:
    "text-white items-center flex  flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg",
  searchIcon: "text-gray-400 text-3xl mr-3",
  searchInputWrapper: "text-gray-400 text-lg w-full",
  searchInput: "bg-transparent outline-none w-full",
  rightHeader: "flex items-center justify-end text-white gap-8",
  menuItem: "cursor-pointer font-semibold hover:text-green-500 duration-300 text-xl",
};



const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        {/* <Image src="	https://pbs.twimg.com/profile_images/1792887366736289792/jU-DRtG4_400x400.jpg" 
        alt="image" 
        width={20}
        height={20}
        className="w-1 h-1" /> */}
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputContainer}>
          <AiOutlineSearch className={styles.searchIcon} />
          <div className={styles.searchInputWrapper}>
            <input placeholder="Search..." className={styles.searchInput} />
          </div>
        </div>
      </div>
      <div className={styles.rightHeader}>
        <button className={styles.menuItem}>Rewards</button>
        <div className={styles.menuItem}>Portfolio</div>
        <WalletMultiButton className={styles.menuItem} />
      </div>
    </div>
  );
};

export default Header;
