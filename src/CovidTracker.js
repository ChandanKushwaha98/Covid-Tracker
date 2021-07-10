import { useState, useEffect } from 'react'
import './App.css';
import { fetchCovidData } from './api/fetchCovidData';
import Flag from './components/flag/index';
import Card from './components/card';
import '.'

function App() {
  const [covidData, setCovidData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [country, setCountry] = useState('India');
  const getCovidData = async () => {
    // const storedData = localStorage.getItem(covidData)
    // if (storedData) {
    //   const data = JSON.parse(storedData)
    //   setCovidData(data)
    // } else {
    const data = await fetchCovidData();
    // localStorage.setItem('covidData', data)
    setCovidData(data)
    setIsLoading(false)
    // }

  }
  useEffect(() => {
    getCovidData();
  }, [])
  const getDropdownOptions = () => {
    return Object.keys(covidData).map((item) => {
      return <option>{item}</option>
    })
  }
  if (isLoading) {
    return <div className="Waiting loader">Waiting</div>
  }
  console.log(covidData)

  const changeCountry = (event) => {
    setCountry(event.target.value);
  }
  const getTrackerCards = () => {
    return (<div className="trackerCardsContainer">
      <Card heading="Total Cases" cases={covidData[country].total} color="blue" />
      <Card heading="Active" cases={covidData[country].active} color="red" />
      <Card heading="Deaths" cases={covidData[country].deaths} color="grey" />
      <Card heading="Recovered" cases={covidData[country].recovered} color="green" />
    </div>)
  }
  return (
    <div className="CovidTrackerContainer">
      <div>
        <h2 className="covidTrackerHeading">Covid Tracker</h2>
      </div>
      <div className="mainContent">
        <div className="leftContainer">Map to be implemented in left hand side</div>
        <div className="rightContainer">
          <div className="flag_select">
            <div>
              <Flag countryInfo={covidData[country].countryInfo} />
            </div>
            <div>
              <select value={country} onChange={changeCountry}>
                {getDropdownOptions()}
              </select>
            </div>
          </div>
          {getTrackerCards()}
        </div>
      </div>
    </div>
  );
}

export default App;
