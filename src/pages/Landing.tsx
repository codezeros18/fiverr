import React from "react";
import Slider from 'react-slick';
// import Logo from "../assets/fiver2logo.png";
import { CodepenFill, Language, AirplayVideo, PeopleGroup, MusicAlbum, FaceVeryHappy, ChatEdit, GraphqlFill, Computing, ChevronLeft, ChevronRight, DotGridFill, Thunder, Chess, DoubleSword } from 'akar-icons';
import { Link } from "react-router-dom";
import card1 from "../assets/card1z.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ReactPlayer from 'react-player/youtube';
import Video1 from "../assets/quote1.mp4";
import Video2 from "../assets/quote2.mp4";
import Video3 from "../assets/quote3.mp4";
import Video4 from "../assets/quote4.mp4";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from "../assets/photo7.jpg";
import Photo8 from "../assets/photo8.jpg";
import Photo9 from "../assets/photo9.jpg";
import Photo10 from "../assets/photo10.jpg";
import Photo11 from "../assets/photo11.jpg";
import Photo12 from "../assets/photo12.jpg";
import BgVideo from "../assets/videobg.mp4"


const Landing:React.FC = () => {
    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button 
                className="absolute -left-5 z-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 rounded-full p-2 shadow-lg"
                onClick={onClick}
            >
                <ChevronLeft />
            </button>
        );
    };
    
    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <button 
                className="absolute -right-5 z-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 rounded-full p-2 shadow-lg"
                onClick={onClick}
            >
                <ChevronRight />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6, // Adjust based on your requirement
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1, // Adjust based on your requirement
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3, // Adjust based on your requirement
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    interface Card {
        title: string;
        image: string;
        bgColor: string;
    }

    const cardData: Card[] = [
        { title: "Website Development", image: card1, bgColor: "bg-card1" },
        { title: "Logo Design", image: card1, bgColor: "bg-card2" },
        { title: "SEO", image: card1, bgColor: "bg-card3" },
        { title: "Architecture & Interior Design", image: card1, bgColor: "bg-card4" },
        { title: "Social Media Marketing", image: card1, bgColor: "bg-card5" },
        { title: "Voice Over", image: card1, bgColor: "bg-card6" },
        { title: "Software Development", image: card1, bgColor: "bg-card7" },
        { title: "Data Science & ML", image: card1, bgColor: "bg-card8" },
        { title: "Product Photography", image: card1, bgColor: "bg-card9" },
        { title: "E-Commerce Marketing", image: card1, bgColor: "bg-card10" },
        { title: "Video Editing", image: card1, bgColor: "bg-card11" },
        // Add more cards as needed
    ];

    interface NewsCard {
        icon: React.ReactNode;
        title: string;
        text: string;
    }

    const newsCard : NewsCard[] = [
        { icon: <DotGridFill size={30} />, title: "Over 700 categories", text: "Get results from skilled freelancers from all over the world, for every task, at any price point." },
        { icon: <DoubleSword size={30} />, title: "Clear, transparent pricing", text: "Pay per project or by the hour (Pro). Payments only get released when you approve." },
        { icon: <Thunder size={30} />, title: "Quality work done faster", text: "Filter to find the right freelancers quickly and get great work delivered in no time, every time." },
        { icon: <Chess size={30} />, title: "24/7 award-winning support", text: "Chat with our team to get your questions answered or resolve any issues with your orders." },
    ]

    interface QuoteCard {
        videoSrc: string;
        title: string;
        quote: string;
    }

    const quoteCard : QuoteCard[] = [
        { videoSrc: Video1, title: "Caitlin Tormey, Chief Commercial Officer | NAADAM", quote: "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day." },
        { videoSrc:Video2, title: "Tim and Dan Joo, Co-Founders | HAERFEST", quote: "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does." },
        { videoSrc:Video3, title: "Kay Kim, Co-Founder | rooted", quote: "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working." },
        { videoSrc:Video4, title: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder | Lavender", quote: "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world." },
    ]

    const smallCard = [
        {icon: <CodepenFill size={30}/> , text: "Programming & Tech", link: "/#"},
        {icon: <GraphqlFill size={30}/> , text: "Graphic & Design", link: "/#"},
        {icon: <ChatEdit size={30}/> , text: "Digital Marketing", link: "/#"},
        {icon: <Language size={30}/> , text: "Writing & Translation", link: "/#"},
        {icon: <AirplayVideo size={30}/> , text: "Video & Animation", link: "/#"},
        {icon: <Computing size={30}/> , text: "AI Services", link: "/#"},
        {icon: <MusicAlbum size={30}/> , text: "Music & Audio", link: "/#"},
        {icon: <PeopleGroup size={30}/> , text: "Business", link: "/#"},
        {icon: <FaceVeryHappy size={30}/> , text: "Consulting", link: "/#"},
    ]

    const photos = [
        {Image: Photo1 ,link : "/#" },
        {Image: Photo2 ,link : "/#" },
        {Image: Photo3 ,link : "/#" },
        {Image: Photo4 ,link : "/#" },
        {Image: Photo5 ,link : "/#" },
        {Image: Photo6 ,link : "/#" },
        {Image: Photo7 ,link : "/#" },
        {Image: Photo8 ,link : "/#" },
        {Image: Photo9 ,link : "/#" },
        {Image: Photo10 ,link : "/#" },
        {Image: Photo11 , link : "/#" },
        {Image: Photo12 , link : "/#" },
    ];

    const guideCard = [
        {image: Photo1, title: "Start a side business", link: "/#"},
        {image: Photo2, title: "Ecommerce business ideas", link: "/#"},
        {image: Photo3, title: "Start an online business and work from home", link: "/#"},
        {image: Photo4, title: "Build a website from scratch", link: "/#"},
        {image: Photo5, title: "Grow your business with AI", link: "/#"},
        {image: Photo6, title: "Create a logo for your business", link: "/#"},
    ]
    

    const brands = ['Meta', 'Google', 'Netflix', 'P&G', 'Paypal', 'Payoneer'];
    return (
        <div className="relative isolate min-h-screen font-roboto">
            <div className="mx-auto max-w-[1350px] py-10 md:py-28 my-0 md:my-14 bg-custom-bg bg-custom-gradient rounded-none xl:rounded-[14px]">
                <div className="mb-0 md:mb-8 flex flex-col justify-center text-center">
                    <div className="max-w-[390px] md:max-w-3xl mx-auto">
                        <h1 className="text-[40px] md:text-[60px] leading-[37px] md:leading-[69px] font-[400] text-white">Find the right <span className="font-merriweather text-navlist text-[43px] md:text-[63px]">freelance</span> service, right away</h1>
                    </div>                   
                    <form className="max-w-[600px] mx-auto">   
                        <div className="relative w-[250px] sm:w-[400px] md:w-[600px] mt-10">
                            <input type="search" id="default-search" className="block w-full py-4 px-4 text-[16px] pr-16 font-[400] text-gray-900 border rounded-[10px] bg-white ring-1 ring-blue-500" placeholder="What service are you looking for..." required />
                            <button type="submit" className="text-white absolute end-1.5 bottom-1 bg-bghero font-medium rounded-lg text-[16px] px-4 py-2 ml-20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>

                            </button>
                        </div>
                    </form>
                    <div className="hidden md:flex max-w-[900px] mx-auto mt-20 -mb-28">
                        <div className="grid grid-cols-7 grid-rows-1 gap-x-6 items-center">
                            <p className="text-white font-semibold text-opacity-50 text-[12px]">Trusted By:</p>
                            {brands.map((brand, index) => (
                            <p key={index} className="text-white font-semibold text-opacity-50 text-[16px]">
                                {brand}
                            </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="my-8 lg:my-0 mx-6 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-x-4 gap-y-4 lg:gap-y-0">
                    {smallCard.map((card, index) => (
                        <Link to={card.link} key={index} className="flex flex-col items-center">
                            <div className="bg-white drop-shadow-md rounded-[15px] p-4 lg:p-4 w-[100px] lg:w-full h-[100px] lg:h-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
                                <div className="flex justify-center items-center w-full h-full lg:w-auto lg:h-auto lg:mb-4">
                                    <p>{card.icon}</p>
                                </div>                            
                                <div className="hidden lg:flex text-[14px] leading-[21px] font-[600] text-gray-600 mt-2 lg:mt-4">
                                    <p>{card.text}</p>
                                </div>
                            </div>
                            <p className="lg:hidden text-center text-[14px] leading-[21px] font-[600] text-gray-600 mt-2">{card.text}</p>
                        </Link>    
                    ))}
                </div>
            </div>
            <div className="my-20 lg:my-20 mx-6 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <h2 className="text-3xl lg:text-[48px] text-logo font-[400]">Popular Services</h2>
                <Slider {...settings} className="mt-10">
                    {cardData.map((card, index) => (
                        <div key={index} className="p-2">
                            <Link to="#" className={`flex flex-col justify-between rounded-[15px] overflow-hidden drop-shadow-lg shadow-lg min-h-[260px] lg:min-h-[300px]  ${card.bgColor}`}>
                                <div className="px-4 md:px-6 pb-0 md:pb-6 pt-6">
                                    <p className="text-[18px] text-white leading-[28px] font-[700]">{card.title}</p>
                                </div>
                                <div className="bg-white m-2 h-[150px] md:h-[175px] rounded-[15px] flex items-center justify-center">
                                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="my-20 lg:my-20 mx-6 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="max-w-2xl">
                    <h2 className="text-3xl lg:text-[48px] text-logo leading-[38px] lg:leading-[56px] tracking-wide font-[400]">A whole world of freelance talent at your fingertips</h2>
                </div>
                <div className="mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-10 lg:gap-y-0 gap-x-14">
                        {newsCard.map((card, index) => (
                            <div key={index} className="">
                                <div className="flex justify-start items-center md:items-start w-full gap-2">
                                    <span>{card.icon}</span>
                                    <p className="flex md:hidden text-[18px] leading-[26px]">{card.title}</p>
                                </div>
                                <h2 className="hidden md:flex pt-6 text-[24px] leading-[32px] font-[400] text-logo tracking-wide h-[40px]">{card.title}</h2>
                                <p className="pt-6 md:pt-10 lg:pt-20 text-[16px] leading-[24px] font-[400] tracking-wide text-logo text-opacity-80">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px] flex justify-center">
                <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-[15px]">
                    <iframe
                    src={BgVideo}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="bg-bghero rounded-[15px] text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-[36px] font-[800] tracking-tighter">
                            fiverr <span className="font-[500]">Pro.</span>
                            </h1>
                            <h2 className="text-[46px] leading-[48px] lg:leading-[60px] font-[400] py-2 max-w-[500px]">
                            New e-Commerce project management service{' '}
                            <span className="font-[600]">made for your business</span>
                            </h2>
                            <p className="text-[16px] leading-[24px] font-[400]">
                            An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.
                            </p>
                            <p className="text-[16px] leading-[24px] font-[700]">To get started, you should have:</p>
                            <ul className="list-disc list-inside">
                            <li>An e-Commerce project requiring expertise in various fields</li>
                            <li>A budget exceeding $1000</li>
                            <li>A desire to get things done, without the hassle</li>
                            </ul>
                            <button className="py-2 bg-button1 px-6 text-[16px] font-[600] rounded-[4px] w-[140px]">Get Started</button>
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <img src={card1} alt="E-Commerce Management" className="w-full max-w-[400px] rounded-[15px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
            <div className="max-w-4xl">
                <h2 className="text-3xl lg:text-[48px] text-logo leading-[38px] lg:leading-[56px] tracking-wide font-[400]">
                What they're saying about Fiverr
                </h2>
            </div>
            
            <Slider {...settings2} className="relative mt-10">
            {quoteCard.map((card, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 mt-6 lg:mt-14">
                <div className="col-span-5 relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={card.videoSrc}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
                <div className="col-span-7 flex flex-col justify-center">
                <h2 className="text-[20px] leading-[28px] font-[400] text-logo text-opacity-60 py-4">
                    {card.title}
                </h2>
                <p className="text-[24px] lg:text-[30px] leading-[36px] lg:leading-[44px] font-[500] font-merriweather italic tracking-wide">
                    {card.quote}
                </p>
                </div>
            </div>
            ))}
        </Slider>
            </div>

            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="bg-bgpink rounded-[15px] text-logo">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-10">
                        <div className="lg:order-1 order-2 flex flex-col space-y-6">
                            <h1 className=" text-[32px] lg:text-[36px] font-[800] tracking-tighter">
                            fiverr <span className="font-[500]">logo maker.</span>
                            </h1>
                            <h2 className="text-[32px] lg:text-[46px] leading-[32px] lg:leading-[48px] font-[400] py-0 lg:py-4 max-w-[450px] tracking-wide">
                            Make an incredible logo{' '}
                            <span className="font-[500] font-merriweather text-[32px] lg:text-[48px] text-button1 tracking-normal">in seconds</span>
                            </h2>
                            <p className="text-[20px] leading-[24px] font-[400] text-opacity-80 text-logo pb-0 lg:pb-6 tracking-wide">
                            Pre-designed by top talent. Just add your touch.
                            </p>
                            <div className="pb-0 lg:pb-10">
                                <button className="py-2 bg-black text-white px-4 text-[16px] font-[600] rounded-[8px] w-[200px]">Try Fiverr Logo Maker</button>
                            </div>
                        </div>
                        <div className="lg:order-2 order-1 flex justify-center items-center">
                            <img src={card1} alt="E-Commerce Management" className="w-full max-w-[400px] rounded-[15px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="max-w-4xl">
                    <h2 className="text-3xl lg:text-[48px] text-logo leading-[38px] lg:leading-[56px] tracking-wide font-[400]">Made On Fiver</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 lg:mt-16">
                    {Array.from({ length: 4 }, (_, columnIndex) => (
                        <div key={columnIndex} className="grid gap-4">
                        {photos.slice(columnIndex * 3, columnIndex * 3 + 3).map((photo, index) => (
                            <Link to={photo.link}>
                                <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={photo.Image} alt={`Photo ${index + 1}`} />
                                </div>
                            </Link>
                        ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-10 lg:my-20 mx-4 md:mx-8 lg:mx-auto lg:max-w-[1350px]">
                <div className="max-w-4xl">
                    <h2 className="text-3xl lg:text-[48px] text-logo leading-[38px] lg:leading-[56px] tracking-wide font-[400]">Guides to help you grow</h2>
                </div>
                    <Slider {...settings3} className="mt-10">
                        {guideCard.map((card, index) => (    
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 px-2">
                                <Link to={card.link}>
                                        <div className="h-full w-full">
                                            <img className="w-full h-[300px] object-cover rounded-[4px]" src={card.image} alt="" />
                                            <p className="py-4 text-[18px] text-logo font-[700] leading-[25px]">{card.title}</p>
                                        </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
            </div>
            <div className="mx-4 lg:mx-auto max-w-[1325px] py-10 md:py-2 my-10 md:my-20 bg-card4 rounded-[14px]">
                <div className="mb-0 md:mb-8 flex flex-col justify-center text-center">
                    <div className="max-w-[390px] md:max-w-6xl mx-auto">
                        <h1 className="text-[40px] md:text-[60px] leading-[37px] md:leading-[69px] font-[400] tracking-wide text-white pt-0 md:pt-10 px-4">Freelance services at your <span className="font-merriweather text-card2 text-[43px] md:text-[63px]">fingertips!</span></h1>
                        <div className="pt-10">
                            <button className="bg-white text-black font-[600] text-[16px] leading-[24px] rounded-[8px] px-5 py-2 text-opacity-70 ">Join Fiverr</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Landing