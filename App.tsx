import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Queues } from './components/Queues';
import { WorkItemViewer } from './components/WorkItemViewer';
import { Exceptions } from './components/Exceptions';
import { Search } from './components/Search';
import { Analytics } from './components/Analytics';
import { Audit } from './components/Audit';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/queues" element={<Queues />} />
          <Route path="/work-item/:id" element={<WorkItemViewer />} />
          <Route path="/exceptions" element={<Exceptions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </Layout>
    </Router>
  );
}
