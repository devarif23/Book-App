import { Link } from "react-router";

const Error = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">

                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-6 text-gray-300 text-lg leading-8">
                    The page you are looking for doesn't exist, may have been moved,
                    or the URL is incorrect.
                </p>

                {/* Illustration */}
                <div className="my-10 flex justify-center">
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full bg-cyan-500/20 blur-2xl absolute"></div>

                        <div className="relative text-8xl animate-bounce">
                            🚀
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
                    >
                        🏠 Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 rounded-xl border border-gray-500 text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        ← Go Back
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-10 text-gray-500 text-sm">
                    Error Code: <span className="text-red-400 font-semibold">404</span>
                </p>

            </div>
        </div>
    );
};

export default Error;