import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }
    return (
        <>
            <AppBar position="static" style={{ background: "#0c0c0c" }}>
                <Toolbar variant="dense">
                    <Grid container justifyContent={'space-between'}>
                        <Box className='hover cursor'>
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                        </Box>

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
        </>
    )
}

export default Navbar;