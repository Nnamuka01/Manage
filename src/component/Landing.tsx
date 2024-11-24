import Logo from "../assets/logo.svg"; 
import IllustrationImg from "../assets/illustration-intro.svg";
import TestimonialImg1 from "../assets/avatar-anisha.png";
import TestimonialImg2 from "../assets/avatar-ali.png";
import TestimonialImg3 from "../assets/avatar-richard.png";
import FooterLogo from "../assets/logo-white.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import { useState } from "react";

const Landing = () => {
    // Toggle mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
    

    return (
      <div>
        <header>
          <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="pt-2">
                <img src={Logo} alt="The Logo" />
              </div>
              {/* nav links */}
              <div className="hidden space-x-6 md:flex">
                <a href="#" className="hover:text-darkGrayishBlue">
                  Pricing
                </a>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Product
                </a>
                <a href="#" className="hover:text-darkGrayishBlue">
                  About Us
                </a>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Careers
                </a>
                <a href="#" className="hover:text-darkGrayishBlue">
                  Community
                </a>
              </div>
              {/* button */}
              <a
                href="#"
                className="hidden rounded-full baseline text-white bg-brightRed p-3 px-6 pt-2  md:block hover:bg-brightRedLight"
              >
                Get Started
              </a>
            {/* Hamburger Icon */}
            <button
                id="menu-btn"
                className={`block hamburger md:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
          </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${menuOpen ? 'flex' : 'hidden'} absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md `}>
                <a href="#pricing"onClick={() => scrollToSection ('pricing')}>Pricing</a>
                <a href="#product"onClick={() => scrollToSection ('product')}>Product</a>
                <a href="#about-us"onClick={() => scrollToSection ('about-us')}>About Us</a>
                <a href="#careers"onClick={() => scrollToSection ('careers')}>Careers</a>
                <a href="#community"onClick={() => scrollToSection ('community')}>Community</a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {/* Hero section */}
          <section id="hero">
            <section className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
              {/* left item */}
              <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                  Bring everyone together to build better products.
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                  Manage makes it simple for software teams to plan day-to-day
                  tasks while keeping the larger team goals in view.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href="#"
                    className="rounded-full baseline text-white bg-brightRed p-3 px-6 pt-2 hover:bg-brightRedLight"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              {/* image */}
              <div className="md:w-1/2">
                <img src={IllustrationImg} alt="Illustration Chart" />
              </div>
            </section>
          </section>
          {/* Features section */}
          <section id="features">
            {/* flex container */}
            <section className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
              {/* What's different */}
              <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                  What's different about Manage?
                </h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              {/* Numbered list */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                {/* List item 1 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                        01
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Track company-wide progress
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Track company-wide progress
                    </h3>
                    <p className="text-darkGrayishBlue">
                      See how your day-to-day tasks fit into the wider vision.
                      Go from tracking progress at the milestone level all the
                      way done to the smallest of details. Never lose sight of
                      the bigger picture again.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                        02
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Advanced built-in reports
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Advanced built-in reports
                    </h3>
                    <p className="text-darkGrayishBlue">
                      Set internal delivery estimate and track progress toward
                      company goals. Our customisable dashboard helps you build
                      out the reports you need to keep key stakeholders
                      informed.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  {/* Heading */}
                  <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                        03
                      </div>
                      <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Everything you need in one place
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="hidden mb-4 text-lg font-bold md:block">
                      Everything you need in one place
                    </h3>
                    <p className="text-darkGrayishBlue">
                      Stop jumping from one service to another to communicate,
                      store files, track tasks and share documents. Manage
                      offers an all-in-one team productivity solution.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/* Testimonials */}
          <section id="testimonials">
            {/* Container to heading and testm blocks */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
              {/* Heading */}
              <h2 className="text-4xl font-bold text-center">
                What's Different About Manage?
              </h2>
              {/* Testimonials Container*/}
              <div className="flex flex-col mt-24 md:flex-row md:space-x-12">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center p-6 space-y-6 rounded-full bg-veryLightGray md:w-1/3">
                  <img
                    src={TestimonialImg1}
                    className="w-16 -mt-14"
                    alt="First Testimonial Image"
                  />
                  <h5 className="text-lg font-bold">Anisha Li</h5>
                  <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharged our team's workflow. The ability to
                    maintain visibility on larger milestone at all times keeps
                    everyone motivated"
                  </p>
                </div>
                {/* Testimonial 2 */}
                <div className="hidden flex-col items-center p-6 space-y-6 rounded-full bg-veryLightGray md:flex md:w-1/3">
                  <img
                    src={TestimonialImg2}
                    className="w-16 -mt-14"
                    alt="Second Testimonial Image"
                  />
                  <h5 className="text-lg font-bold">Ali Bravo</h5>
                  <p className="text-sm text-darkGrayishBlue">
                    "We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused"
                  </p>
                </div>
                {/* Testimonial 3 */}
                <div className="hidden flex-col items-center p-6 space-y-6 rounded-full bg-veryLightGray md:flex md:w-1/3">
                  <img
                    src={TestimonialImg3}
                    className="w-16 -mt-14"
                    alt="Third Testimonial Image"
                  />
                  <h5 className="text-lg font-bold">Richard Watts</h5>
                  <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharged our team's workflow. The ability to
                    maintain visibility on larger milestone at all times keeps
                    everyone motivated"
                  </p>
                </div>
              </div>
              {/* Button */}
              <div className="my-16">
                <a
                  href="#"
                  className="rounded-full baseline text-white bg-brightRed p-3 px-6 pt-2 hover:bg-brightRedLight"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section id="cta" className="bg-brightRed">
            {/* Flex Container */}
            <div className="container flex flex-col items-center justify-between px-6 py-24 space-y-12 mx-auto md:py-12 md:flex-row md:space-y-0">
              {/* Heading */}
              <h2 className="text-5xl text-center text-white font-bold leading-tight md:text-4xl md:text-left md:max-w-xl">
                Simplify how your team works today.
              </h2>
              {/* Button */}
              <div>
                <a
                  href="#"
                  className="rounded-full shadow-2xl baseline text-brightRed bg-white p-3 px-6 pt-2 hover:bg-gray-900"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <section className="bg-veryDarkBlue">
          {/* Flex Container  */}
          <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
            {/* Logo and social links */}
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
              <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2024 All Rights Reserved
              </div>
              {/* Logo */}
              <div>
                <img src={FooterLogo} className="h-8" alt="The Logo" />
              </div>
              {/* Social Links */}
              <div className="flex justify-center space-x-8">
                {/* Link 1 */}
                <a href="#">
                  <img src={FacebookIcon} alt="Facebook Icon" className="h-8" />
                </a>
                {/* Link 2 */}
                <a href="#">
                  <img src={YoutubeIcon} alt="Youtube Icon" className="h-8" />
                </a>
                {/* Link 3 */}
                <a href="#">
                  <img src={TwitterIcon} alt="Twitter Icon" className="h-8" />
                </a>
                {/* Link 4 */}
                <a href="#">
                  <img
                    src={PinterestIcon}
                    alt="Pinterest Icon"
                    className="h-8"
                  />
                </a>
                {/* Link 5 */}
                <a href="#">
                  <img
                    src={InstagramIcon}
                    alt="Instagram Icon"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
            {/* List Container */}
            <div className="flex justify-around space-x-32">
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">
                  Home
                </a>
                <a href="#" className="hover:text-brightRed">
                  Pricing
                </a>
                <a href="#" className="hover:text-brightRed">
                  Products
                </a>
                <a href="#" className="hover:text-brightRed">
                  About
                </a>
              </div>
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">
                  Careers
                </a>
                <a href="#" className="hover:text-brightRed">
                  Community
                </a>
                <a href="#" className="hover:text-brightRed">
                  Privacy Policy
                </a>
              </div>
            </div>
            {/* Input Container */}
            <div className="flex flex-col justify-between">
              <form>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    className="flex-1 px-4 rounded-full focus:outline-none"
                    placeholder="Updated in your inbox"
                  />
                  <button className="px-6 py-2 rounded-full text-white bg-brightRed hover:bg-brightRedLight focus:outline-none">
                    Go
                  </button>
                </div>
              </form>
              <div className="hidden text-white md:block">
                Copyright &copy; 2024 All Rights Reserved
              </div>
            </div>
          </div>
        </section>
      </div>
    );
} 

export default Landing;