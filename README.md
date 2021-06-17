This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NextJS Быстрый Курс - SSR на React JS [2020]

by Vladilen Minin

```shell
npx create-next-app next-test
cd next-test

npm install sass
```

[JSON Server](https://github.com/typicode/json-server)

```shell
npm install -g json-server

json-server db.json -w -p 3030 -d 450
```
[Concurrently](https://www.npmjs.com/package/concurrently)

```shell
npm i -D concurrently
```

In common case SSR doesn't work:
```js
export default function Posts() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:3030/posts')
      const json = await response.json()
      setPosts(json)
    }

    load()
  }, [])

  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}
```

getInitialProps - SSR works well

```js
export default function Posts({posts}) {
  return <pre>{JSON.stringify(posts, null, 2)}</pre>
}

Posts.getInitialProps = async () => {
  const res = await fetch('http://localhost:3030/posts')
  const json = await res.json()
  return { posts: json }
}
```

using __getServerSideProps__ instead of getInitialProps

```js
export async function getServerSideProps({req}) {
  const res = await fetch('http://localhost:3030/posts')
  const json = await res.json()
  return {
    props: {posts: json}, // will be passed to the page component as props
  }
}
```

### Next.js Progressbar

```shell
npm i nextjs-progressbar --force
```
Configuring _app.js
```js
import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'

export default function MyApp({Component, pageProps}) {
  return <>
    <NextNprogress/>
    <Component {...pageProps} />
  </>
}
```
