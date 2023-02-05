interface Props {
  name: string;
  imgSrc: string;
  projectType: string[];
  projectLink: string;
  githubLink: string;
  imgClassNames?:string;
}

function ProjectCard(props: Props) {
  const { name, projectType, projectLink, githubLink, imgSrc,imgClassNames } = props;

  return (
    <div className='w-full flex justify-center bg-green- '>
      <div className='w-full lg:w-full h-[25rem] lg:h-[35rem] rounded-[2rem] p-6 lg:p-12 border-2 border-[#20222e] hover:border-white/60 transition-all duration-1000 bg-gradient-to-b from-[#2325317b] '>

        <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full'>
          <div
            className={`${imgClassNames}  h-full bg-cover bg-center rounded-[1rem] lg:rounded-[2rem] `}
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          />
          {/*  */}
          <div className='lg:ml-12 mt-6 lg:mt-0 flex flex-col gap-y-6 lg:gap-y-12 lg:justify-center items-start -red-400 relative'>
            <h1 className='font-mark font-bold capitalize text-xl lg:text-4xl'>
              {name}
            </h1>

            <a href={projectLink} target='_blank' className='relative'>
              <p
                className='text-sm lg:text-lg text-[#b0f3f1] font-bold font-circular uppercase tracking-widest animated-underline
              '
              >
                visit the website
              </p>
            </a>

            <a href={githubLink} target='_blank' className='relative'>
              <p
                className='text-sm lg:text-lg text-[#b0f3f1] uppercase font-bold font-circular  tracking-widest animated-underline-to-l
              '
              >
                Check the
                <span className='font-code font-bold'>
                  {' <'}code{'/>'}
                </span>
              </p>
            </a>

            <h1 className='font-circular text-main-gray font-bold capitalize text-xs lg:text-sm hidden lg:absolute bottom-4'>
              {' '}
              #{projectType.join(' | #')}{' '}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
