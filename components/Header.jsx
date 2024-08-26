import Link from "next/link";

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div className='flex items-center gap-3'>
        <h1 className='font-bold text-xl bg-sky-500 text-white px-2 py-1 rounded'>
          M
        </h1>
        <p className='font-bold text-xl hover:text-sky-500'>Matthew</p>
      </div>

      <div className='flex gap-3'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Me</Link>
      </div>
    </div>
  );
};

export default Header;
