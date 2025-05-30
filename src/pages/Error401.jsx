const Error401 = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-red-200 text-center font-sans">
      <h1 className="text-lg text-gray-800">You don’t have permission!</h1>
        <div className="text-[160px] font-bold text-white select-none">401</div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
          <img
            src="https://cdn0.iconfinder.com/data/icons/brown-bear-emoticon-filled/64/cute_bear_face_avatar-31-512.png"
            alt="Bear"
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

export default Error401;