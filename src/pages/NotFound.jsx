function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 text-center font-sans">
      <h1 className="text-2xl font-bold text-gray-800">Unknown Page - Page not Found!</h1>
        <div className="text-[160px] font-bold text-white select-none">404</div>
        
        <div className="absolute top-120 left-200 -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/cute-dinosaur-holds-sign-error-404-illustration-download-in-svg-png-gif-file-formats--jurassic-logo-happy-oldschool-and-fantasy-pack-people-illustrations-9708247.png"
            alt="dino"
            className="w-60 h-auto object-contain -rotate-20"
          />
        </div>

      <button
        onClick={() => window.location.href = "/login"}
        className="cursor-pointer mt-4 px-6 py-2 border border-black rounded-full bg-white hover:bg-gray-100 transition font-semibold"
      >
        ↩ Back to Login
      </button>
    </div>
  );
}

export default NotFound;
