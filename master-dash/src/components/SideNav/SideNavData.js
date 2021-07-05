import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import * as HiIcons from "react-icons/hi";
// import * as BiIcons from "react-icons/bi";
// import * as BsIcons from "react-icons/bs";

export const SideNavData = [
    {
        title: 'Not Found',
        path: '/hbasfiuk',
        icon: <i className="ni ni-button-power text-red"></i>,
    },
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
        title: 'Item Mapping',
        path: '/itemmapping',
        icon: <i className="ni ni-check-bold text-red"></i>,
    },
    // {
    //     title: 'Item Mapping Unfreeze',
    //     path: '/itemmappingunfreeze',
    //     icon: <i className="ni ni-palette text-blue"></i>,
    // },
    {
        title: 'Division Wise Mapping',
        path: '/divisionwisemapping',
        icon: <i className="ni ni-circle-08 text-yellow"></i>,
    },
    {
        title: 'Manufacturer Mapping Revoke',
        path: '/manufacturermappingrevoke',
        icon: <i className="ni ni-briefcase-24 text-dark"></i>,
    },
    {
        title: 'New Product Mapping',
        path: '/newproductmapping',
        icon: <i className="ni ni-badge text-green"></i>,
    },
    {
        title: 'Merging and Force Shifted',
        path: '/mergingandforceshifted',
        icon: <i className="ni ni-badge text-red"></i>,
    },
    {
        title: 'Mapping Correction',
        path: '/mappingcorrection',
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