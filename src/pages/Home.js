import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../actions/countriesAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  const { countries, searched } = useSelector((state) => state.countries);

  return (
    <>
      <h1>Hello Home</h1>
      <h2>coutrnie</h2>
    </>
  );
};

export default Home;
