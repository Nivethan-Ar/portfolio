import Section from '../../../../layouts/section';
import ProjectCard from './project-card';

function ProjectsSection() {
  return (
    <Section>
      <div className='col-start-3 col-end-11 font-circular mt-20'>
        <div className='flex flex-col gap-y-4 [&>p]:w-full lg:[&>p]:w-[38rem] '>
          <p
            className="text-xl text-main-gray font-code text-center lg:text-end
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

        <div>
          <h2
            className='text-lg lg:text-5xl font-extrabold text-transparent font-mark bg-transparent bg-clip-text
          bg-gradient-to-r from-[#b0f3f1] to-[#b56d4e] mt-16 lg:mt-40'
          >
            Yeah, These are my projects
          </h2>
          <p className=' text-main-gray mt-6 mb-6'>
            Here are some of my works, Hope you find it interesting.
          </p>

          <div className='mb-10 mt-16 lg:mt-40 space-y-16 lg:space-y-40'>
            <ProjectCard
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
            />
            <ProjectCard
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
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;
