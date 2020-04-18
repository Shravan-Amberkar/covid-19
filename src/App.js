import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Cards   from './components/Cards';
import  Chart   from './components/Chart';
import  CountryPicker   from './components/CountryPicker';
import  {fetchData}   from './api';
import  covidimg   from './images/covid-img.png';


class App extends Component {
  state = {
    data:{},
    country: '',
  }

  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData})
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData , country:country})

  }
  render (){
    const {data, country} = this.state;
    return (
      <div>
      <div className="img-wrap">
        <img   alt = "asd" src = {covidimg} />
      </div>
    <Cards data = {data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country}/>

    </div>
    )
  }

  }

export default App;
