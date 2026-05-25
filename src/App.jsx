import { useState } from 'react';

import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home    from './pages/Home';
import Solar   from './pages/Solar';
import Hostel  from './pages/Hostel';
import Mess    from './pages/Mess';
import Library from './pages/Library';

import './styles/global.css';

const PAGES = {
  home:    Home,
  solar:   Solar,
  hostel:  Hostel,
  mess:    Mess,
  library: Library,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const PageComponent = PAGES[activePage] ?? Home;

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <PageComponent setActivePage={setActivePage} />
      <Footer setActivePage={setActivePage} />
      <WhatsAppFloat />
    </>
  );
}
