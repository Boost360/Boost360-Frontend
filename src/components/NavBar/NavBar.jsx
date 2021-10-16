import React,{useState} from 'react';
import './NavBar.css';
import {useHistory} from 'react-router';
import {AiOutlineMenu, AiOutlineArrowLeft, AiOutlineArrowUp} from 'react-icons/ai';
import LanguageDialog from '../Localization/LanguageDialog';


// BEHAVIORS        
//
// menu:   bold current page or bold it's parent page IF specified
//         switch 'student login' to 'student home'   IF user is logged in
//         fold NavBar                                IF page resets except for 'Home' page
//
// header: display page name                          IF page resets
//         use arrow-up icon                          IF it's unfolded
//         use arrow-back icon                        IF parent page is not null
//         use menu icon                              IF parent page is null
//         hide header if                             IF at 'Home' page
//
// icon:   set to parent page                         IF left-arrow is clicked
//         fold menu                                  IF up-arrow is clicked
//         unfold menu                                IF menu-icon is clicked
//
// color:  set menu and header to transparent background
//         && add top shadow to entire NavBar and remove 
//         border effect                              IF at 'Home' or 'Contact' page
//         set header to primary color background and 
//         light text                                 IF at 'Student home' or its subpages
// 
// @todo folding animation
// @todo refactor
// [24/sep/2021 @Sarah]


    
const NavBar = ({page,user}) => {
    const [pages, setPages] = useState(
        {
            'Home' : {path: '/index', parentPage: null},
            'About' : {path: '/about', parentPage: null},
            'Contact' : {path: '/contact', parentPage: null},
            'Partners' : {path: '/partners', parentPage: null},
            'Team' : {path: '/team', parentPage: null},
            'Membership' : {path: '/membership', parentPage: null},
            'Junior golf' : {path: '/junior-golf', parentPage: null},
            'Blog' : {path: '/blog', parentPage: null},
            'Language' : {path: '/language', parentPage: null},
            'Student login' : {path: '/login', parentPage: null},
            'Student home' : {path: '/student/home', parentPage: null},
            'Profile' : {path: '/student/profile', parentPage: 'Student home'},
            'Schedule' : {path: '/student/schedule', parentPage: 'Student home'},
            'Results' : {path: '/student/results', parentPage: 'Student home'},
            'Modules' : {path: '/student/modules', parentPage: 'Student home'},
            'Equipment' : {path: '/student/equipment', parentPage: 'Student home'},
            'Video library' : {path: '/student/video-library', parentPage: 'Student home'},
            'Development program' : {path: '/student/development-program', parentPage: 'Student home'}
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
    const [currentPage, setCurrentPage] = useState(pages[page] !== undefined ? page : 'Home');
    const [parentPage, setParentPage] = useState(pages[currentPage].parentPage);
    const [isFold, setIsFold] = useState(currentPage === 'Home' ? false : true);
    const [showLanguageDialog,setShowLanguageDialog] =useState(false);
    const [language, setLanguage] = useState('english');
    const history = useHistory();

    const handleOpenLanguageDialog = () =>{
        setShowLanguageDialog(true);
    }

    const handleCloseLanguageDialog = () =>{
        setShowLanguageDialog(false);
    }
        
    const setPage = (page) => {
        if (pages[page] !== undefined) {
            page === 'Home' ? setIsFold(false) : setIsFold(true);
            setCurrentPage(page);
            setParentPage(pages[page].parentPage);
            history.push(pages[page].path);
        } else {
            alert(page + ' page not find!');
        }
    }

    const getNavbarClassName = () => {
        if (currentPage === 'Home' || currentPage === 'Contact') {
            return "navBar transparent cover";
        } else if (parentPage === 'Student home' || currentPage === 'Student home') {
            return "navBar dark";
        } else {
            return "navBar light";
        }
    }

    const getHeaderText = () => {
        if (currentPage === 'Partners') {
            return 'Our Valued Partners';
        } else if (currentPage === 'Team') {
            return language === 'english' ? 'New Zealand Team' : 'South Korea Team';
        } else {
            return currentPage;
        }
    };

    const goBack = () => {
        setPage(parentPage);
    };

    const fold = () => {
        setIsFold(true);
    }

    const unfold = () => {
        setIsFold(false);
    }

    const MenuItem = ({page}) => {
        const handleClick = () => {
            setPage(page);
        };
        return (
            <span key={page}
                onClick={handleClick}
                className="menuItem"
                style={(currentPage === page || parentPage === page) ? { font: "var(--tertiary-bold)" } : {}}
            >
                {page}
            </span>
        );
    };

    const MenuIcon = () => {
        if (parentPage !== null) {
            return (<AiOutlineArrowLeft className='icon' key={0} onClick={goBack}/>);
        } else if (isFold) {
            return (<AiOutlineMenu className='icon'key={0} onClick={unfold}/>);
        } else {
            return (<AiOutlineArrowUp className='icon'key={0} onClick={fold}/>);
        }
    }    
        
    return (
        <div className={getNavbarClassName()}>
            <div className="menu" style={isFold ? {display: 'none'} : {display: 'flex'}}>
                <div className="logo"></div>
                <div className="menuItems">
                    <MenuItem page='Home'/>
                    |
                    {/* <MenuItem page='About'/>
                    | */}
                    <MenuItem page='Contact'/>
                    |
                    <MenuItem page='Partners'/>
                    |
                    <MenuItem page='Team'/>
                    |
                    <MenuItem page='Membership'/>
                    |
                    <MenuItem page='Junior golf'/>
                    |
                    <MenuItem page='Blog'/>
                    |
                    <span className="menuItem" onClick={handleOpenLanguageDialog}>
                        Language
                    </span>
                    |
                    {user ? (<MenuItem page='Student home'/>) : (<MenuItem page='Student login'/>)}
                </div>
            </div>
            <div className='header' style={currentPage === 'Home' ? {display: 'none'} : {display: 'flex'}}>
                <MenuIcon/>
                <div className="header-text">{getHeaderText()}</div>
            </div>
            <LanguageDialog open={showLanguageDialog} handleClose={handleCloseLanguageDialog}></LanguageDialog>
        </div>
    );
}

export default NavBar;
