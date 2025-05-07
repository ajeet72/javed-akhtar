export default function HeroSection() {
  return (
    <div className="min-h-fit mclaren-font text-white flex flex-col items-center justify-center py-14 pt-36 text-center">
      {/* Avatar + Tagline */}
      <div className="relative mb-8">
        <div className="flex justify-center">
          <img
            src="/avatar.png" // Replace with your emoji-style avatar
            alt="Avatar"
            className=""
          />
        </div>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300">
          Hello! I am <span className="text-purple-400">Ajeet Sharma</span>
        </div>
      </div>

      {/* Slogan */}
      <div className="text-2xl sm:text-3xl font-semibold leading-snug mb-2">
        A Designer who <br />
        <span className="text-4xl sm:text-5xl font-bold">
          Judges a book <br /> by its{' '}
          <span className="relative inline-block">
            <span className="text-purple-400 z-10 relative">cover</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-400 opacity-50 rounded-full blur-sm"></span>
          </span>
          ...
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-8">
        Because if the cover does not impress you, what else can?
      </p>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        I'm a <span className="text-purple-400">Software Engineer.</span>
      </h1>
      <p className="text-sm text-gray-300 mb-8">
        Currently, I'm a Software Engineer at{' '}
        <a
          href="https://facebook.com"
          className="text-blue-400 hover:underline inline-flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12z" />
          </svg>
          Facebook
        </a>
      </p>

      {/* Bio */}
      <p className="max-w-xl text-sm sm:text-base text-gray-300 px-4">
        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
        I make meaningful and delightful digital products that create an equilibrium
        between user needs and business goals.
      </p>
    </div>
  );
}
