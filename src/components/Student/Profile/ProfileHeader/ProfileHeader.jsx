import React, { useState } from "react";
import './ProfileHeader.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ProfileHeader({profile, handleChange}) {
    const { t, i18n } = useTranslation();
    return (
        <div className="ProfileHeader">
            <Stack>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 200, height: 200 }}
                    value={profile.avatar} 
                    onChange={(e)=>{handleChange('avatar',e.target.value)}}
                />
            </Stack>
            <div className="ProfileNameSection">
                <div className="ProfileTite">Prisdent</div>
                <input className="ProfileName" placeholder="First Name" value={profile.firstName} onChange={(e)=>{handleChange('firstName',e.target.value)}}></input>
                <input className="ProfileName" placeholder="Last Name" value={profile.secondName} onChange={(e)=>{handleChange('secondName',e.target.value)}}></input>
            </div>

        </div>
    )
}