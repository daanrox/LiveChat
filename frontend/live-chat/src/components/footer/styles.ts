import styled from "styled-components";

export const StyledFooter = styled.footer`
    border-top: 2px solid var(--color-gray);
    margin-top: 1rem;
    height: 4rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-top: 24px;
        p{
            font-size: 1.4rem;
            font-weight: 500;
            span{
                color: var(--color-primary);
            }
        }
    }
`