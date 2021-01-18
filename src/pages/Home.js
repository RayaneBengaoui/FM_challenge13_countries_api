import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../actions/countriesAction";
//Components
import Nav from "../components/Nav";
import Country from "../components/Country";

import styled from "styled-components";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  const { countries, searched } = useSelector((state) => state.countries);

  return (
    <>
      <Nav />
      <Countries>
        {countries.map(({ name, capital, population, region, flag }) => (
          <Country
            name={name}
            capital={capital}
            population={population}
            region={region}
            flag={flag}
          />
        ))}
      </Countries>
    </>
  );
};

const Countries = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  padding: 0rem 7rem;
  margin-top: 2rem;
`;

export default Home;
