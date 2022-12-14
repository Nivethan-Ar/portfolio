import Section from '../../../../layouts/section';
import { FaHeartbeat } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <Section customClass='!min-h-fit border-t-2 border-gray-700  py-16 bg-[#161624]'>
        <div className='font-circular col-start-3 col-end-11'>
          <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center gap-y-8 lg:gap-x-12'>
            <p
              className="text-lg font-circular text-main-gray text-center lg:w-[33rem] lg:mb-12 lg:text-xl
                      before:content-['\201c'] before:text-6xl lg:before:text-8xl before:mr-2 before:font-circular before:text-white before:relative before:top-[20px]
                      after:content-none"
            >
              Programming isn't about what you know, it's about what you can
              <span className='font-code text-[#b0f3f1]'>
                &nbsp;{'<'}
                Figure out
                {'/>'}
              </span>
            </p>
            <img
              loading='lazy'
              className='w-60'
              src='/images/footer/man-with-laptop.svg'
            />
          </div>
        </div>
      </Section>
      {/*  */}
      <Section customClass='min-h-fit py-6'>
        <div className='bg-[#10101a] col-start-3 col-end-11'>
          <p className='text-main-gray text-xs tracking-widest text-center'>
            Design inspired from Adeola | This page is made with&nbsp;
            <FaHeartbeat className='inline-block animate-pulse text-lg fill[#b0f3f1] fill-purple-600 mx-' />
            &nbsp; by
            <a
              target={'_blank'}
              href='https://www.linkedin.com/in/nivethan-ar/'
            >
              <span className='text[#b0f3f1] text-purple-600'>
                {' '}
                &nbsp;Nivethan
              </span>
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}

export default Footer;
