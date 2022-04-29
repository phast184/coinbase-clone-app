import React, { useState } from "react";
import styled from "styled-components";
import Transfer from "./Transfer";
import CoinSelector from "./CoinSelector";
import Loader from "./Loader";
import Receive from "./Receive";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const renderLogic = (option) => {
    switch (option) {
      case "send":
        return (
          <Transfer
            selectedToken={selectedToken}
            sanityTokens={sanityTokens}
            setAction={setAction}
            walletAddress={walletAddress}
            thirdWebTokens={thirdWebTokens}
          />
        );
      case "receive":
        return (
          <Receive
            setAction={setAction}
            walletAddress={walletAddress}
            selectedToken={selectedToken}
          />
        );
      case "transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <Loader />
          </div>
        );
      case "transferred":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#27ad75",
            }}
          >
            Transfer complete
          </div>
        );
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      default:
        break;
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
      <ModalMain>{renderLogic(action)}</ModalMain>
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
