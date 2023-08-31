import styles from './PublicApp.module.css'
import { useNavigate } from 'react-router-dom'

function PublicNavigation () {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.main_nav}>
        <div className={styles.logo}>
          <a className={styles.logo__text} href='/'>
            FdC
          </a>
        </div>
        <ul className={styles.nav_links}>
          <li>
            <a href='www.google.com'>Acasa</a>
          </li>
          <li>
            <a href='www.google.com'>probleme</a>
          </li>
          <li>
            <a href='www.google.com'>doneaza</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PublicNavigation
