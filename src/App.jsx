import { Routes, Route, Link } from 'solid-app-router';
import { lazy } from 'solid-js';

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div>
      mkdmkldg
      <nav>
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
