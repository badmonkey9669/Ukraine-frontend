import React, { useEffect, useState } from "react";
import { Container, Image, Navbar, Stack } from "react-bootstrap";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import UkrFlag from "../icons/ukr_flag.png";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

function NavBar() {
  const [address, setAddress] = useState<string>();
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>();

  useEffect(() => {
    async function connect() {
      const instance = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(instance);
      const signerGuy = await provider.getSigner();
      const addr = await signerGuy.getAddress();
      setSigner(signerGuy);
      setAddress(addr);
    }

    connect();
  }, []);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <Stack gap={2} direction="horizontal">
            <Image src={UkrFlag} height={50} width={50} />
            <h4>You Will See Our Faces</h4>
          </Stack>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/me">{address}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
