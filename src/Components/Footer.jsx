// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
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
      </Footer>
    </>
  );
}
