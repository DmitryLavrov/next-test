import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'

export default function MyApp({Component, pageProps}) {
  return <>
    <NextNprogress/>
    <Component {...pageProps} />
  </>
}
