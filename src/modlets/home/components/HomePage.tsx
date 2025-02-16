import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to my super simple Blog</h1>
      <Link
        to="/posts"
        className="bg-white text-primary-500 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
      >
        Explore our posts
      </Link>
    </div>
  );
};
