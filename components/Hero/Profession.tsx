import TypewriterText from "./TypewriterText";

const Profession = () => {
  return (
    <h2 className="font-pixelify text-rose-500 text-9xl font-bold text-center max-lg:text-[calc(8vw+48px)] max-md:text-[calc(10vw+38px)] max-sm:text-[calc(13.5vw+16px)] tracking-tight">
      <TypewriterText lines={["Fullstack", "Developer"]} />
    </h2>
  );
};

export default Profession;
