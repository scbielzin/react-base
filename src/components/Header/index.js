import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import {Nav} from './styled'

import { useSelector } from "react-redux";

export default function Header() {
    const botaoClicado = useSelector(state => state.example.botaoClicado)
    
    return (
        <Nav>
            <Link to="/"><FaHome size={24}/></Link>
            <Link to="/login"><FaUserAlt size={24}/></Link>
            <Link to="/logout"><FaSignInAlt size={24}/></Link>
            {botaoClicado ? 'Clicado' : 'Não Clicado'}
        </Nav>
    )
}