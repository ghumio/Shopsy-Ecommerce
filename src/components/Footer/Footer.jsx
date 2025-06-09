import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              LOHITI
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              asperiores.
            </p>
            <p className="text-gray-500 mt-4 dark:text-white/70">
              Made with ❤️ by Prakash
            </p>
            <a
              href="https://www.linkedin.com/in/prakash-shrestha-2a9621206"
              target="blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit my LinkedIn Profile
            </a>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black  dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, i) => (
                  <li key={i}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black  dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Kathmandu, Nepal</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt className="" />
                  <p>+977 9812233222</p>
                </div>
                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
