import React, { useState } from "react";
import './ContactInput.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "../../../api/mailer/contactPageEmail";
import { Snackbar, Alert } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

export default function ContactInput() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notFillAll, setNotFillAll] = useState(false);
    const [success, setSuccess] = useState(false);


    const onSubmit = async (data) => {
        console.log(data)
        if (data.name === "" || data.email === "" || data.msg === "") {
            setNotFillAll(true)
            return
        }
        setLoading(true)
        data.lang = t('lang');
        let status = await sendContactEmail(data);
        console.log(status)
        if (status === 200) {
            setLoading(false);
            setSuccess(true);
        } else {
            setError(true);
            setLoading(false);
        }
    }



    const handleClose = () => {
        setSuccess(false);
        setError(false);
        setNotFillAll(false);
    }

    return (
        <div className="ContactInput-section">

            <Snackbar anchorOrigin={{'vertical':'bottom','horizontal':'center'}} open={success} autoHideDuration={6000} onClose={handleClose}  >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    We have received your message and will reply as soon as possible!
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{'vertical':'bottom','horizontal':'center'}} open={error} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Error!
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{'vertical':'bottom','horizontal':'center'}}  open={notFillAll} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Please fill in all information!
                </Alert>
            </Snackbar>

            <div className="ContactInput-info">
                <p>{t('contact.info')}</p>
            </div>

            <div className="ContactInput">
                <input {...register("name")} placeholder={t('contact.name')}></input>
                <input {...register("email")} placeholder={t('contact.email')}></input>
                <textarea {...register("msg")} placeholder={t('contact.msg')}></textarea>
                <LoadingButton
                    onClick={handleSubmit(onSubmit)}
                    loading={loading}
                    variant="contained"
                >
                    {t('contact.send')}
                </LoadingButton>

            </div>

        </div>
    )
}