import React, {useState, useEffect} from 'react';
import {fetchCountries} from '../api';
import { Form } from "react-bootstrap";



const CountryPicker = ({handleCountryChange}) =>{
const [fetchedCountries , setFetchedCountries] =useState([]);
useEffect(() =>{
  const fetchAPI = async () => {
  setFetchedCountries (await fetchCountries());
  }
  fetchAPI();
}, [setFetchedCountries])
  return(
<div className="countryPicker-wrap shadow">
  <Form>
      <Form.Control as="select" defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)}>
        <option value = "">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </Form.Control>
  </Form>
</div>
  )
}

export default CountryPicker
