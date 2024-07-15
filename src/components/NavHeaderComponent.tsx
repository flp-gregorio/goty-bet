import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type NavHeaderProps = {
    onPrevious: () => void;
    onNext: () => void;
    headerText: string;
};

const NavHeaderComponent: React.FC<NavHeaderProps> = ({ onPrevious, onNext, headerText }) => {
    return (
        <div className='h-full w-full py-2 flex items-center justify-center font-bold text-2xl  bg-neutral-950'>
            <button className='uppercase mr-3' onClick={onPrevious}><FaArrowLeft/></button>
            <h1 className='font-bold min-w-[36rem]'>{headerText}</h1>
            <button className='uppercase ml-3' onClick={onNext}><FaArrowRight/></button>
        </div>
    );
};

export default NavHeaderComponent;
