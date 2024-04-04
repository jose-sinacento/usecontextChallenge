import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';
import { useTheme } from '../themes/ThemeContext';

function RoutesApp() {
  const { theme } = useTheme();

  return (
    <Router>
      <section className={`App ${theme}`}>
        <div className='content'>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/myjob">MyJob</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/myjob' element={<MyJob />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </div>
      </section>
    </Router>
  )
}

export default RoutesApp;