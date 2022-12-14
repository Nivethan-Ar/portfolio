import { useEffect, useRef, useState } from 'react';
import Section from '../../../layouts/section';
import LeftAside from './left-aside';
import RightAside from './right-aside/right-aside';

function LandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const callbackFunction = (entries: any) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <Section customClass='relative overflow-hidden'>
      <LeftAside />

      <div
        ref={containerRef}
        className={`col-start-3 col-end-11 flex flex-col justify-center transition-all duration-1000
        ${isVisible ? 'slide-r-t' : 'slide-r-f'}`}
      >
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
              <span className='text-transparent animate-textGradient bg-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-amber-400 to-purple-600'>
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
          <h2 className='uppercase text-sm mb-1 lg:text-xl text-main-gray'>
            view projects
          </h2>
          <div className='w-1/2 bg-white h-[1px] group-hover:w-full' />
        </div>
      </div>

      <RightAside />
    </Section>
  );
}

export default LandingSection;
