// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// import * as HiIcons from "react-icons/hi";
// import * as BiIcons from "react-icons/bi";
// import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

export const ManualMapping = [
    {
        title: 'Item Mapping',
        itemId: '/itemmapping',
        elemBefore: () => <i className="ni ni-check-bold text-red"></i>,
    },
    {
        title: 'Stock and Sales',
        itemId: '/stockandsales',
        elemBefore: () => <i className="ni ni-chart-bar-32 text-green"></i>,
    },
    // {
    //     title: 'Item Mapping Unfreeze',
    //     itemId: '/itemmappingunfreeze',
    //     elemBefore: () => <i className="ni ni-palette text-blue"></i>,
    // },
    {
        title: 'Division Wise Mapping',
        itemId: '/divisionwisemapping',
        elemBefore: () => <i className="ni ni-circle-08 text-yellow"></i>,
    },
    {
        title: 'Manufacturer Mapping Revoke',
        itemId: '/manufacturermappingrevoke',
        elemBefore: () => <i className="ni ni-briefcase-24 text-dark"></i>,
    },
    // {
    //   title: 'New Product Mapping',
    //   itemId: '/newproductmapping',
    //   elemBefore: () => <i className="ni ni-badge text-green"></i>,
    // },
    // {
    //   title: 'Merging and Force Shifted',
    //   itemId: '/mergingandforceshifted',
    //   elemBefore: () => <i className="ni ni-badge text-red"></i>,
    // },
    {
        title: 'Mapping Correction',
        itemId: '/mappingcorrection',
        elemBefore: () => <i className="ni ni-badge text-blue"></i>,
    },
]

export const ProductMapping = []

export const MappingQC = [
    {
        title: 'Mapping QC',
        itemId: '/mappingqc',
        elemBefore: () => <span className="text-red"><GiIcons.GiCheckMark /></span>,
    },
    {
        title: 'Mapping QC Report',
        itemId: '/mappingqcreport',
        elemBefore: () => <span className="text-yellow"><GiIcons.GiCheckMark /></span>,
    },
    {
        title: 'Wrong Mapping QC',
        itemId: '/wrongmapingqc',
        elemBefore: () => <span className="text-green"><GiIcons.GiCheckMark /></span>,
    },
    {
        title: 'List of Mapped Items',
        itemId: '/listofmappeditems',
        elemBefore: () => <span className="text-primary"><GiIcons.GiCheckMark /></span>,
    },
]

export const EmailanPorting = []

export const MSCDAPorting = []

