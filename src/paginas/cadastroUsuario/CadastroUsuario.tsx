import React, { ChangeEvent, useEffect, useState } from 'react';
import "./CadastroUsuario.css"
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastrado.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='container2'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} className="esquerda" >
                <Box className="card" paddingX={10} height="100%">
                    <form onSubmit={onSubmit} className="form">
                        <Typography variant="h3" align="center" className="form-title">
                            Cadastrar
                        </Typography>
                        <Box className="form-input">
                            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label="Nome" variant='outlined' name='nome' margin='normal' fullWidth />
                        </Box>
                        <Box className="form-input">
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label="Usuario" variant='outlined' name='usuario' margin='normal' fullWidth />
                        </Box>
                        <Box className="form-input">
                            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label="Senha" variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        </Box>
                        <Box className="form-input">
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label="Confirmar Senha" variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        </Box>
                        <Box marginTop={2} textAlign='center'>
                            <Link to="/login" className='text-decorator-none'>
                                <Button variant="contained" className="button">Cancelar</Button>
                            </Link>
                            <Button type='submit' variant="contained" className="button">Cadastrar</Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}



{/* <Box paddingX={10}>
<form onSubmit={onSubmit}>
    <Typography variant='h3' gutterBottom color='textPrimary' component="h3" align='center' className='textos2'>Cadastrar</Typography>
    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='nome' label="nome" variant='outlined' name='nome' margin='normal' fullWidth />
    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='usuario' label="usuario" variant='outlined' name='usuario' margin='normal' fullWidth />
    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id ='senha' label="senha" variant='outlined' name='senha' margin='normal' type='password' fullWidth />
    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label="confirmarSenha" variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
    <Box marginTop={2} textAlign='center'>
        <Link to="/login" className='text-decorator-none'>
            <Button variant="contained" color="secondary" className="btnCancelar">Cancelar</Button>
        </Link>
        <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
    </Box>
</form>
</Box> */}

export default CadastroUsuario;