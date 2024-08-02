import { ArrowRight } from 'akar-icons';
import React, { useState } from 'react';



const Footer: React.FC = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);
    const [isBusinessSolutionsOpen, setIsBusinessSolutionsOpen] = useState(false);
    
    const categories = [
        { text: "Graphic & Design", link: "/" },
        { text: "Digital & Marketing", link: "/" },
        { text: "Writing & Translation", link: "/" },
        { text: "Video & Animation", link: "/" },
        { text: "Music & Audio", link: "/" },
        { text: "Fiverr Logo Maker", link: "/" },
        { text: "Programming & Tech", link: "/" },
        { text: "Data", link: "/" },
        { text: "Business", link: "/" },
        { text: "Personal Growth & Hobbies", link: "/" },
        { text: "Photography", link: "/" },
        { text: "End-to-End Projects", link: "/" },
        { text: "Sitemap", link: "/" },
    ];
    
    const about = [
        { text: "Careers", link: "/" },
        { text: "Press & News", link: "/" },
        { text: "Partnerships", link: "/" },
        { text: "Privacy Policy", link: "/" },
        { text: "Terms of Service", link: "/" },
        { text: "Intellectual Property Claims", link: "/" },
        { text: "Investor Relations", link: "/" },
    ];
    
    const support = [
        { text: "Help & Support", link: "/" },
        { text: "Trust & Safety", link: "/" },
        { text: "Quality Guide", link: "/" },
        { text: "Selling on Fiverr", link: "/" },
        { text: "Buying on Fiverr", link: "/" },
        { text: "Fiverr Guides", link: "/" },
        { text: "Learn", link: "/" },
    ];
    
    const community = [
        { text: "Customer Success Stories", link: "/" },
        { text: "Community Hub", link: "/" },
        { text: "Forum", link: "/" },
        { text: "Events", link: "/" },
        { text: "Blog", link: "/" },
        { text: "Creators", link: "/" },
        { text: "Affiliates", link: "/" },
        { text: "Podcast", link: "/" },
        { text: "Invite a Friend", link: "/" },
        { text: "Become a Seller", link: "/" },
        { text: "Community Standards", link: "/" },
    ];
    
    const businessSolutions = [
        { text: "About Business Solutions", link: "/" },
        { text: "Fiverr Pro", link: "/" },
        { text: "Fiverr Certified", link: "/" },
        { text: "Become an Agency", link: "/" },
        { text: "Fiverr Enterprise", link: "/" },
        { text: "ClearVoice", link: "/" },
        { text: "Working Not Working", link: "/" },
        { text: "Contact Sales", link: "/" },
    ];
    
    const renderList = (items: { text: string, link: string }[]) => {
        return items.map((item, index) => (
            <li key={index} className="my-2 py-1">
                <a href={item.link} className="text-gray-600 hover:underline text-[16px] leading-[24px] font-[400]">{item.text}</a>
            </li>
        ));
    };
    return (
        <div className="bg-white border-t-[1px] shadow-sm border-gray-300">
            {/* Desktop Footer */}
            <div className="hidden lg:flex justify-center items-center my-20 mx-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-20 lg:max-w-[1325px]">
                    <div>
                        <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4">Categories</h4>
                        <ul>{renderList(categories)}</ul>
                    </div>
                    <div>
                        <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4">About</h4>
                        <ul>{renderList(about)}</ul>
                    </div>
                    <div>
                        <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4">Support</h4>
                        <ul>{renderList(support)}</ul>
                    </div>
                    <div>
                        <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4">Community</h4>
                        <ul>{renderList(community)}</ul>
                    </div>
                    <div>
                        <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4">Business Solutions</h4>
                        <ul>{renderList(businessSolutions)}</ul>
                    </div>
                </div>
            </div>

            {/* Mobile Footer */}
            <div className="lg:hidden my-8 mx-10 md:mx-8">
                <div>
                    <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4 cursor-pointer" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>Categories</h4>
                    {isCategoriesOpen && <ul>{renderList(categories)}</ul>}
                </div>
                <div>
                    <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4 cursor-pointer" onClick={() => setIsAboutOpen(!isAboutOpen)}>About</h4>
                    {isAboutOpen && <ul>{renderList(about)}</ul>}
                </div>
                <div>
                    <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4 cursor-pointer" onClick={() => setIsSupportOpen(!isSupportOpen)}>Support</h4>
                    {isSupportOpen && <ul>{renderList(support)}</ul>}
                </div>
                <div>
                    <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4 cursor-pointer" onClick={() => setIsCommunityOpen(!isCommunityOpen)}>Community</h4>
                    {isCommunityOpen && <ul>{renderList(community)}</ul>}
                </div>
                <div>
                    <h4 className="font-[700] leading-[22px] text-[16px] text-logo mb-4 cursor-pointer" onClick={() => setIsBusinessSolutionsOpen(!isBusinessSolutionsOpen)}>Business Solutions</h4>
                    {isBusinessSolutionsOpen && <ul>{renderList(businessSolutions)}</ul>}
                </div>
            </div>
        </div>
    );
};

export default Footer;
