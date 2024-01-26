import React, { useEffect, useState } from 'react'
import styles from './PublicApp.module.css'
import { Link } from 'react-router-dom'
import PublicFooter from './PublicFooter'
import SocialLinks from '../SocialLinks'

function HomeComponent () {
  const [topics, setTopics] = useState([])

  const [infoHome, setInfoHomeInfo] = useState('')

  useEffect(() => {
    // Fetch Topics
    fetch('http://localhost:8080/topic/all', { mode: 'cors' })
      .then(res => res.json())
      .then(
        result => {
          setTopics(result)
        },
        error => {
          console.log('Error fetching topics:', error)
        }
      )

    fetch('http://localhost:8080/fabrica-de-coduri-info/1', { mode: 'cors' })
      .then(res => res.json())
      .then(
        result => {
          setInfoHomeInfo(result)
        },
        error => {
          console.log('Error fetching infoHomeInfo:', error)
        }
      )
  }, [])

  return (
    <div className={styles.home_container}>
      <div className={styles.hero_section}>
        <h1 className={styles.home_title}>{infoHome.titleHome}</h1>
        <p className={styles.home_intro}>{infoHome.introHomeMessage}</p>
      </div>
      <div className={styles.featured_section}>
        <h2 className={styles.home_subtitle}>Subiectele noastre</h2>
        <div className={styles.topics_container}>
          {topics.map(topic => (
            <Link
              key={topic.topicId}
              to={`/topics/${topic.topicId}`}
              className={styles.topic_button}
            >
              {topic.topicName}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.about_section}>
        <p className={styles.home_info}>
          {infoHome.motivationalMessage}
        </p>
      </div>
      <div className={styles.invite_section}>
        <p className={styles.home_invite}>
          {infoHome.infoHomeMessage}
        </p>
      </div>
      <SocialLinks />
      <PublicFooter />
    </div>
  )
}

export default HomeComponent
