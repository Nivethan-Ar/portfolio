interface Props {
  name: string;
  imgSrc: string;
  projectType: string[];
  projectLink: string;
  githubLink: string;
}

function ProjectCard(props: Props) {
  const { name, projectType, projectLink, githubLink, imgSrc } = props;

  return (
    <div className='w-full flex justify-center bg-green- '>
      <div className='w-full lg:w-full h-[25rem] lg:h-[35rem] rounded-[2rem] p-6 lg:p-12 border border-[#20222e] bg-gradient-to-b from-[#2325317b] '>
        <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full'>
          <div
            className='h-full bg-cover bg-center rounded-[1rem] lg:rounded-[2rem]'
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          />
          {/*  */}
          <div className='lg:ml-12 mt-6 lg:mt-0 flex flex-col gap-y-6 lg:gap-y-12 lg:justify-center items-start -red-400 relative'>
            <h1 className='font-mark font-bold capitalize text-3xl lg:text-4xl'>
              {name}
            </h1>

            <a href={projectLink} className='relative'>
              <p
                className='text-sm lg:text-lg text-[#b0f3f1] font-bold font-circular uppercase tracking-widest
                after:content-[""] after:absolute after:w-1/3 after:-bottom-2 after:left-0 after:h-[2px] after:bg-white
                after:transition-all after:duration-500 after:ease-in-out
                after:hover:w-full  after:hover:duration-500 after:hover:transition-all after:hover:ease-in-out
              '
              >
                visit the website
              </p>
            </a>

            <a href={githubLink} className='relative'>
              <p
                className='text-sm lg:text-lg text-[#b0f3f1] font-bold font-code  tracking-widest
                after:content-[""] after:absolute after:w-1/3 after:-bottom-2 after:right-0 after:h-[2px] after:bg-white
                after:transition-all after:duration-500 after:ease-in-out
                after:hover:w-full  after:hover:duration-500 after:hover:transition-all after:hover:ease-in-out
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
