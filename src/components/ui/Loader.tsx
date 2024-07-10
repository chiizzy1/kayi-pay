import Image from 'next/image';
import favicon from '../../app/favicon.ico';

const Loader = () => {
  return (
    <div className='loader'>
      <Image src={favicon} alt='' />
    </div>
  );
};

export default Loader;
