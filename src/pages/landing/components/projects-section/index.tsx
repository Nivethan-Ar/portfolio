import Section from '../../../../layouts/section';
import ProjectCard from './project-card';

function ProjectsSection() {
  return (
    <Section>
      <div
        id='project-section'
        className='col-start-3 col-end-11 font-circular'
      >
        <div className='my-40 flex flex-col gap-y-4 [&>p]:w-full lg:[&>p]:!w-[38rem] items-center'>
          <p
            className="text-xl text-main-gray font-code text-center
                      before:content-['\201c'] before:text-6xl lg:before:text-8xl before:mr-2 before:font-circular before:text-white before:relative before:top-[25px]
                      after:content-none "
          >
            Dedicated to solving complex problems using {'<'}code{'/>'}
            {/* <p className='flex items-center'> */}
            {/* <span className='text-4xl text-green-600'>{'<'}</span> */}
            {/* <span> */}
            {/* {'<'}code{'>'} */}
            {/* </span> */}
            {/* <span className='text-4xl text-green-600'>{'>'}</span> */}
            {/* </p> */}
          </p>

          <p className='text-base first-letter:text-2xl lg:first-letter:text-3xl text-[#c4c4c4] text-justify'>
            As a full stack software engineer with over 1 year of industrial
            experience, I am skilled in developing web and software applications
            from end to end. As an IT graduate, I have a strong foundation in
            computer science and a passion for solving complex problems using
            code.
          </p>
          <p className='text-base text-[#c4c4c4] text-justify'>
            In my previous roles, I have worked on a variety of projects, from
            designing user interfaces to implementing back-end logic and
            databases. My goal is to continue growing as a full stack developer,
            and to use my skills and expertise to create value for clients and
            organizations.
          </p>
        </div>

        <div className='flex flex-col items-center mb-16 lg:mb-40'>
          <h2
            className='text-4xl text-center lg:text-5xl font-extrabold text-transparent font-mark bg-transparent bg-clip-text
          bg-gradient-to-r from-[#b0f3f1] to-[#b56d4e]'
          >
            Yeah, These are my projects
            <p className='text-sm text-left lg:text-base font-circular font-normal self-start text-main-gray mt-6 mb-'>
              Here are some of my works, Hope you find it interesting.
            </p>
          </h2>

          <div className='mb-10 mt-16 lg: space-y-16 lg:space-y-28 w-full lg:w-[80%] bg-orange-'>

            <ProjectCard
              name='ML dashboard'
              imgSrc='/images/projects/dashboard.jpg'
              imgClassNames='!bg-left !brightness-90'
              githubLink='https://github.com/Nivethan-Ar/ml-dashboard'
              projectLink='https://ml-dashboard.vercel.app/'
              projectType={['front-end', 'back-end', 'api']}
            />


            <ProjectCard
              name='cashify'
              imgSrc='/images/projects/cashify.jpg'
              githubLink='https://github.com/Nivethan-Ar/cashify-banking-app'
              projectLink='https://nivethan-ar.github.io/cashify-banking-app/'
              projectType={['front-end', 'back-end', 'api']}
            />

            <ProjectCard
              name='loop Studios'
              imgSrc='/images/projects/loop-studios.jpg'
              githubLink='https://github.com/Nivethan-Ar/frontend-with-react-and-tailwind/tree/main/src'
              projectLink='https://the-loop-studios.vercel.app/'
              projectType={['front-end', 'back-end', 'api']}
            />

            <ProjectCard
              name='loop Studios'
              imgSrc='/images/projects/obest-cat.webp'
              githubLink='https://github.com/Nivethan-Ar/obese-cat'
              projectLink='https://github.com/Nivethan-Ar/obese-cat'
              projectType={['front-end', 'back-end', 'api']}
            />
            {/* <ProjectCard
              name='loop Studios'
              imgSrc='/images/projects/loop-studios.jpg'
              githubLink='/'
              projectLink='/'
              projectType={['front-end', 'back-end', 'api']}
            />
            <ProjectCard
              name='loop Studios'
              imgSrc='/images/projects/loop-studios.jpg'
              githubLink='/'
              projectLink='/'
              projectType={['front-end', 'back-end', 'api']}
            /> */}

            {/* <div className='flex justify-center'>
              <a
                className='font-circular text-base uppercase font-bold text-[#b0f3f1]'
                href='/'
              >
                {' '}
                see all projects
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;
