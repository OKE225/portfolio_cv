const WelcomeText = () => {
  return (
    <h1 className="text-zinc-50 text-8xl font-bold max-lg:flex max-lg:flex-col max-xl:text-7xl">
      Hello!, I am{" "}
      <span className="text-rose-500 border-6 px-2 max-lg:p-1">
        {"<Patryk />"}
      </span>
    </h1>
  );
};

export default WelcomeText;
