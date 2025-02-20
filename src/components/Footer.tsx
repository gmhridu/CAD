import Contact from "@/pages/Contact";
import {logoWithOutBGImg} from "@/utils";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Logo & Description */}
                        <div>
                            <img
                                src={logoWithOutBGImg}
                                alt="Footer Logo"
                                className="size-24"
                            />
                            <p className="mt-4 text-gray-400">
                                Consectetur adipisicing elit sed do ei usmod tempor incididunt.
                                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip.
                            </p>
                        </div>
                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-red-500">📧</span>
                                <p>write2xyz@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-red-500">📍</span>
                                <p>South Carolina, New York</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-6 items-center">
                        <div>
                          {/*<h2 className="text-lg font-semibold mb-4">Our Projects</h2>*/}
                          {/*<ul className="space-y-2 text-gray-400">*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Free Education*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Clean Water*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Free Treatment*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Free Food*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Free Cloth*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*  <li>*/}
                          {/*    <a href="#" className="hover:text-red-500">*/}
                          {/*      Free Accommodation*/}
                          {/*    </a>*/}
                          {/*  </li>*/}
                          {/*</ul>*/}
                        </div>
                        {/* Quick Links */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-red-500">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-red-500">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Contact
                    className="w-full max-w-7xl mx-2 bg-gray-900 text-white border-0"
                    textColor="text-white"
                    inputBgColor="#101828"
                    inputTextColor="white"
                    buttonBgColor="#da1926"
                    buttonTextColor="white"
                    buttonHoverColor="#CB474A"
                    placeholderTextColor="custom-placeholder"
                />
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-red-500">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-500">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-500">
                        <i className="fa fa-vimeo"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-red-500">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <p className="text-gray-400 mt-4">
                    &copy; {year} PSB. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
