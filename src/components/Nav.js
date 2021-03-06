import { useState, useEffect } from "react";

import styled from "styled-components";

import moonIcon from "../icons/moon.svg";
import sunIcon from "../icons/sun.svg";
import loupeIcon from "../icons/loupe.svg";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../actions/countriesAction";
import { clearDetail } from "../actions/countryDetailAction";

import { useHistory } from "react-router-dom";

const Nav = ({ themeToggler, theme }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [filterRegion, setFilterRegion] = useState("All");

  const { countries } = useSelector((state) => state.countries);
  const { country } = useSelector((state) => state.detail);

  const history = useHistory();

  const isActive = () => {
    return Object.keys(country).length === 0 ? false : true;
  };

  useEffect(() => {
    const searchCountries = [...countries];

    let filteredCountries;

    filterRegion === "All"
      ? (filteredCountries = searchCountries.filter(({ name }) =>
          name.toLowerCase().startsWith(textInput.toLowerCase())
        ))
      : (filteredCountries = searchCountries.filter(
          ({ name, region }) =>
            name.toLowerCase().startsWith(textInput.toLowerCase()) &&
            region === filterRegion
        ));

    if (filteredCountries.length === 0 && textInput !== "") {
      dispatch(fetchSearch(["No results found"]));
    } else {
      dispatch(fetchSearch(filteredCountries));
    }
  }, [textInput, filterRegion]);

  const searchHandler = (e) => {
    setTextInput(e.target.value);
  };

  const filterHandler = (e) => {
    setFilterRegion(e.target.value);
  };

  const homePageBack = () => {
    document.body.style.overflow = "auto";
    dispatch(clearDetail());
    history.push("/");
  };

  return (
    <>
      <NavStyled active={isActive()}>
        <h1 onClick={homePageBack}>Where in the world ?</h1>
        <button onClick={themeToggler}>
          <img
            src={theme === "light" ? moonIcon : sunIcon}
            alt="light/dark mode"
          />

          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </NavStyled>
      <SearchNav>
        <StyledInput>
          <StyledImg src={loupeIcon} alt="loupe" />
          <input
            placeholder="Search for a country.."
            value={textInput}
            type="text"
            onChange={searchHandler}
          />
        </StyledInput>

        <StyledSelect
          name="regions"
          onChange={filterHandler}
          active={isActive()}
        >
          <option value="All">All</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
        </StyledSelect>
      </SearchNav>
    </>
  );
};

const NavStyled = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 7rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.card};
  z-index: 1000;

  @media screen and (max-width: 900px) {
    padding: 0rem 1.5rem;
  }

  ${({ active }) =>
    active &&
    `
    position: fixed;
  width: 100%;
  `}

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
    transition: all 0.75s ease;
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
    @media screen and (max-width: 450px) {
      font-size: 1rem;
    }
  }

  h1 {
    cursor: pointer;
    @media screen and (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;

const SearchNav = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 7rem;

  @media screen and (max-width: 900px) {
    padding: 0rem 0rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const StyledInput = styled.div`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  background-color: white;
  padding: 0.6rem 0rem;
  width: 25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.card};

  input {
    align-self: stretch;
    font-size: 1.2rem;
    font-family: inherit;
    color: ${({ theme }) => theme.text};
  }
`;

const StyledImg = styled.img`
  margin: 0rem 1rem;
  filter: ${({ theme }) => theme.svg};
`;

const StyledSelect = styled.select`
  outline: none;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  width: 10rem;
  font-family: inherit;
  background-image: url(${({ theme }) => theme.downIcon});
  background-repeat: no-repeat;
  appearance: none;
  background-size: 0.8rem;
  background-position: 90% 50%;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 450px) {
    align-self: flex-start;
    margin: 0rem 1.5rem;
  }
`;

export default Nav;
