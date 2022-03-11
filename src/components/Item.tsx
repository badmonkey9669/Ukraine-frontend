import { ethers } from "ethers";
import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import styled from "styled-components";
import { BlockNativeContext } from "../contexts/BlocknativeContext";

import { EthersContext } from "../contexts/EthersContext";
import { ReactComponent as DAI } from "../icons/dai.svg";
import { ReactComponent as ETH } from "../icons/eth.svg";
import { ReactComponent as USDC } from "../icons/usdc.svg";
import { ReactComponent as USDT } from "../icons/usdt.svg";

const Title = styled.h2``;

const MarginVertical = styled.div`
  margin: 10px 0 30px 0;
`;

interface AidItem {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  type: string;
  unitCost: number;
}

interface Props {
  item: AidItem;
}

function Item(props: Props) {
  const { item } = props;
  const { FundUkraine } = useContext(EthersContext);
  const { notify } = useContext(BlockNativeContext);
  const [daiAmount, setDaiAmount] = useState(0);
  const [ethAmount, setEthAmount] = useState(0);

  const clearInputs = () => {
    setDaiAmount(0);
    setEthAmount(0);
  };

  const handleDonateWithEth = async () => {
    if (ethAmount > 0) {
      const txn = await FundUkraine.donateWithEth(item.id, {
        value: ethers.utils.parseEther(String(ethAmount)),
      });

      console.log(txn.hash);

      if (notify) {
        notify(txn.hash);
      }

      clearInputs();
    }
  };

  const handleDonateWithDAI = async (amount: number) => {
    const txn = await FundUkraine.donateWithDai(item.id, amount);

    console.log(txn.hash);

    if (notify) {
      notify(txn.hash);
    }

    clearInputs();
  };

  return (
    <MarginVertical>
      <Row>
        <Col>
          <Card>
            <Card.Img src={item.imageSrc} alt={item.imageSrc} width={"100%"} />
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
              <Stack gap={2}>
                <strong>Donate with: </strong>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="eg. 0.02"
                    aria-label="Donate ETH"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <Button
                      variant="outline-primary"
                      onClick={handleDonateWithEth}
                    >
                      <ETH /> ETH
                    </Button>
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="eg. 200000"
                    aria-label="Donate USDC"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <Button variant="outline-info">
                      <USDC /> USDC
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="eg. 200000"
                    aria-label="Donate USDT"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    <Button variant="outline-success">
                      <USDT /> USDT
                    </Button>
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="eg. 200000"
                    aria-label="Donate DAI"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onChange={({ target: { value } }: any) => {
                      setDaiAmount(value);
                    }}
                  >
                    <Button
                      variant="outline-warning"
                      onClick={() => handleDonateWithDAI(daiAmount)}
                    >
                      <DAI /> DAI
                    </Button>
                  </InputGroup.Text>
                </InputGroup>
              </Stack>
            </ButtonGroup>
          </Stack>
        </Col>
      </Row>
    </MarginVertical>
  );
}

export default Item;
