import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#e9c5b0] rounded-t-3xl px-8 py-6">
      {/* Social Media Section */}
      <div className="bg-[#DFB89F] bg-opacity-20 rounded-full py-3 px-6 flex items-center justify-between max-w-3xl mx-auto mb-8 shadow-md">
        <p className="text-sm font-medium">
          Get Connected with us on Social media
        </p>
        <div className="flex gap-3">
          <a
            href="#"
            className="bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
          ></a>
          <a
            href="#"
            className="bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
          ></a>
          <a
            href="#"
            className="bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
          ></a>
          <a
            href="#"
            className="bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
          ></a>
          <a
            href="#"
            className="bg-white rounded-full p-1.5 hover:bg-gray-100 transition-colors"
          ></a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-2">Keep Updated!</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get new news and offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="rounded-l-full px-4 py-2 w-full focus:outline-none text-sm bg-white"
              />
              <button className="bg-[#d4a88e] text-white px-4 py-2 rounded-r-full text-sm font-medium hover:bg-[#c99b82] transition-colors whitespace-nowrap">
                Subscribe now
              </button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 md:ml-8">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1">
                <Image
                  src="/images/mail.png"
                  width={16}
                  height={16}
                  alt="Email icon"
                />
              </div>
              <a href="mailto:info@example.com" className="text-sm">
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1">
                <Image
                  src="/images/phone.png"
                  width={16}
                  height={16}
                  alt="Phone icon"
                />
              </div>
              <a href="tel:+1234567890" className="text-sm">
                +123 456 7890
              </a>
            </div>
          </div>

          {/* Terms & Privacy Section */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Terms & Privacy</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-2">FAQs</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Payment & Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Returns & Cancellations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        All Rights Reserved for Project Suppliers
      </div>
    </footer>
  );
};

export default Footer;
