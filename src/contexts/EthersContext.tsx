import { ethers } from "ethers";
import React, { createContext } from "react";

import FundUkraineAbi from "../abis/FundUkraine.json";

import {
  FundUkraine__factory,
  FundUkraine as FundUkraineType,
} from "../typechain-types";

const FundUkraineAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
const MockDaiAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";

interface EthersContextInterface {
  FundUkraine: FundUkraineType;
  provider: ethers.providers.Web3Provider;
  signer: ethers.Signer;
}

export const EthersContext = createContext({} as EthersContextInterface);

export function EthersContextProvider({ children }: any) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // const FundUkraine = new ethers.Contract(
  //   FundUkraineAddress,
  //   FundUkraineAbi,
  //   signer
  // );
  const FundUkraine = FundUkraine__factory.connect(FundUkraineAddress, signer);

  return (
    <EthersContext.Provider
      value={{
        FundUkraine,
        provider,
        signer,
      }}
    >
      <EthersContext.Consumer>
        {(value) => <>{children}</>}
      </EthersContext.Consumer>
    </EthersContext.Provider>
  );
}
