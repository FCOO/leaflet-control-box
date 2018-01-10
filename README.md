# leaflet-control-box
>


## Description
Create Leaflet Control in a box with optional icons and size-toggle

Support scrolling contents using [jquery-scroll-container](https://github.com/FCOO/jquery-scroll-container)

Also supports `position: "topcenter"` and `position: "bottomcenter"` using [fcoo/leatlet-control-topcenter](https://github.com/FCOO/leaflet-control-topcenter)

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-control-box.git --save`

## Demo
http://FCOO.github.io/leaflet-control-box/demo/ 

## Usage

    var myLeafletControlBox = new L.Control.Box( options );


### options
| Id | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| `position` | string | `"topleft"` | leaflet code for the position of the control.<br>Also supports `"topcenter"` and `"bottomcenter"` |
| `width` | number | `0` | The width of the control. If `{width: 0}` the width of the control is given by the content added |
| `height` | number  | | The height of the control.<br>`height = 0`: The height of the control is given by the content of the control<br>`height > 1`: The height is set to `options.height`<br>`height <= 1`: The maximum height of the control is the fraction of the height of the map and the content is scrolling. **NOTE** Scrolling contents only available for `position:'"topLeft"'` or `position:"topRight"` |
| `iconClassName` | string | `""` | The [Fontawesome](http://fontawesome.io/) class-name for the icon |
| `minimized` | boolean | `false` | If true the control is minimized when created |
| `onMinimize` | function | `null` | Called when the control is minimized |
| `onMaximize` | function | `null` | Called when the control is maximized |

### Methods and attributes
#### contentContainer
    myLeafletControlBox.contentContainer.innerHTML = "This is the contents of the control";
#### minimize()
	myLeafletControlBox.minimize()
#### maximize()
	myLeafletControlBox.maximize()

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-control-box/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt)
