import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{background: "#0c0c0c"}}>
                <Toolbar variant="dense">
                    <Grid container justifyContent = {'space-between'}>
                    <Box className='hover cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='hover cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='hover cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='hover cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='hover cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                        <Box mx={1} className='hover cursor'>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;