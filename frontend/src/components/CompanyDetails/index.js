import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import CompaniesTable from '../CompaniesTable';
import api from '../../services/api';

export default function CompanyDetails(props) {
    const [declarations, setDeclarations] = useState([]);
    const [declaration, setDeclaration] = useState(null);

    useEffect(() => {
        setDeclarations(props.declarations);
    }, [props.declarations, declarations]);

    async function handleSubmit(e) {

        if (declaration !== null) {
            const data = new FormData(); 
            data.append('declaration', declaration);
            
            await api.post('/api/declaration', data);
        }
    }

    return(
        <Container>
            <h1>Detalhes</h1>
            <CompaniesTable
                companies={ props.company }
                detailsLink={ false }
            />
            <div className="feed">
                <h1>Linha do tempo</h1>
                <form ectype="multipart/form-data" onSubmit={handleSubmit}>
                    <input type="file" name="declaration" id="declaration" className="inputfile" onChange={e => setDeclaration(e.target.files[0])} />
                    <label htmlFor="declaration">Escolha o arquivo</label>
                    <button type="submit">Salvar</button>
                </form>
            </div>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th className="result"></th>
                    </tr>
                </thead>
                <tbody>
                    {declarations.map((declaration, idx) => (
                        <tr key={idx}>
                            <td>{ declaration.date }</td>
                            {declaration.type === 1 &&
                                <>
                                    <td>Dependência financeira</td>
                                    <td className="result negative">-4%</td>
                                </>
                            }
                            {declaration.type === 0 &&
                                <>
                                    <td>Nota fiscal emitida</td>
                                    <td className="result positive">+2%</td>
                                </> 
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}