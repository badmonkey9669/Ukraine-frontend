import Notify from "bnc-notify";
import React, { createContext, useContext } from "react";
import { EthersContext } from "./EthersContext";

export const BlockNativeContext = createContext({} as any);

export function BlockNativeContextProvider({ children }: any) {
  //   const { provider } = useContext(EthersContext);
  console.log(process.env.BlocknativeApiKey);
  const notify = Notify({
    dappId: process.env.BlocknativeApiKey, // [String] The API key created by step one above
    networkId: 31337, // [Integer] The Ethereum network ID your Dapp uses.
  });

  return (
    <BlockNativeContext.Provider
      value={{
        notify,
      }}
    >
      <BlockNativeContext.Consumer>
        {() => <>{children}</>}
      </BlockNativeContext.Consumer>
    </BlockNativeContext.Provider>
  );
}
