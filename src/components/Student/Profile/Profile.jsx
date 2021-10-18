import React, { useState } from "react";
import './Profile.css';
import { useTranslation } from "react-i18next";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContact from "./ProfileContact/ProfileContact";
import { profile } from "../../../api/profile/profile";
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar, Alert } from "@mui/material";

export default function Profile({user,setUser}) {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            blue: {
                main: '#00AAE7',
                contrastText: '#fff',
            },
        },
    });

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(false)

    const [success, setSuccess] = React.useState(false)

    const handleClose1 = () => setError(false)

    const handleClose2 = () => setSuccess(false)

    const [profileInfo, setProfile] = React.useState({
        avatar: user.avatar,
        firstName: user.firstName,
        secondName: user.secondName,
        ethnicity: user.ethnicity?user.ethnicity:"",
        dob: user.dob,
        address: user.address,
        mobile: user.mobile,
        email: user.email,
        medicalCondition: user.medicalCondition,
        club: user.club,
        yearsPlaying: user.yearsPlaying,
        school: user.school,
        schoolYear: user.schoolYear,
        contact1Name: user.contact1Name,
        contact1Relationship: user.contact1Relationship,
        contact1Mobile: user.contact1Mobile,
        contact1Email: user.contact1Email,
        contact2Name: user.contact2Name,
        contact2Relationship: user.contact2Relationship,
        contact2Mobile: user.contact2Mobile,
        contact2Email: user.contact2Email,
    });

    const handleChange = (prop) => (event) => {
        setProfile({ ...profileInfo, [prop]: event.target.profileInfo });
    };


    const handleSubChange = (key,value) => {
        setProfile({ ...profileInfo, [key]:value });
    }

    const handleSave = async () => {
        let response = await profile(profileInfo,user._id);
        if (response.status === 200) {
            setUser(response.data)
            setSuccess(true)
            setLoading(false)
        } else {
            setError(true)
            setLoading(false)
        }
    }

    return(

        <div className="Profile">
            
            <div className="ProfileContaniner">

                <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={error} autoHideDuration={6000} onClose={handleClose1} >
                    <Alert onClose={handleClose1} severity="error" sx={{ width: '100%' }}>
                        Cannot Upload Now!
                    </Alert>
                </Snackbar>
                <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={success} autoHideDuration={6000} onClose={handleClose2} >
                    <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                        You Have Upload Successfully!
                    </Alert>
                </Snackbar>

                <ProfileHeader profileInfo={profileInfo} handleChange={handleSubChange} user={user} setUser={setUser}/>

                <div className="ProfileBottom">
                    <ProfileInfo profileInfo={profileInfo} handleChange={handleSubChange}></ProfileInfo>
                    <div className="ProfileContactSection">
                        <ProfileContact profileInfo={profileInfo} handleChange={handleSubChange}></ProfileContact>
                        <div className="ProfileSave">
                        <ThemeProvider  theme={theme}>
                            <LoadingButton
                                onClick={handleSave}
                                loading={loading}
                                variant="contained"
                                fullWidth={true}
                                color="blue"
                            >
                                Save
                            </LoadingButton>
                        </ThemeProvider>
                        </div>
                        {/* <button className="ProfileSave" onClick={handleSave}>Save</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}