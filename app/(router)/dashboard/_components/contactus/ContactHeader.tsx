import Image from "next/image";
import contact from "../../../../../public/assets/contact2.jpg";

const ContactHeader = () => {
  return (
    <header className="relative bg-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={contact}
          alt="Contact our team"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:pl-90 lg:py-40 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          <span className="block">Let&apos;s Connect</span>
          <span className="text-blue-600">Build the Future Together</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          Ready to bring your vision to life? Let’s discuss your ideas and create something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
            Contact Us
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition duration-300">
            Schedule a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
