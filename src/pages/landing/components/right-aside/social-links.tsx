function SocialLinks() {
  return (
    <div className='bg- capitalize'>
      <ul
        className='grid grid-cols-1 [&>a>li]:gap-x-4 gap-y-6 text-lg font-circular
      [&>a>li>span]:hidden lg:[&>a>li>span]:block -mt-16
      '
      >
        <a href='http://www.linkedin.com/in/nivethan-ar/' className="group" target='_blank' rel='noopener noreferrer'>
          <li className='flex items-center'>
            <img src='/images/linkedin.png' className='w-6 lg:w-8' />
            <span className='text-white opacity-60  group-hover:opacity-100 font-bold'>
              linkedin
            </span>
          </li>
        </a>

        <a href='http://github.com/Nivethan-Ar' className="group" target='_blank' rel='noopener noreferrer'>
          <li className='flex items-center'>
            <img src='/images/github.png' className='w-6 lg:w-8' />
            <span className='text-white opacity-60 group-hover:opacity-100 font-bold'>
              github
            </span>
          </li>
        </a>

        <a href='mailto:nivethan.me@gmail.com' className="group" target='_blank'>
          <li className='flex items-center'>
            <img src='/images/email.png' className='w-6 lg:w-8' />
            <span className='text-white opacity-60 group-hover:opacity-100 font-bold'>
              email
            </span>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default SocialLinks;
