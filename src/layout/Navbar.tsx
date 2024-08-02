import React, { useEffect, useState } from "react";
import Logo from "../assets/fiver2logo.png";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Search } from "akar-icons";

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [showSecondaryNavbar, setShowSecondaryNavbar] = useState<boolean>(false);

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button 
                className="absolute -left-2 z-10 top-1/2 transform -translate-y-1/2 opacity-20 "
                onClick={onClick}
            >
                <ChevronLeft size={20} />
            </button>
        );
    };
    
    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button 
                className="absolute -right-2 z-10 top-1/2 transform -translate-y-1/2 opacity-20 "
                onClick={onClick}
            >
                <ChevronRight size={20} />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowSecondaryNavbar(scrollPosition > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const items = [
        { nav: "Browse Categories", link: "/",},
        { nav: "Fiver Pro", link: "/" },
        { nav: "Explore", link: "/services" },
        { nav: "English", link: "/pricing" },
        { nav: "Become a Seller", link: "/contact" },
        { nav: "Sign In", link: "/contact" },
        { nav: "Join", link: "/contact" },
    ];

    const mobileItems2 = [
        { nav: "Home", link: "/contact" },
        { nav: "English", link: "/contact" },
        { nav: "$ USD", link: "/contact" },
    ];

    const dropCard = [
        { heading: "I'm looking to hire", para: "My team need vetted freelance talent and a premium business solution", Image: Logo, link: "/services" },
        { heading: "I want to offer Pro Services", para: "I'd like to work on business projects as Pro freelancer or agency", Image: Logo, link: "/services" },
    ];

    const dropdownItems = [
        { nav: "Discover", para: "Inspiring projects made on fiverr", link: "/" },
        { nav: "Community", para: "Connect with the Diverr's team and community", link: "/" },
        { nav: "Guides", para: "In-depth guides covering business topics", link: "/" },
        { nav: "Podcast", para: "Inside tips from top business minds", link: "/" },
        { nav: "Learn", para: "Professional online courses, led by experts", link: "/" },
        { nav: "Blog", para: "News, information and community stories", link: "/" },
        { nav: "Logo Maker", para: "Create your logo instantly", link: "/" },
    ];
    
    const Browse = [
        {nav: "Programming & Tech", link: "/#"},
        {nav: "Graphic & Design", link: "/#"},
        {nav: "Digital Marketing", link: "/#"},
        {nav: "Writing & Translation", link: "/#"},
        {nav: "Video & Animation", link: "/#"},
        {nav: "AI Services", link: "/#"},
        {nav: "Music & Audio", link: "/#"},
        {nav: "Business", link: "/#"},
        {nav: "Consulting", link: "/#"},
        {nav: "Personal Growth", link: "/#"},
    ]

    return (
        <>
        <nav className="bg-white border border-b-[1px] shadow-sm font-roboto sticky top-0 z-50">
            <div className="mx-auto lg:mx-14 px-4 sm:px-6 xl:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img src={Logo} className="h-7" alt="Logo" />
                        </a>
                    </div>
                    <div className="xl:flex hidden max-w-[350px] w-[350px]">
                        <form className="w-full mx-auto px-auto" >
                            <div className="relative w-full">
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full py-[6.8px] px-4 text-[16px] pr-16 font-[400] text-gray-900 border rounded-[4px] bg-white"
                                placeholder="What service are you looking for..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-0 top-[0.5px] bg-bghero font-medium rounded-l-none rounded-[4px] text-[16px] px-3 py-1"
                            >
                                <Search color="white" className="w-4 h-[31px]" />
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex md:hidden">
                        <p className="text-[16px] leading-[24px] font-[500] text-logo hover:text-navlist transition-all duration-300">Join</p>
                    </div>
                    {/* Mobile menu button */}
                    {/* Navbar items */}
                    <div className="hidden md:flex md:items-center md:space-x-8 relative gap-x-2">
                        {items.map((item) => {
                            if (item.nav === "Fiver Pro" || item.nav === "Explore") {
                                return (
                                    <div key={item.nav} className="relative">
                                        <button
                                            className="flex items-center text-[16px] leading-[24px] font-[500] text-logo text-opacity-70 hover:text-navlist transition-all duration-300"
                                            onClick={() => setIsDropdownOpen(isDropdownOpen === item.nav ? null : item.nav)}
                                        >
                                            {item.nav}
                                            <svg
                                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${isDropdownOpen === item.nav ? 'rotate-180' : 'rotate-0'}`}
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        {isDropdownOpen === item.nav && item.nav === "Fiver Pro" && (
                                            <div className="absolute -left-6 w-[450px] mt-4 pt-4 bg-white shadow-md rounded-[4px] px-4">
                                                {dropCard.map((item) => (
                                                    <Link to="/fiver-pro-details" key={item.heading}>
                                                        <div className="flex items-start space-x-4 p-3 mb-4 border-2 border-solid border-gray-200 rounded-[8px] hover:bg-gray-100">
                                                            <div className="flex-shrink-0 w-20">
                                                                <img src={item.Image} alt="Icon" className="w-full h-auto my-5" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-[16px] text-logo text-opacity-80 font-[700]">{item.heading}</p>
                                                                <p className="text-[14px] text-logo text-opacity-60 font-[500]">
                                                                    {item.para}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                        {isDropdownOpen === item.nav && item.nav === "Explore" && (
                                            <div className="absolute -left-6 w-[350px] mt-4 pt-2 pb-2 bg-white shadow-md rounded-[4px]">
                                                {dropdownItems.map((dropdownItem) => (
                                                    <div key={dropdownItem.nav} className="text-logo py-2 hover:bg-gray-100 px-4">
                                                        <Link to={dropdownItem.link}>
                                                            <div className="flex-1">
                                                                <p className="text-[16px] text-logo text-opacity-80 font-[700]">{dropdownItem.nav}</p>
                                                                <p className="text-[14px] text-logo text-opacity-60 font-[500] tracking-normal">
                                                                    {dropdownItem.para}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            } else {
                                return (
                                    <Link
                                        key={item.nav}
                                        to={item.link}
                                        className={`text-[16px] leading-[24px] font-[500] text-logo text-opacity-70 hover:text-navlist transition-all duration-300 ${item.nav === "Browse Categories" ? "flex sm:hidden" : ""}`}
                                    >
                                        {item.nav}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
                {/* Mobile Menu */}

                {/* <div className={`mb-4  md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}> */}
                <div className={`md:hidden fixed inset-y-0 left-0 w-4/6 sm:w-5/6 bg-white shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>
                    <div className="mx-4 my-7">
                        <div className="px-2 pb-4 mt-2">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="px-2 pb-4 mt-2">
                            <Link to="/join">
                                <button className="bg-black py-2 px-6 rounded-[4px]">
                                    <span className="text-[16px] leading-[24px] font-[600] text-white">Join Fiverr</span>
                                </button>
                            </Link>
                        </div>
                        <div className="px-2 pb-4 mt-2">
                            <Link to={"/login"}>
                                    <p className="text-[16px] leading-[24px] font-[400] text-logo text-opacity-90 tracking-wide">Sign In</p>
                            </Link>
                        </div>
                        {items.map((item) => {
                            if (item.nav === "Fiver Pro" || item.nav === "Explore" || item.nav === "Browse Categories") {
                                return (
                                    <div key={item.nav} className="pb-4 mt-2">
                                        <button
                                            className="px-2 w-full text-left text-[16px] leading-[24px] font-[400] text-logo text-opacity-90 tracking-wide flex items-center justify-between"
                                            onClick={() => setIsMobileDropdownOpen(isMobileDropdownOpen === item.nav ? null : item.nav)}
                                        >
                                            {item.nav}
                                            <svg
                                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${isMobileDropdownOpen === item.nav ? 'rotate-180' : 'rotate-0'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isMobileDropdownOpen === item.nav && (
                                            <div className="pl-2 py-4">
                                                {item.nav === "Explore" ? (
                                                    dropdownItems.map((dropdownItem) => (
                                                    <Link to={dropdownItem.link} key={dropdownItem.nav} className="block px-2 py-2">
                                                        <div className="flex items-center justify-between">
                                                        <p className="text-[16px] leading-[24px] font-[400] text-logo text-opacity-90">{dropdownItem.nav}</p>
                                                        <svg
                                                            className="ml-2 h-4 w-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        </div>
                                                    </Link>
                                                    ))
                                                ) : item.nav === "Fiver Pro" ? (
                                                    dropCard.map((dropCardItem, index) => (
                                                    <Link to={dropCardItem.link} key={index} className="block px-2 py-2">
                                                        <div className="flex items-center justify-between">
                                                        <p className="text-[16px] leading-[24px] font-[400] text-logo text-opacity-90">{dropCardItem.heading}</p>
                                                        <svg
                                                            className="ml-2 h-4 w-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        </div>
                                                    </Link>
                                                    ))
                                                ) : (
                                                    Browse.map((Browser, index) => (
                                                    <Link to={Browser.link} key={index} className="block px-2 py-2">
                                                        <div className="flex items-center justify-between">
                                                        <p className="text-[16px] leading-[24px] font-[400] text-logo text-opacity-90">{Browser.nav}</p>
                                                        <svg
                                                            className="ml-2 h-4 w-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        </div>
                                                    </Link>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return null;
                        })}
                        <div className="px-2 pb-4 mt-8">
                            <h1 className="text-[16px] leading-[24px] font-[600] text-logo tracking-wide">General</h1>
                        </div>
                        {mobileItems2.map((item, index) => (
                            <Link to={item.link} key={index} className="relative">
                                <div className="px-2 py-2 ">
                                    <p className="text-[16px] leading-[24px] font-[400] text-logo text-opacity-90 tracking-wide">{item.nav}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
        {showSecondaryNavbar && (
                <nav className=" hidden sm:block bg-white border border-b-[1px] shadow-sm font-roboto sticky top-20 z-40">
                    <div className="mx-auto lg:mx-14 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
                        <div className="flex flex-col justify-center items-center h-10">
                            {/* Secondary Navbar Content */}
                            <Slider {...settings} className="w-full">
                                {Browse.map((item) => (
                                    <div key={item.nav} className="flex items-center justify-center">
                                        <Link
                                            to={item.link}
                                            className="text-[16px] leading-[24px] font-[400] text-secNav hover:text-navlist transition-all duration-300 block text-center"
                                        >
                                            {item.nav}
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
            </nav>
            )}
        </>
    );
};

export default Navbar;
