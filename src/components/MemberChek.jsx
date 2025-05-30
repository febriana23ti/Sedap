import { useState } from "react";
import members from "../assets/customers.json";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const MemberCheck = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setResult({ error: "Masukkan email yang valid!" });
      return;
    }

    const member = members.find(
      (m) => m.email.toLowerCase() === email.toLowerCase()
    );

    setResult(member ? { member } : { error: "❌ Email tidak terdaftar sebagai member." });
  };

  const getMemberStyle = (loyalty) => {
    switch (loyalty.toLowerCase()) {
      case "gold":
        return "bg-yellow-100 text-yellow-800 border-yellow-400";
      case "silver":
        return "bg-gray-100 text-gray-800 border-gray-400";
      case "platinum":
        return "bg-blue-100 text-blue-800 border-blue-400";
      default:
        return "bg-white text-black";
    }
  };

  const getEmoji = (loyalty) => {
    switch (loyalty.toLowerCase()) {
      case "gold":
        return "🥇";
      case "silver":
        return "🥈";
      case "platinum":
        return "🏆";
      default:
        return "👤";
    }
  };

  return (
    <section
      id="member"
      className="relative w-full py-50 bg-gray-50 overflow-hidden scroll-mt-20"
    >
      {/* Left Decorative Circles */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 space-y-5 hidden lg:block px-20">
        <img
          src="https://akcdn.detik.net.id/visual/2020/04/17/fbd5fd6c-17cf-4c2a-a97b-a89dd47b5657_169.jpeg?w=1200"
          alt="left1"
          className="rounded-full w-40 h-40 object-cover shadow-lg"
        />
        <img
          src="https://nibble-images.b-cdn.net/nibble/original_images/restoran_mewah_khas_indonesia_05_98b363a0cc_lbSw16I7B.webp"
          alt="left2"
          className="rounded-full w-60 h-60 object-cover shadow-lg"
        />
        <img
          src="https://asset.kompas.com/crops/gl4yXjwGAvVjNgeOMorZzWAkwNY=/32x19:1000x664/750x500/data/photo/2022/12/09/6392a51cdec7d.jpg"
          alt="left3"
          className="rounded-full w-50 h-50 object-cover shadow-lg"
        />
      </div>

      {/* Right Decorative Circles */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 space-y-5 hidden lg:block">
        <img
          src="https://www.gramedia.com/blog/content/images/2019/07/kuliner-indonesia.jpg"
          alt="right1"
          className="rounded-full w-50 h-50 object-cover shadow-lg"
        />
        <img
          src="https://nibble-images.b-cdn.net/nibble/original_images/restoran_mewah_khas_indonesia_09_63fbb9dfb2_dctt2MSiJ.jpg"
          alt="right2"
          className="rounded-full w-60 h-60 object-cover shadow-lg"
        />
        <img
          src="https://www.unileverfoodsolutions.co.id/id/inspirasi-chef/ragam-selera-di-restoran-indonesia/ini-6-sajian-asli-betawi-yang-bisa-jadi-tren-masa-kini/jcr:content/parsys/content-aside-footer/textimage_copy_copy_/image.transform/jpeg-optimized/image.1667391469402.jpg"
          alt="right3"
          className="rounded-full w-40 h-40 object-cover shadow-lg"
        />
      </div>

      <div className="container mx-auto flex flex-col items-center px-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border p-10 z-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Check Your Member
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Masukkan email Anda untuk mengetahui status keanggotaan Anda di Sedap.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all duration-200 text-lg"
            >
              Cek Member
            </button>
          </form>

          {result && result.error && (
            <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-2 border border-red-300 text-lg">
              <AiOutlineCloseCircle className="text-xl" />
              <span>{result.error}</span>
            </div>
          )}

          {result && result.member && (
            <div
              className={`mt-6 p-4 border rounded-lg flex items-center gap-2 ${getMemberStyle(
                result.member.loyalty
              )} text-lg`}
            >
              <AiOutlineCheckCircle className="text-xl" />
              <span>
                {getEmoji(result.member.loyalty)} Selamat datang,{" "}
                <strong>{result.member.customerName}</strong>! Anda adalah
                member <strong>{result.member.loyalty}</strong>.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MemberCheck;
