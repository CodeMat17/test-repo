import Image from "next/image";

const Hero = () => {
  return (
    <div className='px-4 py-8 md:flex md:items-center gap-6 justify-center'>
      <div className="flex justify-center">
        <Image alt='me' priority width={300} height={300} src='/dev2.png'
          className=""
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl tracking-wider">I am Dieon Ezzy</h1>
        <p className="text-lg font-medium">I am a Web Developer</p>
        <p className="font-medium text-gray-400">CodeMat</p>
        
      </div>
    </div>
  );
};

export default Hero;
