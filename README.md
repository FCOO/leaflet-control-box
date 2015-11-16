# leaflet-control-box
>


## Description
Create Leaflet Control in a box with optional icons and size-toggle

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-control-box.git --save`

## Demo
http://FCOO.github.io/leaflet-control-box/demo/ 

## Usage

    var myLeafletControlBox = new L.Control.Box( options );


### options
<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Defaults</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>position</td>
            <td></td>
            <td>string</td>
            <td>leaflet code for the position of the control</td>
        </tr>
        <tr>
            <td>width</td>
            <td></td>
            <td>number</td>
            <td>The width of the control
		</td>
        </tr>
        <tr>
            <td>height</td>
            <td></td>
            <td>number</td>
            <td>The height of the control</td>
        </tr>
        <tr>
            <td>icon</td>
            <td>"plus"</td>
            <td>string</td>
            <td>The name of the icon shown when the control is closed/hidden.<br>Possible values:<code>plus</code>, <code>plus-box</code>, <code>minus</code>, <code>minus-box</code>, <code>zoom-in</code>, <code>zoom-out</code>, <code>map</code>, <code>clock</code>, <code>list</code>, <code>list2</code>, <code>menu</code>, <code>layers</code>, <code>settings</code></td>
        </tr>
        <tr>
            <td>hideText</td>
            <td>"Hide&nbsp;Box"</td>
            <td>string</td>
            <td>The title for the open/close-button when the control is minimized</td>
        </tr>
        <tr>
            <td>showText</td>
            <td>"Show&nbsp;Box"</td>
            <td>string</td>
            <td>The title for the open/close-button when the control is maximized</td>
        </tr>


        <tr>
            <td>defaultMinimized</td>
            <td>false</td>
            <td>boolean</td>
            <td>If true the control is closed/hidden on load</td>
        </tr>
        <tr>
            <td>onMinimize</td>
            <td>null</td>
            <td>function</td>
            <td>Called when the control is minimized</td>
        </tr>
        <tr>
            <td>onMaximize</td>
            <td>null</td>
            <td>function</td>
            <td>Called when the control is maximized</td>
        </tr>
    </tbody>
</table>

### Methods and attributes
#### userContainer
    myLeafletControlBox.userContainer.innerHTML = "This is the contents of the control";
#### minimize()
	myLeafletControlBox.minimize()
#### maximize()
	myLeafletControlBox.maximize()

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-control-box/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



