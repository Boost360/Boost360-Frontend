import React from "react";
import logo from "../../../static/img/logo-black.png"
import './Login.css'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


/**
 * Student Login Page
 * 
 * @author Zach Wang
 * @date 2021/10/5 
 */


const Login = () => {

    const [values, setValues] = React.useState({
        id: '',
        password: '',
        showPassword: false,
    });

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


    return (
        <div className="loginPage">
            <img src={logo} className="login-logo"></img>
            <div className="login-input-group">

                <div className="login-input">

                    <FormControl sx={{ width: '568px' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">ID/Username</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            value={values.id}
                            onChange={handleChange('id')}
                        />
                    </FormControl>

                </div>

                <div className="login-input">

                    <FormControl sx={{ width: '568px' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
            <div className="login-button">
                Login
            </div>

            <div className="login-forgotten">
                forgotten your password ?
            </div>

        </div>
    )
}



export default Login;