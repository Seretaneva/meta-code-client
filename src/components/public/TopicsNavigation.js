import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './PublicApp.module.css'
import './../../App.css'

function TopicsNavigation () {
  const [topics, setItems] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleBtnRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:8080/topic/all', {
      mode: 'cors'
    })
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true)
          setItems(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  useEffect(() => {
    function handleClickOutside (event) {
      if (
        !toggleBtnRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [toggleBtnRef, menuRef])

  return (
    <div>
      <div className={styles.topics_nav}>
        <div
          className={`${styles.topics_nav_toggle}`}
          ref={toggleBtnRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`${styles.topics_navbar_menu} ${
            isMenuOpen ? styles.show : ''
          }`}
          ref={menuRef}
        >
          <ul>
            {topics.map(topic => (
              <li key={topic.topicId}>
                <Link className={styles.links} to={`/topics/${topic.topicId}`}>
                  {topic.topicName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopicsNavigation
