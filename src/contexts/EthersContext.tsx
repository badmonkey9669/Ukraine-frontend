import { ethers } from "ethers";
import React, { createContext } from "react";

import FundUkraineAbi from "../abis/FundUkraine.json";

const FundUkraineAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
const MockDaiAddress = "0x5302E909d1e93e30F05B5D6Eea766363D14F9892";

export const EthersContext = createContext({} as any);

export function EthersContextProvider({ children }: any) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const FundUkraine = new ethers.Contract(
    FundUkraineAddress,
    FundUkraineAbi,
    signer
  );

  return (
    <EthersContext.Provider
      value={{
        FundUkraine,
      }}
    >
      <EthersContext.Consumer>
        {(value) => <>{children}</>}
      </EthersContext.Consumer>
    </EthersContext.Provider>
  );
}
