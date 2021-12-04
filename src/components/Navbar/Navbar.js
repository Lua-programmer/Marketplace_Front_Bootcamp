import React from 'react';
import { GiClover } from "react-icons/gi";
import  'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Search from '../Search/Search';

const Navbar = () => {
    return (
        <div >
            <div className='navbar-brand'>
                <a className='nav__title' href='/'>
                    <h2>{<GiClover/>}</h2>
                    <h2>Vida saudável</h2>
                </a>
                <li>
                    <a className='navbar-toggler iten-menu' href='/'onClick=''>Categorias</a>
                    <ul className='menu'>
                        <li>
                            <a className='iten-menu' href='/'>Produtos Naturais</a>
                        </li>
                        <li>
                            <a className='iten-menu' href='/'>Incensos</a>
                        </li>
                        <li>
                            <a className='iten-menu' href='/' onClick=''>Artigos esportivos</a>
                            <ul>
                                <li>
                                <a className='subiten-menu' href='/'>Yoga</a>
                                </li>
                                <li>
                                <a className='subiten-menu' href='/'>Pilates</a>
                                </li>
                                <li>
                                <a className='subiten-menu' href='/'>Surf</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className='navbar-toggler iten-menu' href='/' onClick=''>Login</a>
                    <ul>
                        <li>
                        <a className='subiten-menu' href='/'>Cliente</a>
                        </li>
                        <li>
                        <a className='subiten-menu' href='/'>Empresa</a>
                        </li>
                    </ul>
                </li>
                <Search/>

            </div>
        </div>
    )
}

export default Navbar;