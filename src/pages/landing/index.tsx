import { lazy, Suspense } from 'react';
import Loader from './components/loader';
const Footer = lazy(() => import('./components/footer'));
const LandingSection = lazy(() => import('./components/landing-section'));
const ProjectsSection = lazy(() => import('./components/projects-section'));

function Home() {
  return (
    <div className='bg-[#10101a] text-white font-circular'>
      <Suspense fallback={<Loader />}>
        <LandingSection />
        <ProjectsSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
