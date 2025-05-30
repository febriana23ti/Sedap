import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
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
        <section id="home" className="container mx-auto px-10 py-8 scroll-mt-20">
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full lg:w-1/2">
                    <div>
                        <h3 className="text-2xl mb-3 text-gray-900">You Taste, Smile, and Come Back for More at Sedap.</h3>
                        <h1 className="text-gray-900 text-4xl font-semibold leading-relaxed">
                           From authentic recipes to modern culinary twists, Sedap is where every bite tells a story. <br /><span className="text-green-600">Sedap.</span>
                        </h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Cita rasa khas, bahan berkualitas, dan pelayanan hangat 
                        </p>
                        <p className=" text-gray-600 text-lg">
                            — semua untuk pengalaman makan yang tak terlupakan. 
                        </p>
                        <div className="flex flex-wrap items-center mt-6 gap-4">
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <img src="https://markeythemes.vercel.app/skywave/images/google.png" alt="Google" className="h-10 w-10" />
                                <div>
                                    <h4 className="text-gray-900 font-bold">4.5</h4>
                                    <p className="text-gray-500">Best Rated On Google</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <img src="https://play-lh.googleusercontent.com/XrIOKJrR_RqOZU0wEyN_SfrtUMyvUI3ZGlG6FWS-OJLGCP3jdQA8Jzuu_rhj2WlTdRCv" alt="Gojek" className="h-15 w-15" />
                                <div>
                                    <h4 className="text-gray-900 font-bold">4.7 </h4>
                                    <p className="text-gray-500">Best Rated On Gofood</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                    <div>
                        <img
                            src="https://kemenparekraf.go.id/_next/image?url=https%3A%2F%2Fapi2.kemenparekraf.go.id%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F64c%2F77c%2F801%2F64c77c801cf37828050831.jpg&w=3840&q=75"
                            alt="Main"
                            className="w-full h-auto rounded-full object-cover"
                        />
                    </div>
                </div>
             </div>
        </section>
    );
}
