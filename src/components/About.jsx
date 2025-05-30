import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <section id="about" className="container mx-auto px-10 py-8 scroll-mt-20 ">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Gambar */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1733967095/attached_image/7-makanan-korea-yang-menyehatkan-cocok-di-lidah-lokal.jpg"
                        alt="About"
                        className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Konten */}
                <div className="w-full lg:w-1/2 text-gray-800">
                    <p className="flex items-center mb-4">
                        <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                            <AiOutlineInfoCircle className="text-xl" />
                        </span>
                        <span className="text-xl ml-3 bg-white border border-green-500 text-green-800 py-1 px-3 rounded">
                             Tentang Kami
                        </span>
                    </p>

                    <h3 className="text-2xl font-semibold mb-2">
                        You Taste, Smile, and Come Back for More at Sedap
                    </h3>
                    <p className="text-gray-8   00 mb-4">
                        Dari resep autentik hingga kreasi modern yang menggoda, Sedap adalah tempat di mana setiap gigitan punya cerita. Kami menggabungkan cita rasa khas Nusantara dengan sentuhan inovatif, 
                        menggunakan bahan-bahan berkualitas tinggi dan pelayanan hangat — semua untuk menciptakan pengalaman makan yang tak terlupakan.
                    </p>

                    <p className="text-grey-800">
                        Apakah kamu sedang mencari hidangan cepat saji yang memuaskan, atau santapan lengkap bersama keluarga tercinta, 
                        Sedap selalu menyambutmu dengan rasa dan suasana yang membuatmu ingin kembali lagi.
                    </p>

                    {/* Testimoni */}
                    <div className="mt-8 border-l-4 border-gray-300 pl-4">
                        <p className="text-gray-600 text-sm italic">
                            "Rasanya seperti pulang ke rumah. Cita rasa klasik yang membawa kenangan, tapi tetap terasa segar dan kekinian."
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <img
                                src="https://img.okezone.com/content/2019/11/21/298/2132842/hobi-makan-pedas-ini-trik-food-vlogger-magdalena-agar-tak-sakit-perut-8G1Zv2clqb.jpg"
                                alt="Avatar"
                                className="rounded-full w-10 h-10 object-cover"
                            />
                            <div>
                                <p className="text-gray-800 font-semibold text-sm m-0">Ayu M. Rahmawati</p>
                                <p className="text-gray-500 text-xs m-0">Food Blogger & Loyal Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
