import React,{useState} from 'react';
import {Link} from 'react-router';
import './NavBar.css';
import {AiOutlineMenu, AiOutlineArrowLeft, AiOutlineArrowUp} from 'react-icons/ai';


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
    
const NavBar = ({page, goToPage}) => {
    const [language, setLanguage] = useState('english');
    const [isFold, setIsFold] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [currentPage, setCurrentPage] = useState(page); // Note: always use setPage() instead of setCurrentPage(). [24/sep/2021 @Sarah]
    const [pages, setPages] = useState(
        {
            'Home' : null,
            'About' : null,
            'Contact' : null,
            'Partners' : null,
            'Team' : null,
            'Services' : null,
            'Blog' : null,
            'Language' : null,
            'Student login' : null,
            'Student home' : null,
            'Profile' : 'Student home',
            'Schedule' : 'Student home',
            'Results' : 'Student home',
            'Modules' : 'Student home',
            'Equipment' : 'Student home',
            'Video library' : 'Student home',
            'Development program' : 'Student home'
        } 
    );
    const [parentPage, setParentPage] = useState(pages[currentPage]);


// @todo add onMount function {setPage(page)}
        
    const setPage = (page) => {
        if (pages[page] !== undefined) {
            setCurrentPage(page);
            setParentPage(pages[page]);
            console.log('parent page set to', pages[page]);
        } else {
            alert(page + ' page not find!');
        }
    }

    const getNavbarClassName = () => {
        if (currentPage === 'Home' || currentPage === 'Contact') {
            return "navBar transparent";
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

    const MenuItem = ({ page, navLink }) => {
        const handleClick = () => {
            setPage(page);
            page === 'Home' ? setIsFold(false) : setIsFold(true);
            goToPage(navLink);
        };
        return (
            <span key={page}
                onClick={handleClick}
                className="menuItem"
                style={(currentPage === page || parentPage === page) ? { font: "var(--tertiary-bold)" } : {}}
            >
                {page}
            </span>);
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
                    <MenuItem page='Home' navLink='/site/home'/>
                    |
                    <MenuItem page='About' navLink='/site/about'/>
                    |
                    <MenuItem page='Contact' navLink='/site/contact'/>
                    |
                    <MenuItem page='Partners' navLink='/site/partner'/>
                    |
                    <MenuItem page='Team'navLink='/site/team'/>
                    |
                    <MenuItem page='Services'navLink='/site/services'/>
                    |
                    <MenuItem page='Blog'navLink='/site/blog'/>
                    |
                    <MenuItem page='Language'navLink='/site/language'/>
                    |
                    {isLogin ? (<MenuItem page='Student home' navLink='/site/student_home'/>) : (<MenuItem page='Student login' navLink='/site/student-login'/>)}
                </div>
            </div>
            <div className='header' style={currentPage === 'Home' ? {display: 'none'} : {display: 'flex'}}>
                <MenuIcon/>
                <div className="header-text">{getHeaderText()}</div>
            </div>
        </div>
    );
}

export default NavBar;
