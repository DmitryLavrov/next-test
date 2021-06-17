import Link from 'next/link'
import {MainLayout} from '../components/main-layout'

export default function Index() {
  return <>
    <MainLayout title={'Home page'}>
      <h1>Index page</h1>
      <p><Link href="/about"><a>Goto page About</a></Link></p>
      <p><Link href={'/posts'}><a>Goto page Posts</a></Link></p>
    </MainLayout>
    <style jsx>{`
      a {
        color: #99E;
      }
    `}</style>
  </>
}
