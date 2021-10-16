import React, { useState } from "react";
import './ProfileHeader.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ProfileHeader() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit } = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return (
        <div className="ProfileHeader">
            <Stack>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 200, height: 200 }}
                />
            </Stack>
            <div className="ProfileNameSection">
                <div className="ProfileTite">Prisdent</div>
                <input className="ProfileName" placeholder="First Name"></input>
                <input className="ProfileName" placeholder="Last Name"></input>
            </div>

        </div>
    )
}