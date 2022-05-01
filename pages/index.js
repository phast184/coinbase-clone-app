import styled from 'styled-components';
import {useWeb3} from '@3rdweb/hooks';
import Dashboard from './Dashboard';

export default function Home() {
  const {address} = useWeb3();
  return (
  <Wrapper>
    <Dashboard />
  </Wrapper>);
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: white;
  display: grid;
  place-items: center;
  overflow: scroll;
`