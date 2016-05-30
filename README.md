# leaflet-control-box
>


## Description
Create Leaflet Control in a box with optional icons and size-toggle

Also supports `position: "topcenter"` and `position: "bottomcenter"` ([fcoo/leatlet-control-topcenter](https://github.com/FCOO/leaflet-control-topcenter))

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-control-box.git --save`

## Demo
http://FCOO.github.io/leaflet-control-box/demo/ 

## Usage

    var myLeafletControlBox = new L.Control.Box( options );


### options
| Option | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| position | string | `"topright"` | leaflet code for the position of the control.<br>Also supports `"topcenter"` and `"bottomcenter"` |
| width | number | | The width of the control |
| height | number  | | The height of the control |
| icon | string | `"plus"` | The name of the icon shown when the control is closed/hidden.<br>Possible values:`"plus"`, `"plus-box"`, `"minus"`, `"minus-box"`, `"zoom-in"`, `"zoom-out"`, `"map"`, `"clock"`, `"list"`, `"list2"`, `"menu"`, `"layers"`, `"settings"` |
| hideText | string | `"Hide Box"` | The title for the open/close-button when the control is minimized |
| showText | string | `"Show Box"` | The title for the open/close-button when the control is maximized |
| defaultMinimized | boolean | false | If true the control is closed/hidden on load |
| onMinimize | function | null | Called when the control is minimized |
| onMaximize | function | null | Called when the control is maximized |

### Methods and attributes
#### userContainer
    myLeafletControlBox.userContainer.innerHTML = "This is the contents of the control";
#### minimize()
	myLeafletControlBox.minimize()
#### maximize()
	myLeafletControlBox.maximize()

#### setDim( width, height )

	myLeafletControlBox.setDim( 200, 30 );

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-control-box/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt)
