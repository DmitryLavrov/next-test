import Router, {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {MainLayout} from '../../components/main-layout'

export default function Post({post: serverPost}) {
  const router = useRouter()
  // console.log('router:', router)

  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
      const json = await response.json()
      setPost(json)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post)
    return <>
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    </>

  return <>
    <MainLayout title={`Post ${router.query.id}`}>
      <h1>Post page {router.query.id}</h1>
      <button onClick={() => Router.push('/posts')}>Go back posts</button>

      <h3>{post.title}</h3>
      <hr/>
      <p>{post.body}</p>
      <hr/>

      <pre>{JSON.stringify(post, null, 2)}</pre>

    </MainLayout>
  </>
}

Post.getInitialProps = async ({query, req}) => {
  console.log('query.id:', query.id, 'req:', req === null)
  if (!req) return {post: null}
  const res = await fetch(`http://localhost:3030/posts/${query.id}`)
  const json = await res.json()
  return {post: json}
}
