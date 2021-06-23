import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import * as HiIcons from "react-icons/hi";
// import * as BiIcons from "react-icons/bi";
// import * as BsIcons from "react-icons/bs";

export const SideNavData = [
    {
        title: 'Home',
        path: '/home',
        icon: <i className="ni ni-settings text-pink"></i>,
    },
    {
        title: 'Stock and Sales',
        path: '/stockandsales',
        icon: <i className="ni ni-chart-bar-32 text-green"></i>,
    },
    {
        title: 'File Details',
        path: '/filedetails',
        icon: <i className="ni ni-palette text-blue"></i>,
    },
    {
        title: 'Batch Details',
        path: '/batchdetails',
        icon: <i className="ni ni-circle-08 text-pink"></i>,
    },
    {
        title: 'Invoice Details',
        path: '/invoice',
        icon: <i className="ni ni-briefcase-24 text-dark"></i>,
    },
    {
        title: 'File Details',
        path: '/filedetails',
        icon: <i className="ni ni-badge text-blue"></i>,
    },
]

export const SideNavLowerData = [
    {
        title: 'Change Password',
        path: '/changepassword',
        icon: <FaIcons.FaUserLock />,
    },
    {
        title: 'Notification Information',
        path: '/notificationinfo',
        icon: <IoIcons.IoMdNotifications />,
    },
    {
        title: 'Preferences',
        path: '/preferences',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Help & Support',
        path: '/helpnsupport',
        icon: <FaIcons.FaWrench />,
    },
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <RiIcons.RiFeedbackFill />,
    }
]