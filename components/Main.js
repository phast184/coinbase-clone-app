import { useWeb3 } from "@3rdweb/hooks";
import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
const Main = ({sanityTokens, thirdWebTokens }) => {
  const {address} = useWeb3();
  return (
    <Wrapper>
      <Portfolio
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`;

export default Main;
