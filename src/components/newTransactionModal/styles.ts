import styled from "styled-components";
import { transparentize } from "polished"

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding:0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--background);
    background: var(--black);

    font-weight: 400;
    font-size: 1rem;
    color: white;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;

    transition: 0.2s;

    &:hover {
        filter: brightness(0.9)
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface TypeRadioBox {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: "#015F43",
    red: "#F75A68"
}

export const RadioBox = styled.button<TypeRadioBox>`
    height: 4rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive === true
        ? transparentize(0.7, colors[props.activeColor])
        : "#39393f"
    };

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`
