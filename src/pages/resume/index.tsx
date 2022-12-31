function Resume() {
  return (
    <div className="resume-scrollbar h-screen bg-left pt-20 lg:pt-24 pb-8 px-4 overflow-x-hidden w-screen bg-gray-700 lg:bg-cover bg-no-repeat lg:bg-[url('/images/bg/resume.jpg')] flex justify-center">
      <div className="text-black bg-white/90 w-full lg:w-[42rem] 2xl:w-[45rem] h-fit hide shadow-2xl font-mark
         flex flex-col overflow-x-hidden p-5 lg:p-10 gap-x-4 gap-y-4
        ">

        {/* Top section */}
        <div className="flex items-center">
          <div className="flex-[2] lg:flex-[1.3] font-bold self-center py-4 overflow-x-hidden">
            <h2 className="text-blue-400 text-4xl lg:text-6xl uppercase">
              Nivethan <br />
              <span className="text-black text-2xl lg:text-[2.7rem]">Ariyaratnam</span>
            </h2>
            <p className="font-code font-light text-left lg:text-center lg:tracking-wider"> {"<"}Software Engineer{"/>"} </p>
          </div>

          <div className="flex-1 lg:flex-1 bg-re-400">
            <img className="w-[80%] lg:w-[70%] ml-auto mr-auto" src="/images/me-crop2.png" />
          </div>

        </div>
        {/* work experience   */}

        <div className="flex flex-col-reverse gap-y-6 lg:flex-row gap-x-4 lg:gap-x-0">
          <div className="bg-blue- flex-1 lg:flex-[1.8]">
            <h3 className="uppercase text-base text-blue-700">Work experience</h3>

            {/* company */}
            <div className="flex gap-x-4">
              <div>logo</div>
              <div className="">
                <p>
                  <span className="font-circular"> Associate Software Engineer <br /> </span>
                  <span>TWC Innovations <br /> </span>
                  <span>A Sri Lankan Technology company with diverse portfolio of products that helps business grow. <br /> </span>
                  <span className="text-blue-500">July 2022 to Present - 6 months</span>
                </p>

                <ul className="list-disc pt-4 pl-8">
                  <li>Translated UI designs to code using React</li>
                  <li>Deployed React applications with Nginx
                    reverse proxy on Digital Ocean cloud
                    platform.</li>
                  <li>Created a GitHub React project Template for
                    the company on GitHub to setup & develop a
                    new project easy & faster</li>
                  <li>Discussed, trained, mentored, and learned
                    from new intern recruits.</li>
                  <li>Code Reviewed Intern PRs and ensured
                    code quality across all the projects.</li>
                  <li>Used Git Hooks using Husky to run tests &
                    lint code before each commit/Pull Request</li>
                  <li>Updated the task statuses on ClickUp to
                    make better time & resource management</li>
                  <li>configured and deployed a Keycloak in
                    production environment coupled with a
                    MySQL database using Docker in Digital
                    Ocean.</li>
                  <li>Added custom themes for Keycloak sign-in,
                    sign-up, and forgot password pages using
                    CSS</li>
                </ul>
              </div>

            </div>

          </div>

          <div className="flex-1 lg:flex-1">
            <h3 className="uppercase text-base text-blue-700">Contact Details</h3>
            <p>linkedin.com/in/nivethan-ar</p>
            <p>nivethan-me@gmail.com</p>
            <p>+94 77 8125 881</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume
