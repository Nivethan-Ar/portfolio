import { TbFidgetSpinner } from 'react-icons/tb';
import { ImSpinner9 } from 'react-icons/im';

function Loader() {
  return (
    <div className='h-screen absolute top-0 bottom-0 left-0 right-0 z-10 bg-[#10101a] max-w-screen text-8xl'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <ImSpinner9 className='animate-spin text-sky-400' />
      </div>
    </div>
  );
}

export default Loader;
