import React from "react";
import Logo from "../Logo";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-screen w-full lg:w-[35%] xxl:w-[40%] shadow-2xl bg-white/95 backdrop-blur-lg p-10 lg:rounded-tl-3xl lg:rounded-bl-3xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-scroll
      ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}`}
        >
            <div className="text-black flex justify-between items-center w-full">
                <Logo />
                <div
                    className="close-btn group bg-black rounded-sm text-white p-2 cursor-pointer"
                    onClick={() => setIsOpenSidebar(false)}
                >
                    <Icon
                        icon="material-symbols:close"
                        width="30"
                        height="30"
                        className="group-hover:rotate-90 transition duration-500"
                    />
                </div>
            </div>
            <p className="text-black/60 py-8 text-center text-sm leading-relaxed">
                we are committed to delivering innovative solutions that drive growth
                and add value to our clients. With a team of experienced professionals
                and a passion for excellence.
            </p>
            <h3 className="font-chakrapetch pb-3 text-center w-full text-black">Search Now!</h3>
            <div className="flex justify-center w-full">
                <form className="search-box relative flex w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-black/5 ps-3 h-[45px] w-full text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 h-full border-l border-border cursor-pointer px-3"
                    >
                        <Icon icon="ei:search" width="24" height="24" />
                    </button>
                </form>
            </div>
            <h3 className="font-chakrapetch pb-3 pt-8 text-center w-full text-black">Contact Info</h3>
            <div className="space-y-6 text-center">
                <div>
                    <span className="text-black/40 font-chakrapetch">Phone</span> <br />
                    <Link
                        href="/contact"
                        className="text-black font-unbounded font-normal"
                    >
                        (+91) 1232 3456
                    </Link>
                </div>

                <div>
                    <span className="text-black/40 font-chakrapetch">Email</span> <br />
                    <Link
                        href="/contact"
                        className="text-black font-unbounded font-normal"
                    >
                        info@axora.com
                    </Link>
                </div>

                <div>
                    <span className="text-black/40 font-chakrapetch">Location</span>{" "}
                    <br />
                    <Link
                        href="/contact"
                        className="text-black font-unbounded font-normal text-center block"
                    >
                        FF - 42, Procube Complex Vadodara
                    </Link>
                </div>
            </div>
            <h3 className="font-chakrapetch pb-3 pt-8 text-center w-full text-black">Follow Us</h3>
            <div className="social-icons flex gap-3 justify-center">
                <Link href="https://www.facebook.com/">
                    <Icon
                        icon="gg:facebook"
                        width="30"
                        height="30"
                        className="text-white p-1 rounded-sm cursor-pointer bg-blue-600 transition duration-500 hover:-translate-y-1"
                    />
                </Link>

                <Link href="https://www.instagram.com/">
                    <Icon
                        icon="mdi:instagram"
                        width="30"
                        height="30"
                        className="text-white p-1 rounded-sm cursor-pointer bg-pink-500 hover:text-white transition duration-500 hover:-translate-y-1"
                    />
                </Link>

                <Link href="https://www.youtube.com/">
                    <Icon
                        icon="mdi:youtube"
                        width="30"
                        height="30"
                        className="text-white p-1 rounded-sm cursor-pointer bg-red-500 transition duration-500 hover:-translate-y-1"
                    />
                </Link>

                <Link href="https://www.linkedin.com/">
                    <Icon
                        icon="basil:linkedin-solid"
                        width="30"
                        height="30"
                        className="text-white p-1 rounded-sm cursor-pointer bg-blue-400 transition duration-500 hover:-translate-y-1"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;