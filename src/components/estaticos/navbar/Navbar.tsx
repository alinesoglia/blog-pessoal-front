import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify'

function Navbar() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuario deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static" style={{ background: "#0c0c0c" }}>
            <Toolbar variant="dense">
                <Grid container justifyContent={'space-between'}>
                    <Link to="/home" className='text-decorator-none'>
                        <Box className='hover cursor'>
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className='text-decorator-none'>
                            <Box mx={1} className='hover cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className='text-decorator-none'>
                            <Box mx={1} className='hover cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className='hover cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                            <Box mx={1} className='hover cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='hover cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;