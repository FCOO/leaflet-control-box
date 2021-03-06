/****************************************************************************
    leaflet-control-box.js, Create Leaflet Control in a box with optional icons and size-toggle

    (c) 2015, FCOO

    https://github.com/FCOO/leaflet-control-box
    https://github.com/FCOO

****************************************************************************/

(function ($, L/*, window, document, undefined*/) {
    "use strict";

//L.Control.Box = L.Control.extend({
L.Control.Box = L.Control.FontAwesomeButton.extend({
    options: {
        position: 'topleft',

        iconClassName     : '',
        containerClassName: 'leaflet-control-box-container',
        header            : '',
        inclHeader        : true,

        padding:  10    //button-margin
                 + 2    //button-border

                 + 2    //header-padding
                 +16    //header-height
                 + 2    //header-padding
                 + 1    //header-bottom-border

                 + 2    //button-border
                 +10,   //button-margin


        minimized : true,
        onMinimize: null,
        onMaximize: null,
    },

    /************************
    initialize
    ************************/
    initialize: function (options) {
        L.Util.setOptions(this, options);
        this.minimized = !!this.options.minimized;
    },

    /************************
    onAdd
    ************************/
    onAdd: function (map) {

        L.Control.FontAwesomeButton.prototype.onAdd.call(this, map);

        var $container = $(this._container);

        L.DomEvent.on(this._container, 'mousewheel', L.DomEvent.stopPropagation);

        this.$openButton = $container.find('a').addClass('open');
        L.DomEvent.on(this.$openButton[0], 'click', this.maximize, this);

        //Header. Contains icon, span with text and close-icon
        if (this.options.inclHeader){

            var $mainHeader = $('<div/>')
                                .addClass('leaflet-control-box-header')
                                .appendTo( $container );
            L.DomEvent.on($mainHeader[0], 'click', this.minimize, this);

            $('<i/>').addClass('fa '+ this.options.iconClassName).appendTo($mainHeader);

            this.$header = $('<span/>').appendTo( $mainHeader ).text( this.options.header );
            this.$openButton.attr('title', this.options.header );

            $('<i/>')
                .addClass('fa fa-times')
                .appendTo( $mainHeader );
        }

        //Container for the contents
        var $contentContainer =
                $('<div/>')
                    .addClass('leaflet-control-box-content-container')
                    .appendTo(this._container);

        if (this.options.height > 1)
            $contentContainer.height(this.options.height);
        else
            if (this.options.height <= 1){
                $container.css('max-height', 100*this.options.height + '%');

                //Create jquery-scroll-container inside the box
                $contentContainer = $contentContainer.addScrollbar();
            }

        if (this.options.width)
            $contentContainer.width(this.options.width);

        //Set the container as a DOM-element
        this.contentContainer = $contentContainer[0];

        if (!this.options.minimized)
            this.maximize();

        return this._container;
    },



    /************************
    minimize
    ************************/
    minimize: function () {
        this.minimized = true;
        L.DomUtil.removeClass( this._container, 'maximized');

        if (this.options.onMinimize)
            this.options.onMinimize( this );
    },

    /************************
    maximize
    ************************/
    maximize: function () {
        this.minimized = false;
        L.DomUtil.addClass( this._container, 'maximized');
        if (this.options.onMaximize)
            this.options.onMaximize( this );
    },

    /************************
    toggle
    ************************/
    toggle: function () {
        if (this.minimized)
            this.maximize();
        else
            this.minimize();
    }

});


}(jQuery, L, this, document));
