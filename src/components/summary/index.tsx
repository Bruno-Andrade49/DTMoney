import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/become.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../transactionsContext";

export function Summary() {
    const data = useContext(TransactionsContext)
    console.log(data)
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Renda" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saída" />
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}