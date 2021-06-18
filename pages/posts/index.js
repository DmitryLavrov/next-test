import Router from 'next/router'
import {MainLayout} from '../../components/main-layout'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Posts({posts: serverPosts}) {
  const onClickRandomPost = () => {
    const postId = Math.ceil(Math.random() * 1000)
    Router.push(`/posts/${postId}`)
  }

  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`)
      const json = await response.json()
      setPosts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts)
    return <>
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    </>

  return <>
    <MainLayout title={'Posts page'}>
      <h1>Posts page</h1>
      <button onClick={() => Router.push('/')}>Go back home</button>
      <button onClick={onClickRandomPost}>Random post</button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
            {/*<Link href={`/posts/post.[id]`} as={`/posts/${post.id}`}>*/}
              <a>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(posts, null, 2)}</pre>

    </MainLayout>
  </>
}

Posts.getInitialProps = async ({req}) => {
  if (!req) return {posts: null}
  const res = await fetch('http://localhost:3030/posts')
  const json = await res.json()
  return {posts: json}
}

// export async function getServerSideProps({req}) {
//   const res = await fetch('http://localhost:3030/posts')
//   const json = await res.json()
//   return {
//     props: {posts: json}, // will be passed to the page component as props
//   }
// }
