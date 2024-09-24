import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi'; // Import Chevron Down icon from Heroicons

const Dropdown = ({ label, options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option); // Notify the parent component
        }
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOption ? selectedOption.label : label}
                    <HiChevronDown
                        className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''
                            }`}
                    />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
