import github from '@/assets/github.png';
import linkedin from '@/assets/linkedin.png';

export const Home = (): React.JSX.Element => {
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
      <div className="flex flex-col justify-center p-4 md:flex-row md:items-center">
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <img src={linkedin} alt="linkedin" className="h-8 w-8" />
          <a
            href="https://linkedin.com/in/walber-vaz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-2xl"
          >
            Linkind (Walber Vaz)
          </a>
        </div>
        <div
          className="
            flex
            items-center
            justify-center
          "
        >
          <img src={github} alt="github" className="h-10 w-10" />
          <a
            href="https://github.com/walber-vaz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-2xl"
          >
            Github (Walber Vaz)
          </a>
        </div>
      </div>
      <div
        className="
            flex
            items-center
            justify-center
            md:items-center
            md:justify-center
          "
      >
        <p className="text-xl md:text-2xl">
          Licença
          <a
            href="https://github.com/walber-vaz/template-react-vite-tailwind-ts/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-xl md:text-2xl"
          >
            MIT
          </a>
        </p>
      </div>
    </section>
  );
};
