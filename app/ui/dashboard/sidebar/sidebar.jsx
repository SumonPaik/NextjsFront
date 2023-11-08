import Image from "next/image";
import styles from "./sidebar.module.css";
import MenuLink from './menuLink/menuLink';

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter
} from "react-icons/md";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            }
        ]
    },
    {
        title: "Analystics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Peoples",
                path: "/dashboard/peoples",
                icon: <MdPeople />
            },
        ]
    },
    {
        title: "Users",
        list: [
            {
                title: "Setting",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            }
        ]
    }
]

const Sidebar = () => {

    return (
        <div className={styles.container}>     
            <div><Image src="/noavatar.png" alt="Avatar.png" width="50" height="50" className="userAvatar"/></div>
            <ul>
                {menuItems.map((menu) => (
                    <li key={menu.title}>
                        <span className={styles.cat}> {menu.title}</span>
                        {menu.list.map((item)=>(
                            <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Sidebar;