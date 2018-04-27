import React, {Component} from 'react'
import MapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapGL
          width={700} height={450} longitude={79.8643} 
          latitude={6.9074} zoom={11} 
          mapStyle="https://hfu.github.io/lka1803-bright/style.json" 
         />
      </div>
    );
  }
}

export default App

