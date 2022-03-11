import React from "react";
import { Col, Container, Image, Nav, Row, Stack, Tab } from "react-bootstrap";
import styled from "styled-components";

import Item from "../components/Item";
import Marquee from "../components/Marquee";
import items from "../items.json";

const StyledNavItem = styled(Nav.Item)`
  padding: 10px 0;
  margin: 10px 0;

  :hover {
    cursor: pointer;
  }
`;

function Landing() {
  return (
    <Container>
      <Image
        src={"/images/youwillseeourfaces.jpg"}
        alt="You will see our faces"
        width={"100%"}
      />

      <Stack gap={3}>
        <Marquee />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <StyledNavItem>
                  <Nav.Link eventKey="first">Defence Aid</Nav.Link>
                </StyledNavItem>
                <StyledNavItem>
                  <Nav.Link eventKey="second">Humanitarian Aid</Nav.Link>
                </StyledNavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {items
                    .filter((item) => item.type === "defence")
                    .map((item: any, i: number) => (
                      <Item key={i} item={item} />
                    ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {items
                    .filter((item) => item.type === "humanitarian")
                    .map((item: any, i: number) => (
                      <Item key={i} item={item} />
                    ))}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Stack>
    </Container>
  );
}

export default Landing;
