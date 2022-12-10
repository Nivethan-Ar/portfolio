import Section from '../../layouts/section';
import LeftAside from './components/left-aside';
import RightAside from './components/right-aside/right-aside';

function Home() {
  return (
    <div>
      <div className='bg-[#10101a] min-h-screen text-white font-circular'>
        <Section customClass=''>
          <LeftAside />

          <div className='col-start-3 col-end-11 flex flex-col justify-center'>
            <div
              className='flex flex-col-reverse gap-y-4 items-start justify-between gap-x-0 bg-slate-40
              lg:flex-row lg:items-center lg:gap-y-0
            '
            >
              <h1 className=' font-extrabold font-mark flex flex-col bg-slate-00'>
                <span className='text-4xl lg:text-8xl'>Hi,</span>
                <span className='text-4xl lg:text-8xl'>
                  {' '}
                  I&apos;M
                  <span className='text-transparent bg-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
                    {' '}
                    NIVETHAN{' '}
                  </span>
                </span>
                <span className='text-2xl lg:text-6xl'>software engineer</span>
              </h1>
              <div
                className='bg-red-40 w-[55%] relative border-2  rounded-full hover:border-violet-800
                lg:w-[30%] lg:border-4 self-center'
              >
                <img
                  src='/images/me-crop2.png'
                  className='rounded-full w-full p-2 lg:p-4'
                />
              </div>
            </div>

            <div className='w-fit group mt-8 lg:mt-16'>
              <h2 className='uppercase text-sm mb-1 lg:text-xl'>view projects</h2>
              <div className='w-1/2 bg-white h-[1px] group-hover:w-full' />
            </div>
          </div>

          <RightAside />
        </Section>

        <div className='h-screen grid grid-cols-12'>checking next</div>
      </div>
    </div>
  );
}

export default Home;
