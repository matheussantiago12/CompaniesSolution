import React, { useState, useEffect } from 'react';

import CompaniesTable from '../../components/CompaniesTable';
import { Container } from './styles';
import api from '../../services/api';


export default function Main() {
    const [companies, setCompanies] = useState([]);

    const [name, setName] = useState("");

    useEffect(() => {
        api.get(`/api/companies`)
            .then(response => {
                setCompanies(response.data);
            });   
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== '') {
            api.post('/api/company', {
                name: name
            });

            api.get(`/api/companies`)
            .then(response => {
                setCompanies(response.data);
            });
            
            alert("Empresa criada com sucesso!");
        } 
    }

    return(
        <Container>
            <h1>Registrar nova empresa</h1>
            <div className="register">
                <form onSubmit={handleSubmit} method="post">
                    <input type="text" placeholder="Nome da empresa" name="name" onChange={e => setName(e.target.value)} />
                    <button type="submit">Registrar</button>
                </form>
            </div>
            <h1>Ranking de empresas</h1>
            <CompaniesTable 
                companies={ companies }
                detailsLink={ true }
            />
        </Container>
    );
}