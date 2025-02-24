import React, { useState } from "react";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // const services = [
  //   "Web & App Development",
  //   "Social Media Marketing",
  //   "Email Marketing",
  //   "Creative & Content",
  //   "Digital Advertising & PPC",
  //   "Search Engine Marketing",
  // ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) => {
      const isSelected = prev.includes(service);
      const updatedServices = isSelected
        ? prev.filter((item) => item !== service)
        : [...prev, service];
      console.log("Selected Services:", updatedServices);
      return updatedServices;
    });
  };

  return (
    <section className="mx-auto px-6 py-12 lg:py-40 flex flex-col lg:flex-row gap-10 bg-black text-white">
      <div className="w-full lg:w-1/2 space-y-6 text-white">
        <h2 className="text-4xl font-bold mb-4">Contact US</h2>
        <p className="text-gray-400 leading-relaxed">
          Do you have any questions about the service or scaling on our
          platform? {"We're"} here to help. Chat to our friendly 24/7 and get
          onboard in less than 5 minutes.
        </p>

        <div className="space-y-4 text-gray-300">
          <div className="flex items-center gap-4">
            <span className="text-lg">+62 896-3823-3061</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg">pixelverse.box@gmail.com</span>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-lg leading-relaxed">
              Villa Bogor Indah 5, Cluster Pelikan Blok CE 11 No 16, Kota Bogor,
              Jawa Barat 16161
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8 w-full lg:w-1/2 text-gray-900">
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-gray-600 mb-6">You can reach us anytime</p>
        <form className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="+62  Phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Leave us a message..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
          ></textarea>

          {/* <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-gray-600">
              {services.map((service, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="w-5 h-5 accent-pink-500 cursor-pointer"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div> */}

          <button className="mt-4 w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-pink-600 transition">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
