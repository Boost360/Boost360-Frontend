import React, { useState } from "react";
import './ProfileHeader.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarDialog from "../Avatar/AvatarDialog";


export default function ProfileHeader({profileInfo, handleChange,user,setUser}) {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit } = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    const [showAvatar, setShowAvatar] = React.useState(false)

    const handleAvatarOpen = () => {
        setShowAvatar(true)

    }
    const handleAvatarClose = () => {
        setShowAvatar(false)

    }


    return (
        <div className="ProfileHeader">
            <AvatarDialog user={user}  setUser={setUser} open={showAvatar} handleClose={handleAvatarClose}></AvatarDialog>
            <Stack>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 200, height: 200 }}
                    value={profileInfo.avatar} 
                    onChange={(e)=>{handleChange('avatar',e.target.value)}}
                    onClick={handleAvatarOpen}

                />
            </Stack>
            <div className="ProfileNameSection">
                <div className="ProfileTite">Prisdent</div>
                <input className="ProfileName" placeholder="First Name" value={profileInfo.firstName} onChange={(e)=>{handleChange('firstName',e.target.value)}}></input>
                <input className="ProfileName" placeholder="Last Name" value={profileInfo.secondName} onChange={(e)=>{handleChange('secondName',e.target.value)}}></input>
            </div>

        </div>
    )
}