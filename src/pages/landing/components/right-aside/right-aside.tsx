import { VscGithub } from 'react-icons/vsc';
import { RiTelegramLine } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';
import SocialLinks from './social-links';
import SoundToggle from './sound-toggle';

function RightAside() {
  return (
    <div className='col-start-11 col-end-13 '>
      <div className='flex flex-col justify-center items-center h-full bg-orange-'>
        {/* Audio Player */}
        <SoundToggle parentClasses='absolute top-8 right-4 lg:right-0 lg:-translate-x-full ' />

        <SocialLinks />
      </div>

      <div className='absolute -bottom-2 -right-4 '>
        <img
          src={'/images/hand-right.webp'}
          className='w-40 ml-auto lg:w-56 2xl:w-72 animate-handMove'
          alt='hand'
        />
      </div>
    </div>
  );
}

export default RightAside;
