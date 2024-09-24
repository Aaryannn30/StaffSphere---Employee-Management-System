import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { TbCalendarMonth } from "react-icons/tb";

const Pricing = () => {

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isMonthly, setIsMonthly] = useState(true);

    const pricingData = [
        {
            title: "Basic",
            monthlyPrice: "19.99",
            annuallyPrice: "199.99",
            features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
        },
        {
            title: "Professional",
            monthlyPrice: "24.99",
            annuallyPrice: "249.99",
            features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
        },
        {
            title: "Master",
            monthlyPrice: "39.99",
            annuallyPrice: "399.99",
            features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
        },
    ];

    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <header className="flex flex-col items-center justify-center pt-20">
                <h1 className="text-2xl font-bold text-gray-700">Our Pricing</h1>
                <SliderToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
            </header>
            <main className="flex justify-center my-10">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl w-full">
                    {pricingData.map((plan, index) => (
                        <PricingCard key={index} plan={plan} isMonthly={isMonthly} />
                    ))}
                </section>
            </main>
        </div>
    );
};

const SliderToggle = ({ isMonthly, setIsMonthly }) => {
    const TOGGLE_CLASSES =
        "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

    return (
        <div className="relative flex w-fit items-center rounded-full mt-4">
            <button
                className={`${TOGGLE_CLASSES} ${isMonthly ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setIsMonthly(true);
                }}
            >
                <FiCalendar className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Monthly</span>
            </button>
            <button
                className={`${TOGGLE_CLASSES} ${!isMonthly ? "text-white" : "text-slate-800"
                    }`}
                onClick={() => {
                    setIsMonthly(false);
                }}
            >
                <TbCalendarMonth className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Annually</span>
            </button>
            <div
                className={`absolute inset-0 z-0 flex ${!isMonthly ? "justify-end" : "justify-start"
                    }`}
            >
                <motion.span
                    layout
                    transition={{ type: "spring", damping: 15, stiffness: 250 }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
            </div>
        </div>
    );
};

const PricingCard = ({ plan, isMonthly }) => {
    const { title, monthlyPrice, annuallyPrice, features } = plan;
    const price = isMonthly ? monthlyPrice : annuallyPrice;

    return (
        <article
            className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ${title === "Professional"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : title === "Master"
                    ? "bg-gradient-to-r from-purple-600 to-purple-900 text-white" : "bg-gradient-to-r from-blue-200 to-blue-500 text-white"
                }`}
        >
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-4xl font-bold mb-6">
                <span className="text-2xl">$</span>
                {price}
            </p>
            <ul className="w-full mb-6">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="py-2 border-t border-b border-gray-200 text-gray-700"
                    >
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className={`py-2 px-4 rounded font-bold uppercase transition ${title === "Professional"
                        ? "bg-white text-blue-600 hover:bg-transparent hover:text-white border border-white"
                        : title === "Master" ?"bg-white text-purple-600 hover:bg-transparent hover:text-white border border-white": 
                        "bg-white text-blue-400 hover:bg-transparent hover:text-white border border-white" 
                    }`}
            >
                Learn More
            </button>
        </article>
    );
};

export default Pricing;
