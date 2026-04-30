import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const MobileHeaderLink = ({ item, setNavbarOpen }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const handleToggle = (e) => {
        if (item.submenu) {
            e.preventDefault();
            setSubmenuOpen(!submenuOpen);
        } else {
            setNavbarOpen(false);
        }
    };

    const content = (
        <div
            className="flex items-center justify-center gap-3 w-full py-4 px-2 text-white/90 cursor-pointer group transition-colors hover:text-white"
            onClick={handleToggle}
        >
            <span className="text-xl font-medium tracking-wide">{item.label}</span>

            {item.submenu && (
                <Icon
                    icon="heroicons:chevron-down-20-solid"
                    className={`transition-transform duration-300 text-white/40 ${submenuOpen ? "rotate-180" : ""
                        }`}
                    width="24"
                />
            )}
        </div>
    );

    return (
        <div className="w-full">
            {item.submenu ? (
                content
            ) : (
                <Link href={item.href || "#"} onClick={() => setNavbarOpen(false)}>
                    {content}
                </Link>
            )}

            {item.submenu && (
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${submenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 pb-4">
                        {item.submenu.map((subItem, index) => (
                            <Link
                                key={index}
                                href={subItem.href}
                                onClick={() => setNavbarOpen(false)}
                                className="block py-3 px-6 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileHeaderLink;