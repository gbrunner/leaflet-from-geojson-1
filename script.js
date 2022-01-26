var map = L.map('mapid').setView([39.75621,-104.99404], 4);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature ={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurants": 270
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.44975280761719,
          38.67639739080184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "brown"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.34538269042969,
          38.72569753630937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": 180
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.29319763183592,
          38.67746949445934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Shepard Woods",
        "Review": "5 Star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.42572021484374,
          38.61526094178415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurants": "Williams Ave"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.31929016113281,
          38.62223527691723
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>Hello world! I'm marker 1</b><br>I am a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "RiverName": "Mississippi River"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.37216186523438,
            38.33734763569314
          ],
          [
            -90.3460693359375,
            38.38472766885085
          ],
          [
            -90.29937744140625,
            38.42884932888259
          ],
          [
            -90.27328491210938,
            38.486919673341646
          ],
          [
            -90.26229858398436,
            38.5213096674994
          ],
          [
            -90.22247314453124,
            38.57393751557591
          ],
          [
            -90.18402099609374,
            38.61472442637688
          ],
          [
            -90.17578124999999,
            38.64798079297792
          ],
          [
            -90.18402099609374,
            38.666211605156704
          ],
          [
            -90.2032470703125,
            38.701587580994214
          ],
          [
            -90.18402099609374,
            38.74337300148123
          ],
          [
            -90.16754150390625,
            38.76907496033498
          ],
          [
            -90.12359619140625,
            38.807610542357594
          ],
          [
            -90.12908935546874,
            38.82473078093276
          ],
          [
            -90.1702880859375,
            38.826870521380634
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var states = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Forest Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30109405517577,
              38.64664010894782
            ],
            [
              -90.30418395996094,
              38.6329636990003
            ],
            [
              -90.27053833007812,
              38.630013542950316
            ],
            [
              -90.26676177978516,
              38.63242731602095
            ],
            [
              -90.26779174804688,
              38.638327308061875
            ],
            [
              -90.27122497558594,
              38.64208159560713
            ],
            [
              -90.28324127197266,
              38.64583568648869
            ],
            [
              -90.30109405517577,
              38.64664010894782
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tower Grove",
        "Has Baseball Field": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.26907920837402,
              38.6052006101789
            ],
            [
              -90.24255752563475,
              38.603054223536205
            ],
            [
              -90.2413558959961,
              38.60721278935162
            ],
            [
              -90.26839256286621,
              38.60982853792072
            ],
            [
              -90.26907920837402,
              38.6052006101789
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Carondelet Park",
        "Has Baseball Field": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.25963783264159,
              38.55700884254432
            ],
            [
              -90.257728099823,
              38.55908948904362
            ],
            [
              -90.25519609451294,
              38.56028079984389
            ],
            [
              -90.27002334594727,
              38.567747016416256
            ],
            [
              -90.27285575866699,
              38.56393850398323
            ],
            [
              -90.25963783264159,
              38.55700884254432
            ]
          ]
        ]
      }
    }
  ]
};

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties["Has Baseball Field"]) {
            case 'Yes': return {color: "#990000"};
            case 'No':   return {color: "#000099"};
        }
    }
}).addTo(map);
