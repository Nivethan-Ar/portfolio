import { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import rainSound from '/sounds/trance.mp3';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

interface Props {
  parentClasses: string;
}

function SoundToggle(props: Props) {
  const { parentClasses } = props;

  const [toggle, setToggle] = useState(false);

  const [play, { stop, pause, sound }] = useSound(rainSound, {
    volume: 0.5,
    loop: true,
  });

  const ref = useRef<HTMLInputElement>(null);

  const handleToggleClick = () => {
    if (ref?.current?.checked) {
      play();
      setToggle(true);
    }
    if (!ref.current?.checked) {
      stop();
      setToggle(false);
    }
  };

  return (
    <div className={`${parentClasses}`}>
      <div className='flex items-center gap-x-1'>
        <MdMusicOff className={`text-lg ${toggle ? 'opacity-50' : ''}`} />
        <label
          className='inline-flex relative items-center cursor-pointer'
          onClick={handleToggleClick}
        >
          <input type='checkbox' ref={ref} value='' className='sr-only peer' />
          <div
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-
                peer-focus:ring-blue-300
              dark:peer-focus:ring-blue-800 rounded-full peer
              dark:bg-gray-700 peer-checked:after:translate-x-full
              peer-checked:after:border-white after:content-[''] after:absolute
              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
              after:border after:rounded-full after:h-5 after:w-5 after:transition-all
              after:duration-700 dark:border-gray-600 peer-checked:bg-blue-600
              
              "
          />

          <span className='ml-[2px] text-sm font-medium text-gray-900 dark:text-gray-300'>
            <MdMusicNote className={`text-lg ${toggle ? '' : 'opacity-50'}`} />
          </span>
        </label>
      </div>
    </div>
  );
}

export default SoundToggle;
