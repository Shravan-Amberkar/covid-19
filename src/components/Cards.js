import React from 'react';
import CountUp from 'react-countup';

const Cards = (props) =>{
  const data = props.data

if (!data.confirmed){
  return 'Loading...'
}
  return(
    <div className="card-wrap floating">
    <div className="row m-0">
    <div className="col-12 col-lg-4 col-xl-4">
    <div className="card ">
    <div className="card-body">
    <div className="card-t-1"> <span className="card-infected-span">Infected</span></div>
    <div className="card-t-2"> <CountUp start = {0} end = {data.confirmed.value} duration = {2.5} seperator = "," /> </div>
    <div className="card-t-3"> {new Date(data.lastUpdate).toDateString() }   </div>
    <div className="card-t-4">  Number of  active cases of <br /> COVID-19   </div>
    </div>
      <div className="card-infected-footer">  </div>
    </div>
    </div>
    <div className="col-12 col-lg-4 col-xl-4">
    <div className="card ">
    <div className="card-body">
    <div className="card-t-1"> <span className="card-recovered-span">Recovered</span>   </div>
    <div className="card-t-2"> <CountUp start = {0} end = {data.recovered.value} duration = {2.5} seperator = "," /> </div>
    <div className="card-t-3"> {new Date(data.lastUpdate).toDateString() }   </div>
    <div className="card-t-4">  Number of  recovered cases of <br /> COVID-19   </div>
    </div>
      <div className="card-recovered-footer">  </div>
    </div>
    </div>
    <div className="col-12 col-lg-4 col-xl-4">
    <div className="card ">
    <div className="card-body">
    <div className="card-t-1">  <span className="card-deaths-span">Deaths</span> </div>
    <div className="card-t-2"> <CountUp start = {0} end = {data.deaths.value} duration = {2.5} seperator = "," /> </div>
    <div className="card-t-3"> {new Date(data.lastUpdate).toDateString() }   </div>
    <div className="card-t-4">  Number of  death cases of <br /> COVID-19   </div>
    </div>
      <div className="card-deaths-footer ">  </div>
    </div>
    </div>


    </div>
    </div>



)
}

export default Cards
