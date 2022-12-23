const ScrollTop = () => {
  return (
    <button
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      className="hover_me fixed bottom-4 right-4 h-12 w-12 rounded-full bg-white text-center transition duration-500 ease-in-out hover:scale-125"
    >
      <i className="fa-solid fa-chevron-up mx-auto text-3xl font-extrabold text-orange-400" />
    </button>
  );
};

export default ScrollTop;
