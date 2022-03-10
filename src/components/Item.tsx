import React from "react";
import { Button, ButtonGroup, Card, Col, Row, Stack } from "react-bootstrap";
import styled from "styled-components";

import { ReactComponent as DAI } from "../icons/dai.svg";
import { ReactComponent as ETH } from "../icons/eth.svg";
import { ReactComponent as USDC } from "../icons/usdc.svg";
import { ReactComponent as USDT } from "../icons/usdt.svg";

const Title = styled.h2``;

const MarginVertical = styled.div`
  margin: 10px 0 30px 0;
`;

interface AidItem {
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
}

export default Item;
