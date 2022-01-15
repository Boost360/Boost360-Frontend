import React from "react";
import logo from "../../../static/img/logo/bottom_text_black.svg"
import './Login.css'
import { Snackbar, Alert } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { login } from "../../../api/login/login";
import { useHistory } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from "react-i18next";

/**
 * Student Login Page
 * 
 * @author Zach Wang
 * @date 2021/10/5 
 * 
 * changes:
 * @date 2022/01/15
 * 
 */

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
            main: 'var(--primary)',
            contrastText: '#fff',
        },
    },
});

const Login = ({ setUser }) => {
    const { t, i18n } = useTranslation();

    const [values, setValues] = React.useState({
        id: '',
        password: '',
        showPassword: false,
    });

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(false)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let history = useHistory();

    const handleLogin = async () => {
        if (values.id === '' || values.password === '') {
            setError(true)
            return
        }
        setLoading(true)
        let loginPayload = { email: values.id, password: values.password };
        let response = await login(loginPayload);
        if (response.status === 200) {
            if (response.data.user.type == "student") {
                localStorage.setItem("token", response.data.token)
                setUser(response.data.user)
                setLoading(false)
                history.push('/student/home')

            } else {
                setError(true)
                setLoading(false)

            }


        } else {
            setError(true)
            setLoading(false)
        }

    }

    const handleClose = () => setError(false)


    return (
        <div className="loginPage">


            <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={error} autoHideDuration={6000} onClose={handleClose} >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {t("login.invalid")}
                </Alert>
            </Snackbar>

            <img src={logo} className="login-logo"></img>
            <div className="login-input-group">

                <div className="login-input">

                    <FormControl sx={{ width: '100%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">{t("login.email")}</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            value={values.id}
                            onChange={handleChange('id')}
                        />
                    </FormControl>

                </div>

                <div className="login-input">

                    <FormControl sx={{ width: '100%' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">{t("login.password")}</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </div>


            </div>


            <div className="login-button" >
                <ThemeProvider theme={theme}>
                    <LoadingButton
                        onClick={handleLogin}
                        loading={loading}
                        variant="contained"
                        fullWidth={true}
                        color="blue"
                    >
                        {t("login.login")}
                    </LoadingButton>
                </ThemeProvider>
            </div>

            <div className="login-forgotten">
                {t("login.forgotten")}
            </div>

        </div>
    )
}



export default Login;