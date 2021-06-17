import Head from 'next/head'
import Link from 'next/link'

export function MainLayout({children, title = 'Next App'}) {
  return <>
    <nav>
      <Head>
        <title>{title + ' | just test'}</title>
      </Head>
      <ul>
        <li><Link href={'/'}><a>Home</a></Link></li>
        <li><Link href={'/posts'}><a>Posts</a></Link></li>
        <li><Link href={'/about'}><a>About</a></Link></li>
      </ul>
    </nav>
    <main>
      {children}
    </main>
    <style jsx>{`
      nav {
        width: calc(100% - 4rem);
        position: fixed;
        top: 0;
      }

      nav ul {
        height: 40px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #33B;
      }

      nav ul li {
        list-style: none;
      }

      nav ul li a {
        color: #EEE;
        text-decoration: none;
      }

      nav ul li a:hover,
      nav ul li a:active {
        color: #CCE;
        text-decoration: none;
      }
      
      main {
      margin-top: 40px;
      margin-left: 1rem;
      }
    `}</style>
  </>
}
