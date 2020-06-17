import React from 'react';

import { FaEye } from 'react-icons/fa';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function CompainesTable(props) {
    return(
        <Container>
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th className="score">Score</th>
                        {props.detailsLink &&
                            <th className="action"></th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {props.companies.map((company, idx) => (
                        <tr key={idx}>
                            <td>{ company.name }</td>
                            <td className="score">{ Math.round(company.score) }</td>
                            {props.detailsLink &&
                                <td className="action">
                                    <Link to={`/details/${company.id}`}><FaEye /></Link>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}