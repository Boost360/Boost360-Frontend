import React from "react";
import './StudentHome.css';
import { Dialog } from "@mui/material";

export default function StudentHomeLogout({setUser}) {

    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)

    }

    const handleOpen = () => {
        setOpen(true)

    }

    const handleLogout = () =>{
        localStorage.removeItem('token')
        setUser(null)
    }




    return (
        <div className="StudentHomeCard">


            <div className="StudentHomeLogoutBoarder" onClick={handleOpen}>
                <div className="StudentHomeLogout-Icon">
                    Logout
                </div>
            </div>



            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={open}
                onClose={handleClose}
            >
                <div className="langDialog">
                    <div className="langDialog-text">
                        Are you sure you want to logout?
                    </div>
                    <div className="langDialog-Buttongroup logout-button">
                        <div className="langDialog-Button" onClick={handleClose}>
                            <a className="langDialog-Button-text">Cancel</a>
                        </div>
                        <div className="langDialog-Button blue" onClick={handleLogout}>
                            <a className="langDialog-Button-text">Confirm</a>
                        </div>
                    </div>

                </div>

            </Dialog >
        </div>
    )
}
