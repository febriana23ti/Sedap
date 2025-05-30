import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Forgot() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            // Delay untuk menampilkan pesan sukses sebelum redirect
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }, 1500);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                Forgot Your Password?
            </h2>
            
            {!loading && !success && (
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            )}

            {loading && (
                <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center justify-center">
                    <ImSpinner2 className="me-2 animate-spin" />
                    Sending password reset link to your email...
                </div>
            )}

            {success && (
                <div className="bg-green-200 mb-5 p-5 text-sm rounded flex items-center justify-center text-green-700">
                    <BsFillCheckCircleFill className="me-2" />
                    Reset link sent! Redirecting to login...
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <button
                    disabled={loading || success}
                    type="submit"
                    className={`w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
                        (loading || success) ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
                      }`}
                >
                    Send Reset Link
                </button>

                <div className="flex justify-center mt-4">
                    <p>Back to
                        <button                         
                            onClick={() => navigate("/login")}
                            className="text-blue-500 hover:underline ml-1"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </form>
        </div>
    )
}
