import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import Work from "./components/work"

function Resume() {
  return (
    <div className="resume-scrollbar h-screen bg-left pt-20 lg:pt-24 pb-8 px-4 overflow-x-hidden w-screen bg-gray-700 lg:bg-cover bg-no-repeat lg:bg-[url('/images/bg/resume.jpg')] flex justify-center">
      <div className="text-black bg-white/90 w-full lg:w-[42rem] 2xl:w-[45rem] h-fit hide shadow-2xl font-mark
         flex flex-col overflow-x-hidden p-5 lg:p-8 gap-x-4 gap-y-4 relative
        ">

        {/* Top section */}
        <div className="flex items-center">
          <div className="flex-[2] lg:flex-[1.3] font-bold self-center py-4 overflow-x-hidden">
            <div className="w-fit">

              <h2 className="text-blue-400 text-4xl lg:text-6xl uppercase">
                Nivethan <br />
                <span className="text-black text-[1.6rem] lg:text-[2.7rem]">Ariyaratnam</span>
              </h2>
              <p className="font-code font-light text-left lg:text-right lg:tracking-wider"> {"<"}Software Engineer{"/>"} </p>

            </div>
          </div>

          <div className="flex-1 lg:flex-1 bg-re-400">
            <img className="w-full lg:w-[70%] ml-auto mr-auto" src="/images/me-crop2.png" />
          </div>

        </div>

        {/* work experience   */}

        <Work className="" />
        <BsFillArrowRightCircleFill
          className='fill-black/50 hover:fill-black cursor-pointer absolute text-3xl right-8 bottom-8'
        />
      </div>
    </div>
  )
}

export default Resume
