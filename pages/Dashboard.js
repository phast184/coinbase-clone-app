import Header from "../components/Header";
import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.NEXT_PUBLIC_METAMASK_PRIAVTE_KEY,
      ethers.getDefaultProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
      //if the RPC URL is not valid, we cannot get correct info from the network
    )
  );
  //Fetch API every time porfolio is rendered
  useEffect(() => {
    const getThirdWebTokens = async () => {
      try {
        const coins = await fetch(process.env.NEXT_PUBLIC_COINS_API);
        const sanityTokens = (await coins.json()).result;
        setSanityTokens(sanityTokens);
        setThirdWebTokens(
          sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    getThirdWebTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainter>
        <Header
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </MainContainter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;
const MainContainter = styled.div`
  flex: 1;
`;

export default Dashboard;
