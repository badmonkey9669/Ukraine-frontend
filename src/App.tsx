import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { EthersContextProvider } from "./contexts/EthersContext";
import { BlockNativeContextProvider } from "./contexts/BlocknativeContext";
import Landing from "./pages/Landing";
import MyItems from "./pages/MyItems";

function App() {
  return (
    <EthersContextProvider>
      <BlockNativeContextProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="me" element={<MyItems />} />
          </Routes>
        </BrowserRouter>
      </BlockNativeContextProvider>
    </EthersContextProvider>
  );
}

export default App;
