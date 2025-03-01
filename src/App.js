import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import General from "./pages/General";
import Monitor from './pages/Monitor';
import Mainlayout from "./layout/Mainlayout"
import MonitorSneaker from './pages/MonitorSneaker';
import Dashboard from './pages/Dashboard';
import Changelogs from './pages/Changelogs';
import SneakerEdit from './pages/SneakerEdit';
import AlternativeResell from './pages/AlternativeResell';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Router>
      <div className=" ">
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<General />} />
            <Route path="/monitor/sneaker" element={<MonitorSneaker />} />
            <Route path="/monitor/alternativeresell" element={<AlternativeResell />} />
            <Route path="/monitor/tickets" element={<Tickets />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/changelog" element={<Changelogs />} />
            <Route path="/monitor/sneaker/edit/123" element={<SneakerEdit />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
