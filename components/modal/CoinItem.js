import { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";

const CoinItem = ({
  token,
  sender,
  selectedToken,
  setSelectedToken,
  setAction,
  thirdWebTokens
}) => {
  /**Figure out token balance, token logo and tick when a token is selected */
  const [balance, setBalance] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  
  useEffect(() => {
    const getImageUrl = () => {
      const url = imageUrlBuilder(client).image(token.logo).url();
      setImageUrl(url);
    };

    const getBalance = async () => {
        let activeToken
        thirdWebTokens.map(thirdWebToken => {
            if (thirdWebToken.address === token.contractAddress) {
                activeToken = thirdWebToken;
            }
        })
        const balance = await activeToken.balanceOf(sender[0]);
        setBalance(balance.displayValue);
    }

    
    getImageUrl();
    getBalance();
  }, []);
  return (
    <Wrapper
      style={{
        backgroundColor: selectedToken.name === token.name && "#141519",
      }}
      onClick={() => {
        setSelectedToken(token);
        setAction("send");
      }}
    >
      <Main>
        <Icon>
          <img src={imageUrl} />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbolg}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
           {balance} {token.symbol}
      </Balance>
    </Wrapper>
  );
};

export default CoinItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  &:hover {
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div``;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`;

const Balance = styled.div``;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
