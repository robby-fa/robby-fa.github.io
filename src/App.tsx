import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MyFeeds from './pages/MyFeeds';
import CheatSheetForPentest from './pages/feeds/CheatSheetForPentest';
import LinuxBasics from './pages/feeds/LinuxBasics';

function App() {
  return (
    <Router>
      <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feeds" element={<MyFeeds />} />
          <Route path="/feeds/cheat-sheet-pentest" element={<CheatSheetForPentest />} />
          <Route path="/feeds/linux-basics" element={<LinuxBasics />} />
        </Routes>

        <footer className="bg-slate-800 text-slate-400 text-center py-5 text-sm">
          <p>&copy; 2025 Robby Firdauzy Alfenjy. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
