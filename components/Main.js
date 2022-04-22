import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promo from "./Promo";
const Main = ({ walletAddress, sanityTokens, thirdWebTokens }) => {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
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
