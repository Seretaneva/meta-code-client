import React, { useEffect, useState, forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PublicApp.module.css'

const ChapterNavigation = forwardRef(({ selectedTopic }, ref) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [chapters, setItems] = useState([])
  const [activeChapter, setActiveChapter] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/chapter/${id}/all`, {})
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
    }
  }, [id])

  const handleChapterClick = chapterId => {
    setActiveChapter(activeChapter === chapterId ? null : chapterId)
  }

  if (id === '*') {
    return <h2></h2>
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div >
        <ul className={`${styles.lessons_menu} ${styles.tree}`}>
          {chapters.map(chapter => (
            <li
              key={chapter.chapterId}
              className={`${styles.chapter} ${
                activeChapter === chapter.chapterId ? styles.active : ''
              }`}
              onClick={() => handleChapterClick(chapter.chapterId)}
            >
              {chapter.chapterName}
              <ul
                style={{
                  display:
                    activeChapter === chapter.chapterId ? 'block' : 'none'
                }}
              >
                {chapter.lessons.map(lesson => (
                  <li key={lesson.lessonId} className={styles.lesson}>
                    <a className={styles.lessonLink} href='#'>
                      {lesson.lessonName}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
})

export default ChapterNavigation
