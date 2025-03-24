import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headar';
import Home from './pages/Home';
import Education from './pages/Education';
import Courses from './pages/Courses';
import Contests from './pages/Contests';
import Skills from './pages/Skills';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import References from './pages/References';
import Books from './pages/Books';
import Update from './pages/Update';
import { HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <Router>
      <div className="min-h-screen bg-white text-black font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<Update />} />
          <Route path="/education" element={<Education />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/references" element={<References />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;