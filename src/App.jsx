import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/landingpage';
import{ Route, Routes } from 'react-router-dom';
import Homepage from './components/Home';
import Footer from './components/footer';

function App() {
  return (
 <div className="flex flex-col min-h-screen">
  <Navbar />
  <LandingPage />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </main>
  <Footer />
</div>
    
  )
}

export default App
