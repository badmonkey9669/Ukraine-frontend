import React from "react";
import { Container, Image } from "react-bootstrap";
import NavBar from "./components/NavBar";

import youwillseeourfaces from "./images/youwillseeourfaces.jpg";

function App() {
  return (
    <Container>
      <NavBar />
      <Image
        src={youwillseeourfaces}
        alt="You will see our faces"
        width={"100%"}
      />
    </Container>
  );
}

export default App;
