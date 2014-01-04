;(function( $, window, document, undefined){

  $.fn.responsive_util = function( options ) {
    var settings = $.extend(true, {}, $.fn.responsive_util.defaults, options )

    $('head').append(settings.styles);
    $('body').append(settings.nodes);

    if(settings.timer) {
      setTimeout($.fn.responsive_util.hide, settings.timer)
    }

    console.log('responsive_util: loaded');
    return this;  

  };

  $.fn.responsive_util.defaults = {
    media: [{name:'tablet',min:35,max:70,color:'red'},{name:'phone',max:34.99,color:'black'},{name:'screen',min:70.01,color:'blue'}],
    colors: [],
    size: 0.5,
    nodes: "<div id='responsive-check'><div class='msg' id='screen'><p>screen</p></div><div class='msg' id='tablet'><p>tablet</p></div><div class='msg' id='phone'><p>phone</p></div></div>",
    styles: "<style>#responsive-check{visibility: hidden;display: none;}.msg {visibility: hidden;display:none;position: absolute;z-index: 100000000000000000000;right: 1em;top: 1em;width: 4em;height: 4em;text-align: center;border: 3px solid black;background-color: white;color: black;font-size: 0.5em;}@media only screen and (max-width: 34.99em){#responsive-check{visibility: visible;display: block;}#phone {visibility: visible;display: block;}}@media only screen and (min-width: 35em) and (max-width: 70em){/* Style adjustments for viewports that meet the condition */#responsive-check{visibility: visible;display: block;}#tablet {visibility: visible;display: block;border: 3px solid red;background-color: white;color: red;}}@media only screen and (min-width: 70.01em) {#responsive-check{visibility: visible;display: block;}#screen {visibility: visible;display: block;border: 3px solid blue;background-color: white;color: blue;}}</style>"
  }

  $.fn.responsive_util.hide = function(){ 
    $('#responsive-check').animate({ opacity: '0', visibility: 'hidden', display: 'none' }, 300)
  }

  $.fn.responsive_util.show = function(){ 
    $('#responsive-check').animate({ opacity: '1', visibility: 'visible', display: 'block' }, 600)
  }

})( jQuery, window, document );