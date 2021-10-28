import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from "react-map-gl";

mapboxgl.accessToken='pk.eyJ1Ijoic3Zqb25lbDIiLCJhIjoiY2t2YTludnU1MDE3eTJvcDF6aXNpdGN2OSJ9.KqWPhv4dH4yaE_l1OjZhcw'

// { tempMarker &&
// 	<Marker
// 	  longitude={tempMarker.longitude}
// 	  latitude={tempMarker.latitude}>
// 	  <div className="marker temporary-marker"><span></span></div>
// 	</Marker>
// }

// add = () => {
//     var { tempMarker } = this.state
//     this.setState(prevState => ({
//        markers: [...prevState.markers, tempMarker],
//        tempMarker: null
//      }))
// }

class GeoCheck extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			longitude:-72,
			latitude:42,
			zoom: 8
		}
	}

	componentDidMount() {
		
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/satellite-streets-v11',
			center: [this.state.longitude, this.state.latitude],
			zoom: this.state.zoom
		})
	}

	render(){
		return(
			<div>
				
				<div ref={el => this.mapContainer = el} style={{width:'100%',height:'100vh'}} />
			</div>
		)
	}
}

export default GeoCheck;