import logoImg from "../../assets/Logo.png"
import { Container, Content } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtMoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}