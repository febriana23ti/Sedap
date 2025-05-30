const Error400 = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-200 text-center font-sans">
      <h1 className="text-lg text-gray-800">Sorry, Request Time Out!</h1>
        <div className="text-[160px] font-bold text-white select-none">400</div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
          <img
            src="https://www.onlygfx.com/wp-content/uploads/2017/03/cute-cat-9.png"
            alt="Cat"
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

export default Error400;