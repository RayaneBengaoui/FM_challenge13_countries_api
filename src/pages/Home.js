import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../actions/countriesAction";
//Components
import Nav from "../components/Nav";
import Country from "../components/Country";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  const { countries, searched } = useSelector((state) => state.countries);

  return (
    <>
      <Nav />
    </>
  );
};

export default Home;
