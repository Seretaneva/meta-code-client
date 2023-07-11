import React, { useEffect, useRef } from 'react'
import './../../App.css'
import PublicNavigation from './PublicNavigation'
import TopicsNavigation from './TopicsNavigation'
import ChapterNavigation from './ChapterNavigation'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './PublicApp.module.css'
import PublicFooter from './PublicFooter'

function ContentNavigation () {
  const { id } = useParams()
  const hamburgerIconRef = useRef(null)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    console.log('toggleMenu function is called')
    console.log('menuRef.current:', menuRef.current)
    if (menuRef.current) {
      menuRef.current.classList.toggle(styles.menushow)
    }
  }

  useEffect(() => {
    const handleClickOutside = event => {
      const isClickInsideMenu = menuRef.current.contains(event.target)
      const isClickInsideHamburger = hamburgerIconRef.current.contains(
        event.target
      )
      if (!isClickInsideMenu && !isClickInsideHamburger) {
        menuRef.current.classList.remove('menushow')
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        menuRef.current.classList.remove('show')
      }
    }

    document.addEventListener('click', handleClickOutside)
    window.addEventListener('resize', handleResize)

    // Clean up function
    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <PublicNavigation />
      <TopicsNavigation />
      <div className={styles.content_container}>
        <div className={styles.left_menu}>
          <div className={`${styles.sidenav} ${styles.chapters_content}`}>
            <div className={styles.left}>
              <div className={styles.menu_container}>
                <div
                  className={styles.hamburger_icon}
                  onClick={toggleMenu}
                  ref={hamburgerIconRef}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div ref={menuRef} className={styles.menu}>
                  <ChapterNavigation topicId={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.middle_contant}>
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <hr />
          <h3>Test</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div className={styles.right_ads}>
          <div className={`well`}>
            <p>ADS</p>
          </div>
          <div className={`well`}>
            <p>ADS</p>
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  )
}

export default ContentNavigation
