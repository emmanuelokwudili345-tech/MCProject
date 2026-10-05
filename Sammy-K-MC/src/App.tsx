import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.key, location.hash]);

  const handleBookClick = () => {
    navigate('/contact#booking');
  };

  return (
    <BookingProvider>
      <div className="app-layout" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
        <Navbar onBookClick={handleBookClick} />

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage onBookClick={handleBookClick} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BookingProvider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;

