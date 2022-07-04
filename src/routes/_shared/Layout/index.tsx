import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
