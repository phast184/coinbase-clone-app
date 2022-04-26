import React, { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const renderLogic = () => {
    if (action === "send") {
      return (
        <Transfer
          selectedToken={selectedToken}
          sanityTokens = {sanityTokens}
          setAction={setAction}
          walletAddress={walletAddress}
          thirdWebTokens={thirdWebTokens}
        />
      );
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          onClick={() => setAction("send")}
          style={action === "send" ? selectedStyle : unselectedStyle}
        >
          <p>Send</p>
        </Option>
        <Option
          onClick={() => setAction("receive")}
          style={action === "receive" ? selectedStyle : unselectedStyle}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{renderLogic()}</ModalMain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;

export default TransferModal;
