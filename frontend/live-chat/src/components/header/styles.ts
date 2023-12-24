import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;

  border-bottom: 2px solid var(--color-gray);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    height: 6rem;
    margin-bottom: 0.6rem;
  }

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
  }

  img {
    height: 100%;
    max-height: 5rem;
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      max-height: 3.5rem;
    }
  }
`;
