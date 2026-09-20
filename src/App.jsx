import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

/** Old capitalised URLs kept alive so existing links and bookmarks still land. */
const legacyRoutes = {
  '/Home': '/',
  '/Contact': '/contact',
  '/SpaceGame': '/projects/space-game',
  '/Restaurant': '/projects/restaurants',
  '/Editor': '/projects/text-editor',
  '/Pizza': '/projects/pizza-quiz',
  '/Ineed': '/projects/ineedup',
  '/FirstCv': '/projects/first-cv',
};

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />

      {Object.entries(legacyRoutes).map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
