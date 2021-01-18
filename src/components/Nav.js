import styled from "styled-components";

import moonIcon from "../icons/moon.svg";

const Nav = () => {
  return (
    <NavStyled>
      <h1>Where in the world ?</h1>
      <button>
        <img src={moonIcon} alt="light/dark mode" />
        Dark Mode
      </button>
    </NavStyled>
  );
};

const NavStyled = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 7rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }
`;

export default Nav;
