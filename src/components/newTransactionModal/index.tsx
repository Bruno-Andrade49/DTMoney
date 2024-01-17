import Modal from "react-modal"
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import buttonCloseImg from "../../assets/closeButton.svg"
import incomeImg from "../../assets/income.svg"
import becomeImg from "../../assets/become.svg"
import { useState } from "react";


interface NewTransacrionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransacrionModalProps) {

    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-content'}
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={buttonCloseImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >

                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox >

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >

                        <img src={becomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox >
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>



        </Modal>
    )
}