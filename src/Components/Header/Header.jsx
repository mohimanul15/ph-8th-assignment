import { NavLink } from 'react-router';
import mainLogo from '../../assets/logo.jpg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import './Header.css';
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () =>{
        setIsOpen(!isOpen);
    }

    const menuList = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/statistics'>Statistics</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </>

    return (
        <header>
            <div className='flex items-center justify-between container mx-auto'>
                <div className='flex items-center justify-center gap-1 flex-1/3'>
                    <img
                        src={mainLogo}
                        alt="Website Logo"
                        className='max-w-24 md:max-w-32' />

                    <h2
                        className='font-bold text-base max-sm:hidden md:text-xl'>
                        Gadget Heaven
                    </h2>
                </div>

                <div className='flex max-md:flex-row-reverse justify-around gap-2 flex-2/3'>

                    <div className='flex gap-5 font-bold text-base relative items-center'>
                        {
                            isOpen?
                            <IoClose className='md:hidden font-bold text-xl' onClick={handleIsOpen}></IoClose>:
                            <RxHamburgerMenu className='md:hidden font-bold text-xl' onClick={handleIsOpen}></RxHamburgerMenu>
                        }
                        <div className={`absolute text-sm flex flex-col md:hidden bg-slate-900 px-6 py-4 rounded-xl shadow-2xs text-slate-200 -left-28 duration-1000 gap-2 ${isOpen?'top-10':'-top-40'}`}>
                            {menuList}
                        </div>

                        <div className='hidden md:flex gap-5 items-center'>
                            {menuList}
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <div className='flex justify-center items-center w-8 h-8 relative outline-1 outline-gray-800 rounded-full'>
                            <FaHeart className='w-5 h-auto'></FaHeart>
                            <p className='absolute -top-2 -right-1.5 text-lg font-bold text-amber-500'>3</p>
                        </div>

                        <div className='flex justify-center items-center w-8 h-8 relative outline-1 outline-gray-800 rounded-full'>
                            <IoCartOutline className='w-5 h-auto'></IoCartOutline>
                            <p className='absolute -top-2 -right-1.5 text-lg font-bold text-amber-500'>2</p>
                        </div>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;