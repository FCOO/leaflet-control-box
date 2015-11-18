/****************************************************************************
	leaflet-control-box.js, Create Leaflet Control in a box with optional icons and size-toggle

	(c) 2015, FCOO

	https://github.com/FCOO/leaflet-control-box
	https://github.com/FCOO

****************************************************************************/

;(function (L, window, document, undefined) {
	"use strict";

L.Control.Box = L.Control.extend({
	options: {
		position: 'bottomright',
		width: 150,
		height: 150,
		hideText: 'Hide Box',
		showText: 'Show Box',
		icon		: 'plus',
		defaultMinimized: false,
		onMinimize: null,
		onMaximize: null,
	},


	initialize: function (options) {
		L.Util.setOptions(this, options);
	},

	onAdd: function (map) {
		this._map = map;

		//Creating the container and stopping events from spilling through to the main map.
		this._container = L.DomUtil.create('div', 'leaflet-control-box maximized');
		this._container.style.width = this.options.width + 'px';
		this._container.style.height = this.options.height + 'px';
		L.DomEvent.disableClickPropagation(this._container);
		L.DomEvent.on(this._container, 'mousewheel', L.DomEvent.stopPropagation);

		//Create the inner container
		this.userContainer = L.DomUtil.create('div', 'leaflet-control-box-container', this._container);

		this._maximized = false;

		this._button = L.DomUtil.create('a', 'leaflet-control-box-button icon-'+this.options.icon, this._container);
		this._button.innerHTML = '';
		this._button.href = '#';
		this._button.title = this.options.hideText;
		var stop = L.DomEvent.stopPropagation;
		L.DomEvent
			.on(this._button, 'click', stop)
			.on(this._button, 'mousedown', stop)
			.on(this._button, 'dblclick', stop)
			.on(this._button, 'click', L.DomEvent.preventDefault)
			.on(this._button, 'click', this._buttonClicked, this);

		return this._container;
	},

	addTo: function (map) {
		L.Control.prototype.addTo.call(this, map);
		if (this.options.defaultMinimized)
		  this.minimize();
		else
		  this.maximize();
		return this;
	},

	_buttonClicked: function () {
		if (this._maximized)
			this.minimize();
		else
			this.maximize();
	},

	minimize: function () {
		this._container.style.width = '19px';
		this._container.style.height = '19px';
		this._button.title = this.options.showText;
		L.DomUtil.removeClass( this._container, 'maximized');
		this._maximized = false;

		if (this.options.onMinimize)
			this.options.onMinimize( this );
	},

	maximize: function () {
		this._container.style.width = this.options.width + 'px';
		this._container.style.height = this.options.height + 'px';
		this._button.title = this.options.hideText;
		L.DomUtil.addClass( this._container, 'maximized');
		this._maximized = true;

		if (this.options.onMaximize)
			this.options.onMaximize( this );
	}
});

}(L, this, document));



