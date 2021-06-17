import Link from 'next/link'
import {MainLayout} from '../components/main-layout'
import styles from '../styles/error.module.scss'

export default function Error() {
  return <>
    <MainLayout>
      <h1 className={styles.error}>Error 404</h1>
      <p>Please go to <Link href={'/'}><a>home page</a></Link></p>
    </MainLayout>
  </>
}
