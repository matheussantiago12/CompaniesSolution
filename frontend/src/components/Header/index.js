import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <Container>
            <div className="title">
                <Link to="/">
                    <h1 className="full-text">Companies Solution</h1>
                    <h1 className="short-text">CS</h1>
                </Link>
            </div>
            <div className="search">
                <input name="q" type="text" placeholder="Pesquisar" />
                <button><FaSearch size={16} /></button>
            </div>
        </Container>
    );
}