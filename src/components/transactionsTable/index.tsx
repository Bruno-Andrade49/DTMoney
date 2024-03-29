
import { createContext, useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { TransactionsContext } from "../../transactionsContext";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {

    const {transactions} = useContext(TransactionsContext);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR')
                                    .format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    )
                    )
                    }
                </tbody>
            </table>
        </Container>
    )
}