import Section from '../../layouts/section';
import LandingSection from './components/landing-section';
import LeftAside from './components/left-aside';
import ProjectsSection from './components/projects-section';
import RightAside from './components/right-aside/right-aside';

function Home() {
  return (
    <div className='bg-[#10101a] text-white font-circular'>
      <LandingSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
