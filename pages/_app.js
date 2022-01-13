import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider 
    appId='6LfW7DVmwDGL0xS0096v5zHC8nT4RsLPAAfAQqN8' 
    serverUrl='https://z6cbtxvtcy2e.usemoralis.com:2053/server' 
  >
  <Component {...pageProps} />
  </MoralisProvider>
  )
}

export default MyApp
