import { useState, useEffect } from "react";

import styled from "styled-components";

import moonIcon from "../icons/moon.svg";
import loupeIcon from "../icons/loupe.svg";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../actions/countriesAction";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const { countries, searched } = useSelector((state) => state.countries);

  useEffect(() => {
    const searchCountries = [...countries];

    let filteredCountries;

    filterRegion === ""
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

  return (
    <>
      <NavStyled>
        <h1>Where in the world ?</h1>
        <button>
          <img src={moonIcon} alt="light/dark mode" />
          Dark Mode
        </button>
      </NavStyled>
      <SearchNav>
        <StyledInput>
          <img src={loupeIcon} alt="loupe" />
          <input value={textInput} type="text" onChange={searchHandler} />
        </StyledInput>
        <StyledListChoices>
          <input
            list="regions"
            placeholder="Filter by Region"
            onChange={filterHandler}
          />
          <datalist id="regions">
            <option value="Europe"></option>
            <option value="Africa"></option>
            <option value="Americas"></option>
            <option value="Oceania"></option>
            <option value="Asia"></option>
          </datalist>
        </StyledListChoices>
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
  background-color: white;

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

const SearchNav = styled.div`
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 7rem;
`;

const StyledInput = styled.div``;

const StyledListChoices = styled.div``;

export default Nav;
