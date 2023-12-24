import styled from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 2px solid var(--color-gray);
    margin-top: 1rem;
    height: 3rem;
    margin-top: 24px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        p{
            font-size: 1.2rem;
            font-weight: 500;
            span{
                color: var(--color-primary);
            }
        }
    }
`