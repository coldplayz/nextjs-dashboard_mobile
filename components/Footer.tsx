// import logo from "@/public/webtodos_logo2.png";
import Logo from "@/components/LogoImage";
// import Image from "next/image";

/**
 * Renders the footer
 */
const Footer = () => {
  return (
    <footer className="border-t flex justify-center items-center bg-white gap-x-1">
      {/* <div className="t flex justify-center items-baseline"> */}
        <small>Copyright &copy;2024</small>
        <div className="flex items-center w-16 -mt-1">
          <Logo />
        </div>
        {/*
        <Image
          src={logo}
          alt="site logo"
          width={100}
        />
        */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
