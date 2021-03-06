import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';

const supportedChainIds = [4]
const connector = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider connectors={connector} supportedChainIds = {supportedChainIds}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp
