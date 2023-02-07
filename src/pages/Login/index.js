import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Title } from './styled'

import * as exampleActions from '../../store/modules/example/actions'

import axios from "../../services/axios";

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
    }

    return (
    <>
        <Container>
            <Title>
            <h1>Pagina de Login</h1>
            </Title>
            <small>Oi</small>
            <p>Lorem</p>
            <button onClick={handleClick}>Enviar</button>
        </Container>

    </>
    )
}