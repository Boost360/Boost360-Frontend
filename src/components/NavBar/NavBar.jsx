import React, { useState } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';
import { BiWorld } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import LanguageDialog from '../Localization/LanguageDialog';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from "react-i18next";

// BEHAVIORS        
//
// menu:   bold current page or bold it's parent page IF specified
//         switch 'student login' to 'Student-home'   IF user is logged in
//         display page name                          IF if on a subpage (parent page not null)
//         use left arrow icon                        IF on on a subpage
//         use menu icon                              IF on mobile
//
// icon:   set to parent page                         IF left-arrow is clicked
//         open mobile menu                           IF menu icon is clicked
//
// color:  set menu and header to transparent background
//         && add top shadow to entire NavBar and remove 
//         border effect                              IF at 'Home' or 'Contact' page
//         set header to primary color background and 
//         light text                                 IF at 'Student-home' or its subpages
// 
// [24/sep/2021 @Sarah]



const NavBar = ({ page, user, header = null }) => {
    const { t, i18n } = useTranslation();
    const [pages, setPages] = useState(
        {
            'Home': { path: '/home', parentPage: null },
            'About': { path: '/about', parentPage: null },
            'Contact': { path: '/contact', parentPage: null },
            'Partners': { path: '/partners', parentPage: null },
            'Team': { path: '/team', parentPage: null },
            'Remote-learning': { path: '/remote-learning', parentPage: null },
            'Membership': { path: '/membership', parentPage: null },
            'Junior-golf': { path: '/junior-golf', parentPage: null },
            'Coaching' : {path: '/coaching', parentPage: null},
            'Screening' : {path: '/screening', parentPage: null},
            'Blog': { path: '/blog', parentPage: null },
            'Blog-Detail': { path: '/blog/', parentPage: 'Blog' },
            'Language': { path: '/language', parentPage: null },
            'Login': { path: '/login', parentPage: null },
            'Student-home': { path: '/student/home', parentPage: null },
            'Profile': { path: '/student/profile', parentPage: 'Student-home' },
            'Schedule': { path: '/student/schedule', parentPage: 'Student-home' },
            'Results': { path: '/student/results', parentPage: 'Student-home' },
            'Modules': { path: '/student/modules', parentPage: 'Student-home' },
            'Lesson': { path: '/student/lesson', parentPage: 'Student-home' },
            'Video-library': { path: '/student/video-library', parentPage: 'Student-home' },
            'Development-program': { path: '/student/development-program', parentPage: 'Student-home' }
        }
    );
    // This code finds the matched page given the current path. 
    // If not find, set NavBar to home page style. 
    // The purpose to reset NavBar styling when accessing page via a direct address change.
    // 
    // const pathToPage = (path) => Object.keys(pages).filter((page) => path === pages[page].path)[0];
    // const p = pathToPage(path);
    // [12/oct/2021 @Sarah]

    // Note: always use setPage() instead of setCurrentPage(). 
    const [currentPage, setCurrentPage] = useState(page);
    const [parentPage, setParentPage] = useState(pages[currentPage].parentPage);
    const [showLanguageDialog, setShowLanguageDialog] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [language, setLanguage] = useState('english');
    const history = useHistory();

    const handleOpenLanguageDialog = () => {
        setShowLanguageDialog(true);
    }

    const handleCloseLanguageDialog = () => {
        setShowLanguageDialog(false);
    }

    const setPage = (page) => {
        if (pages[page] !== undefined) {
            setCurrentPage(page);
            setParentPage(pages[page].parentPage);
            history.push(pages[page].path);
        } else {
            alert(page + ' page not find!');
        }
    }

    const getNavbarClassName = () => {
        if (currentPage === 'Home') {
            return "navBar transparent cover";
        } else if (parentPage === 'Student-home' || currentPage === 'Student-home') {
            return "navBar dark";
        } else {
            return "navBar light";
        }
    }

    const MenuItem = ({ page, children, className = "menuItem" }) => {
        const handleClick = () => {
            setPage(page);
        };
        return (
            <span key={page}
                onClick={handleClick}
                className={className}
                style={(currentPage === page || parentPage === page) ? { font: "var(--tertiary-bold)" } : {}}
            >
                {children ? children : t(`navbar.${page}`)}
            </span>
        );
    };
    const MobileMenu = () => {
        return <div className="menuItems-mobile-wrapper" onClick={closeMobileMenu}>
            <div className="menuItems-mobile">
                <MenuItem page='Contact' className="menuItem-mobile" />
                <MenuItem page='Screening' className="menuItem-mobile" />
                <MenuItem page='Coaching' className="menuItem-mobile" />
                <MenuItem page='Remote-learning' className="menuItem-mobile" />
                <MenuItem page='Junior-golf' className="menuItem-mobile" />
                <MenuItem page='Team' className="menuItem-mobile" />
                <MenuItem page='Partners' className="menuItem-mobile" />
                <MenuItem page='Blog' className="menuItem-mobile" />
            </div>
        </div>
    };

    const DesktopMenu = () => {
        return <div className="menuItems-middle">
            <MenuItem page='Contact' />
            <MenuItem page='Screening' />
            <MenuItem page='Coaching' />
            <MenuItem page='Remote-learning' />
            <MenuItem page='Junior-golf' />
            <MenuItem page='Team' />
            <MenuItem page='Partners' />
            <MenuItem page='Blog' />
        </div>
    };



    const goBack = () => { setPage(parentPage); };
    const openMobileMenu = () => { setMobileMenu(true); }
    const closeMobileMenu = () => { setMobileMenu(false); }
    const LogoIcon = () => <span className='logoWrapper'><MenuItem page='Home'><div className="logo"></div></MenuItem></span>;
    const MenuIcon = () => <span className="menuIconWrapper"><AiOutlineMenu className='menuIcon icon' onClick={openMobileMenu} /></span>;
    const LeftIcon = () => <span className="leftIconWrapper"><AiOutlineArrowLeft className='leftIcon icon' onClick={goBack} /></span>;

    return (
        <div className={getNavbarClassName()}>
            <div className="menu">
                {parentPage === null && <MenuIcon />}
                {parentPage !== null && <LeftIcon />}
                {parentPage === null && <LogoIcon />}
                {parentPage !== null && <span className='header'>{currentPage}</span>}
                {parentPage === null && <DesktopMenu />}
                <div className="menuItems-left">
                    <BiWorld className='icon' onClick={handleOpenLanguageDialog} />
                    {user ? (
                        <MenuItem page='Student-home'>
                            <Tooltip title="Student Home">
                                <Avatar alt={user.firstName} src={user.avatar} sx={{width:24,height:24}}/>
                            </Tooltip>
                        </MenuItem>


                    ) : (<MenuItem page='Login' />)}
                </div>
            </div>

            {/* ----------------------------HIDDEN------------------------------- */}
            <LanguageDialog open={showLanguageDialog} handleClose={handleCloseLanguageDialog}></LanguageDialog>
            {mobileMenu && <MobileMenu></MobileMenu>}
        </div>
    );
}

export default NavBar;