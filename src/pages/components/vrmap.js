import React from 'react';
import mapboxgl from 'mapbox-gl';
import './mapstyles.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibWVhYWdhbiIsImEiOiJja2dvOWk5NjkwOTBoMzJwZ25ybG9sZGJzIn0.0h6wVk1ikA7CPcqnQnPfGw';

class VRMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.8234, 
      lat: 45.4300,
      zoom: 17
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
     
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default VRMap 