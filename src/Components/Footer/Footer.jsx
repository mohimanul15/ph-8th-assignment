import { useContext } from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer mt-10 footer-horizontal footer-center bg-white text-text_secondary py-10 md:py-24">
            <aside className="container mx-auto">
                <p className="font-bold text-base md:text-xl lg:text-3xl">
                    Gadget Heaven
                </p>
                <p className="font-medium text-xs md:text-base opacity-40">Leading the way in cutting-edge technology and innovation.</p>
            </aside>
            <hr className="container mx-auto py-5 lg:py-8 opacity-10 w-full text-text_secondary"></hr>
            <nav className="container mx-auto flex flex-col md:flex-row justify-between gap-5">
                <nav className="flex flex-col">
                    <h6 className="text-base md:text-lg text-text_secondary mb-4 font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="text-base md:text-lg text-text_secondary mb-4 font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="text-base md:text-lg text-text_secondary mb-4 font-bold">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </nav>
        </footer>
    );
};

export default Footer;