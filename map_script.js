$(document).ready(function(){
		
		//Load basemap	
		var map = L.map('map').setView([51.0486, -114.0708], 5);
		
		var osm =
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?<a href="http://cloudmade.com">CloudMade</a>',
			maxZoom: 20
		}).addTo(map);
		
						
			var pointStyle = {
			radius: 8,
			fillColor: "#ff7800",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
			};
			
			var point ={
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"properties": {
					"TYPE": "Recycle Depot",
					"NAME": "Deer Valley",
					"ADDRESS": "1221 CANYON MEADOWS DR SE",
					"COMM_CODE": "DRG"
				},
					"geometry": {
						"type": "Point",
						"coordinates": [-114.0708, 51.0486]
					}
				}]
			};
							
			var amenity ={
			"type": "FeatureCollection",
			"features": [{
			 "type": "Feature",
			 "properties": {
				 "TYPE": "Off Leash Dog Area",
				 "NAME": "HAWKWOOD",
				 "ADDRESS": "164 HAWKVIEW MANOR CI NW",
				 "COMM_CODE": "HAW"
			 },
				 "geometry": {
					 "type": "Point",
					 "coordinates": [-113.8111, 52.2681]
				 }
			 },
		
			{
			"type": "Feature",
			"properties": {
				"TYPE": "Off Leash Dog Area",
				"NAME": "FAIRVIEW",
				"ADDRESS": "128 FYFFE RD SE",
				"COMM_CODE": "FAI"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-113.5000, 53.5333]
			}
		},
		{
			"type": "Feature",
			"properties": {
				"TYPE": "Off Leash Dog Area",
				"NAME": "CHARLESWOOD",
				"ADDRESS": "4735 CHARLESWOOD DR NW",
				"COMM_CODE": "CHW"
			},
			"geometry": {
				"type": "Point",
				"coordinates": [-114.4670, 51.1890]
			}
		}]
	};
			

		var amenityLayer = L.geoJson(amenity, {
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, pointStyle);
				},
			onEachFeature: onEachFeature
			}).addTo(map); 
			
			
		function onEachFeature(feature, layer) {
			if (feature.properties && feature.properties.NAME) {
				layer.bindPopup(feature.properties.NAME);
				}
			}
		
		
});
