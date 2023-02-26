import './App.css'
import AdminNavigation from './components/admin/AdminNavigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopicsTable from './components/admin/pages/topics/TopicsTable'
import ChaptersPage from './components/admin/pages/chapters/ChaptersPage'
import TopicsPage from './components/admin/pages/topics/TopicsPage'
import AdminMainPage from './components/admin/pages/adminMain/adminMainPage'
import LessonsPage from './components/admin/pages/lessons/LessonsPage'
import AboutPage from './components/admin/pages/about/AboutPage'
import ProblemPage from './components/admin/pages/problems/ProblemPage'
import { useState } from 'react'
import LoginPage from './components/admin/pages/authenticate/LoginPage'

function App () {
  return (
    <div className='App'>
      <Router>
        <AdminNavigation />
        <div className='container'>
          <Routes>
            <Route
              path='/admin/topics'
              element={<TopicsPage name='Topics' />}
            />
            <Route
              path='/admin/chapters/:topicName/:id'
              element={<ChaptersPage name='Chapters' topicName='Java' />}
            />
            <Route
              path='/admin/lessons/:topicName/:id/:chapterName/:chapterId'
              element={<LessonsPage name='Lessons' />}
            />
            <Route
              path='/admin/content-lesson'
              element={<TopicsTable name='Content lesson' />}
            />
            <Route
              path='/admin/problems'
              element={<ProblemPage name='problems' />}
            />
            <Route path='/admin/about' element={<AboutPage />} />
            <Route path='/admin' element={<AdminMainPage />} />
            <Route path='/admin/login' element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
