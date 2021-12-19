import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import moduleName from '@'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
