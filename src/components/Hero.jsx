import heroimage from "../assets/heroimage.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-2xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I&apos;m a</span> <br />
          <span className="typeAnimation">Web Developer</span>
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          I am a web developer with a passion for creating functional
          applications. I currently only have experience in the front-end, but I
          am eager to learn more about the back-end.
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white"
          >
            Download CV/Resume
          </a>
          <a
            href="/contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
