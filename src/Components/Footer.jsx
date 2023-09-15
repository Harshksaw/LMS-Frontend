import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const currentDate = new Date();
const year = currentDate.getFullYear();

export default function Footer() {
  return (
    <>
      <Footer
        className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-content text-white bg-gray-800
    py-5 sm:px-20 ">
        <section className="text-lg ">
          Copyright {year} || All Right Reserved
        </section>
        <section className="flex item-center justify-center gap-5 text-2x text-white">
          <a className= 'hover:text-yellow-500 transition-all ease-in-out duration-300'> <BsFacebook/>  </a>
          <a className= 'hover:text-yellow-500 transition-all ease-in-out duration-300'> <BsInstagram/></a>
          <a className= 'hover:text-yellow-500 transition-all ease-in-out duration-300'> <BsLinkedin/> </a>
          <a className= 'hover:text-yellow-500 transition-all ease-in-out duration-300'> <BsTwitter/> </a>

        </section>
          

      </Footer>
    </>
  );
}
