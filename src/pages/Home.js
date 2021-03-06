import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../actions/countriesAction";
//Components
import Nav from "../components/Nav";
import Country from "../components/Country";
import CountryDetail from "../components/CountryDetail";

import styled from "styled-components";

import { useLocation } from "react-router-dom";

const Home = ({ themeToggler, theme }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  const { countries, searched } = useSelector((state) => state.countries);

  return (
    <>
      <Nav themeToggler={themeToggler} theme={theme} />
      <Countries>
        {pathId && <CountryDetail />}
        {searched.length === 1 && searched.includes("No results found") ? (
          <p>No results found</p>
        ) : searched.length === 0 ? (
          countries.map(({ name, capital, population, region, flag }) => (
            <Country
              key={name}
              name={name}
              capital={capital}
              population={population}
              region={region}
              flag={flag}
            />
          ))
        ) : (
          searched.map(({ name, capital, population, region, flag }) => (
            <Country
              key={name}
              name={name}
              capital={capital}
              population={population}
              region={region}
              flag={flag}
            />
          ))
        )}
      </Countries>
    </>
  );
};

const Countries = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  padding: 0rem 7rem;

  margin-top: 2rem;

  /* background-color: red; */

  @media screen and (max-width: 450px) {
    padding: 0rem 2rem;
  }
`;

export default Home;
