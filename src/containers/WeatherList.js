import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import SimpleMap from '../components/SimpleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(values => values.main.temp - 273.15);
    const pressures = cityData.list.map(values => values.main.pressure);
    const humidities = cityData.list.map(values => values.main.humidity);

    const {lat, lon} = cityData.city.coord;
    const {id} = cityData.city;

    return (
      <tr key={id}>
        <td><SimpleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);