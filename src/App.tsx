import github from '@/assets/github.png';
import linkedin from '@/assets/linkedin.png';

export const App = (): React.JSX.Element => {
  return (
    <section
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-gradient-to-r
        from-green-400
        to-blue-500
        text-white
      "
    >
      <h1
        className="
          animate-pulse
          text-center
          text-5xl
          font-bold
          uppercase
          tracking-wider
          sm:text-7xl
        "
      >
        Template 2k
      </h1>
      <div className="flex items-center justify-center">
        <img src={linkedin} alt="linkedin" className="mr-2 h-8 w-8" />
        <a
          href="https://linkedin.com/in/walber-vaz"
          target="_blank"
          rel="noreferrer"
          className="text-center text-2xl"
        >
          Linkind In Profile (Walber Vaz)
        </a>
        <img src={github} alt="github" className="ml-2 h-8 w-8" />
        <a
          href="https://github.com/walber-vaz"
          target="_blank"
          rel="noreferrer"
          className="text-center text-2xl"
        >
          Github Profile (Walber Vaz)
        </a>
      </div>
    </section>
  );
};
