import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-[#ff4bed] to-[#011fff] py-4 text-white font-robert-regular">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row">
        <p
          className="text-center text-sm font-light md:text-right pt-4"
        >
          Privacy Policy
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-8">
        <p className="text-center text-sm font-light md:text-left">
          ©Ashwin 2025. All rights reserved
        </p>
        <p
          className="text-sm font-light text-white"
        >
          Made with ❤️ by Ashwin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
