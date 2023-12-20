import styled  from 'styled-components'

export const StyledHeader = styled.header`
    height: 7rem;
    width: 100%;
    display: flex;
    align-items: center;

    border-bottom: 2px solid var(--color-gray);
    margin-bottom: 1rem;

    div{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
    }

    img{
        height: 100%;
        max-height: 5rem;
        transition: 1s;
        &:hover{
            transform: scale(1.1);
        }
    }
    
`   