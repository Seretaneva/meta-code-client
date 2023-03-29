import { useEffect, useState } from 'react'
import styles from './PublicApp.module.css'
import './../../App.css';

function TopicsNavigation () {
  const [topics, setItems] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
    <div>
      <div className ={styles.topics_nav}>
        <div className={styles.topics_nav_toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.topics_navbar_menu}>
          <ul>
          {topics.map(topic => (
            
          <li key={topic.topicId}><a className={styles.links} href="test" >{topic.topicName}</a></li>)
          )};
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopicsNavigation
