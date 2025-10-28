export function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Welcome to Hummm
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mb-8">
          Transform your ideas into reality with AI-powered assistance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/my-idea"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            Start Your Idea
          </a>
          <a
            href="/my-dashboard"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20"
          >
            View Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
