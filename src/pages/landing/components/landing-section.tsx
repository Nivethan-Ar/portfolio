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

  const scrollToProjects = () => {
    const projectSection = document.querySelector('#project-section');
    projectSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
          <div className='font-extrabold font-mark flex flex-col gap-y- justify-center bg-slate-00'>
            <span className='text-4xl lg:text-7xl 2xl:text-8xl'>Hi,</span>
            <span className='text-4xl lg:text-7xl 2xl:text-8xl pt-1 lg:pt-2 inline-block align-middle leading-none'>
              {' '}
              I&apos;M
              <span className=' text-transparent animate-textGradient bg-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-amber-400 to-purple-600'>
                {' '}
                NIVETHAN{' '}
              </span>
            </span>
            <span className='text-xl capitalize self-end lg:text-4xl 2xl:text-5xl'>
              software engineer
            </span>
          </div>
          <div
            className='bg-red-40 w-[55%] relative border-2  rounded-full hover:border-violet-800
                lg:w-[30%] lg:border-4 self-center'
          >
            <img
              src='/images/me-crop2.png'
              className='rounded-full w-full p-2 lg:p-4'
              loading='eager'
            />
          </div>
        </div>

        <div className='w-fit group relative mt-8 lg:mt-16'>
          <a
            onClick={scrollToProjects}
            className='uppercase select-none cursor-pointer text-sm mb-1 lg:text-xl text-main-gray animated-underline'
          >
            view projects
          </a>
        </div>
      </div>

      <RightAside />
    </Section>
  );
}

export default LandingSection;
