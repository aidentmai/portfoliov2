import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              I&apos;m an undergraduate student attending the Cal State
              University of Dominguez Hills. I am majoring in Computer Science
              and I am currently in my senior year. My goal is to become a
              full-stack developer and work for a company that will allow me to
              grow and learn new things.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt=""
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
