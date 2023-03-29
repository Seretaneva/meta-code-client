import './App.css'
import AdminNavigation from './components/admin/AdminNavigation'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import TopicsTable from './components/admin/pages/topics/TopicsTable'
import ChaptersPage from './components/admin/pages/chapters/ChaptersPage'
import TopicsPage from './components/admin/pages/topics/TopicsPage'
import AdminMainPage from './components/admin/pages/adminMain/adminMainPage'
import LessonsPage from './components/admin/pages/lessons/LessonsPage'
import AboutPage from './components/admin/pages/about/AboutPage'
import ProblemPage from './components/admin/pages/problems/ProblemPage'
import LoginPage from './components/admin/pages/authenticate/LoginPage'
import SponsorsPage from './components/admin/pages/sponsors/SponsorsPage'
import PublicNavigation from './components/public/PublicNavigation'
import TopicsNavigation from './components/public/TopicsNavigation'
import PublicFooter from './components/public/PublicFooter'

function App () {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  return (
    <div className='App'>
  
      {isAdminPage ? <AdminNavigation /> : <PublicNavigation/>}
      {isAdminPage ? null : <TopicsNavigation/> }
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
             <Route
              path='/admin/sponsors'
              element={<SponsorsPage name='sponsors' />}
            />
            <Route path='/admin/about' element={<AboutPage />} />
            <Route path='/admin' element={<AdminMainPage />} />
            <Route path='/admin/login' element={<LoginPage />} />
          </Routes>
          <PublicFooter></PublicFooter>
        </div>

    </div>
  )
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main
