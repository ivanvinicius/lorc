import { AppProps } from 'next/app'

import { GradientFill } from '../components/GradientIcon/GradientFill'
import { globalStyle } from '../styles/global'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {globalStyle()}
      <GradientFill />
      <Component {...pageProps} />
    </>
  )
}
