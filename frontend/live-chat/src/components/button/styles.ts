import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: var(--color-primary);
    width: 90%;
    max-width: 11rem;
    padding: 1.1rem;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    transition: 0.5s;
    color: var(--color-black);
    &:hover{
        opacity: 0.8;
    }

    @media (max-width:480px) {
        padding: 0.5rem;
        font-size: 1.05rem;
        width: 80%;
        max-width: 8rem;
    }

`