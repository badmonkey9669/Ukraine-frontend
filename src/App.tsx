import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Row,
  Stack,
  Tab,
} from "react-bootstrap";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import items from "./items.json";

import UkrFlag from "./icons/ukr_flag.png";
import { ReactComponent as DAI } from "./icons/dai.svg";
import { ReactComponent as ETH } from "./icons/eth.svg";
import { ReactComponent as USDC } from "./icons/usdc.svg";
import { ReactComponent as USDT } from "./icons/usdt.svg";

const Title = styled.h2``;

const MarginVertical = styled.div`
  margin: 10px 0 30px 0;
`;

const Marquee = styled.div`
  height: 25px;
  width: 100%;

  overflow: hidden;
  position: relative;

  > div {
    display: block;
    width: 200%;
    height: 50px;

    position: absolute;
    overflow: hidden;

    animation: marquee 40s linear infinite;
  }

  > span {
    float: left;
    width: 50%;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

function App() {
  const [activeKey, setActiveKey] = useState<string>("first");

  return (
    <Container>
      <NavBar />
      <Image
        src={"/images/youwillseeourfaces.jpg"}
        alt="You will see our faces"
        width={"100%"}
      />
      <Marquee className="marquee">
        <div>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL NOT SEE OUR BACKS.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
          <span>
            YOU WILL SEE OUR FACES.{" "}
            <Image src={UkrFlag} height={20} width={20} />
          </span>
        </div>
      </Marquee>
      <Tab.Container
        defaultActiveKey="first"
        activeKey={activeKey}
        onSelect={(k) => k && setActiveKey(k)}
      >
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="first">Defence Aid</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Humanitarian Aid</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>

      {items
        .filter((item) =>
          activeKey === "first"
            ? item.type === "defence"
            : item.type === "humanitarian"
        )
        .map((item: any, i: number) => {
          return (
            <MarginVertical key={i}>
              <Row>
                <Col>
                  <Card>
                    <Card.Img
                      src={item.imageSrc}
                      alt={item.imageSrc}
                      width={"100%"}
                    />
                    <Card.Body>
                      <Card.Title>
                        <Title>{item.name}</Title>
                      </Card.Title>
                      <b>Estimated Unit Cost: ${item.unitCost}</b>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Stack gap={3}>
                    <p>{item.description}</p>
                    <ButtonGroup>
                      <Stack direction="horizontal" gap={2}>
                        <strong>Donate with: </strong>
                        <Button variant="outline-primary">
                          <ETH /> ETH
                        </Button>
                        <Button variant="outline-info">
                          <USDC /> USDC
                        </Button>
                        <Button variant="outline-success">
                          <USDT /> USDT
                        </Button>
                        <Button variant="outline-warning">
                          <DAI /> DAI
                        </Button>
                      </Stack>
                    </ButtonGroup>
                  </Stack>
                </Col>
              </Row>
            </MarginVertical>
          );
        })}
    </Container>
  );
}

export default App;
