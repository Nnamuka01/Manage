import Logo from "../assets/logo.svg"; 
import IllustrationImg from "../assets/illustration-intro.svg";

const Landing = () => {
    // const [activeSection, setActiveSection] = useState("home");

    // const scrollToSection = (sectionId: string) => {
    //   const section = document.getElementById(sectionId);
    //   if (section) {
    //     section.scrollIntoView({ behavior: "smooth" });
    //     setActiveSection(sectionId);
    //   }
    // };

    return (
        <div>
            <header>
                <nav className="relative container mx-auto p-6">
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <div className="pt-2">
                            <img src={ Logo } alt="The Logo" />
                        </div>
                        {/* nav links */}
                        <div className="hidden space-x-6 md:flex">
                            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
                            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
                            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
                        </div>
                        {/* button */}
                        <a href="#" className="hidden rounded-full baseline text-white bg-brightRed p-3 px-6 pt-2  md:block hover:bg-brightRedLight">
                            Get Started
                        </a>
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
                                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <a href="#" className="rounded-full baseline text-white bg-brightRed p-3 px-6 pt-2 hover:bg-brightRedLight">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        {/* image */}
                        <div className="md:w-1/2">
                            <img src={ IllustrationImg } alt="Illustration Chart" />
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
                                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
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
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
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
                                    Set internal delivery estimate and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
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
                                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
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
                                <img src={} className="w-16 -mt-14"  alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
} 

export default Landing;