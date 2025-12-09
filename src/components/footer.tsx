import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">HIMASI UT Bogor</h2>
            <p className="text-gray-400">
              Jl. KH. Sholeh Iskandar No.23, RT.01/RW.10, Kedungbadak, Kec.
              Tanah Sereal, Kota Bogor, Jawa Barat 16164
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/himasi.utbogor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@HIMASIUTBogor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@himasi.utbogor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
