function SocialLinks() {
  return (
    <div className='bg- capitalize'>
      <ul className='grid grid-cols-1 [&>li]:gap-x-6 gap-y-6 text-lg font-circular'>
        <li className='flex items-center'>
          <img src='/images/linkedin.png' className='w-8' />
          linkedin
        </li>

        <li className='flex items-center'>
          <img src='/images/github.png' className='w-8' />
          email
        </li>

        <li className='flex items-center'>
          <img src='/images/email.png' className='w-8' />
          linkedin
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
