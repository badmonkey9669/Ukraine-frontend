import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

import UkrFlag from "../icons/ukr_flag.png";

const StyledMarquee = styled.div`
  height: 25px;
  width: 100%;

  padding: 20px 0;
  margin: 10px 0;
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

function Marquee() {
  return (
    <StyledMarquee className="marquee">
      <div>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL NOT SEE OUR BACKS.{" "}
          <Image src={UkrFlag} height={20} width={20} />
        </span>
        <span>
          YOU WILL SEE OUR FACES. <Image src={UkrFlag} height={20} width={20} />
        </span>
      </div>
    </StyledMarquee>
  );
}

export default Marquee;
