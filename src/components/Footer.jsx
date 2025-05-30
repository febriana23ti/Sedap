import Logo from "./Logo";
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-green-300 text-gray-900 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo dan Deskripsi */}
        <div>
          <Logo/>
        </div>

        {/* Menu Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sedap.</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Sedap</a></li>
            <li><a href="#product" className="hover:underline">Top Product</a></li>
            <li><a href="#member" className="hover:underline">Member</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* About Feb */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tentang Feb</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="https://www.instagram.com/febriana_tan/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/febriana-tan-feb05/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/@Febriana_23TI" target="_blank" rel="noreferrer" className="hover:underline">Youtube</a></li>
          </ul>
        </div>

        {/* Contact + Maps */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <p className="text-sm text-gray-800 mb-4">Telp: (0761) 53939</p>
          <p className="text-sm text-gray-800 mb-2">Jl. Umban Sari No.1, Umban Sari, Kec. Rumbai, Kota Pekanbaru, Riau 28265</p>

          <div className="w-full h-32 rounded overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5021370514332!2d101.42609689999999!3d0.5709752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab67086f2e89%3A0x65a24264fec306bb!2sPoliteknik%20Caltex%20Riau!5e1!3m2!1sen!2sid!4v1747929601315!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sedap Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-gray-500 text-center">
        <p className="text-sm text-gray-700 mb-4">© 2025 Sedap. All rights reserved.</p>
        <div className="flex justify-center items-center space-x-4">
          {[{
            icon: <FaFacebookF />,
            href: 'https://www.facebook.com/Politeknik.Caltex.Riau/?ref=embed_page#',
            label: 'Facebook'
          }, {
            icon: <FaXTwitter />,
            href: 'https://x.com/PolicaltexRiau',
            label: 'X'
          }, {
            icon: <FaYoutube />,
            href: 'https://www.youtube.com/channel/UC_xsN7_lBMY_m_C8a_34uZg',
            label: 'YouTube'
          }, {
            icon: <FaInstagram />,
            href: 'http://instagram.com/politeknikcaltexriau/',
            label: 'Instagram'
          }].map(({ icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white text-green-600 flex items-center justify-center hover:bg-green-100 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
