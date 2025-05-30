const Error403 = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-yellow-200 text-center font-sans">
      <h1 className="text-lg text-gray-800">You musn’t be here!</h1>
        <div className="text-[160px] font-bold text-white select-none">403</div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
          <img
            src="https://www.pngplay.com/wp-content/uploads/12/Cute-Animal-Drawings-PNG-Photo-Image.png"
            alt="ehe"
            className="w-32 h-auto object-contain"
          />
        </div>

      <button
        onClick={() => window.location.href = "/"}
        className="cursor-pointer mt-4 px-6 py-2 border border-black rounded-full bg-white hover:bg-gray-100 transition"
      >
        ↩ Back to Dashboard
      </button>
    </div>
  );
};

export default Error403;