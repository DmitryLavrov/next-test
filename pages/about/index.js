import Router from 'next/router'
import {MainLayout} from '../../components/main-layout'

export default function About({about}) {
  const onClickButton = () => Router.push('/')

  return <>
    <MainLayout title={'About page'}>
      <h1>{about.title}</h1>
      <p>{about.body}</p>
      <button onClick={onClickButton}>Go back home</button>
    </MainLayout>
  </>
}

About.getInitialProps = async () => {
  const res = await fetch('http://localhost:3030/about')
  const json = await res.json()
  return {about: json}
}
