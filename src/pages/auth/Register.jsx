import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // simulasi proses registrasi
        setTimeout(() => {
            setLoading(false);
            navigate("/login"); // redirect ke login setelah selesai
        }, 1500);
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            {loading && (
                <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center justify-center">
                    <ImSpinner2 className="me-2 animate-spin" />
                    Creating account...
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="********"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="********"
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className={`w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
                        (loading) ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`}
                >
                    Register
                </button>

                <div className="flex justify-center mt-4">
                    <p className="text-sm text-gray-700">
                        Already have an account?
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="text-blue-500 hover:underline ml-1"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}
