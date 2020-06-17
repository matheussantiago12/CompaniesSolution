import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Container } from './styles';
import CompanyDetails from '../../components/CompanyDetails';
import api from '../../services/api';

export default function Details(props) {
    const { id } = useParams();

    const [company, setCompany] = useState([]);
    const [declarations, setDeclarations] = useState([]);

    useEffect(() => { 
        api.get(`/api/company/${id}`)
            .then(response => {
                setCompany([response.data]);
            });
        
        api.get(`/api/declarations/${id}`)
            .then(response => {
                setDeclarations(response.data);
            });
    }, []);


    return(
        <Container>    
            <CompanyDetails company={ company } declarations={ declarations } />         
        </Container>
    );
}