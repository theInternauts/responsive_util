;(function( $, window, document, undefined){
    var setMediaQueries = function(media){
        console.log('QUERY | ' + media);
    };
    $.fn.responsive_util.defaults = {
        media: [{name:'tablet',min:35,max:70,color:'red'},{name:'phone',max:34.99,color:'black'},{name:'screen',min:70.01,color:'blue'}],
        colors: [],
        size: 0.5,
        nodes: "<div id='responsive-check'><div class='msg' id='screen'><p>screen</p></div><div class='msg' id='tablet'><p>tablet</p></div><div class='msg' id='phone'><p>phone</p></div></div>",
        styles: "<style>#responsive-check{visibility: hidden;display: none;}.msg {visibility: hidden;display:none;position: absolute;z-index: 100000000000000000000;right: 1em;top: 1em;width: 4em;height: 4em;text-align: center;border: 3px solid black;background-color: white;color: black;font-size: 0.5em;}@media only screen and (max-width: 34.99em){#responsive-check{visibility: visible;display: block;}#phone {visibility: visible;display: block;}}@media only screen and (min-width: 35em) and (max-width: 70em){/* Style adjustments for viewports that meet the condition */#responsive-check{visibility: visible;display: block;}#tablet {visibility: visible;display: block;border: 3px solid red;background-color: white;color: red;}}@media only screen and (min-width: 70.01em) {#responsive-check{visibility: visible;display: block;}#screen {visibility: visible;display: block;border: 3px solid blue;background-color: white;color: blue;}}</style>"
    };

    $.fn.responsive_util = function() {
        
        //I'll incorporate this OPTIONS object later.
        var options = {};
        var nodes = "<div id='responsive-check'><div class='msg' id='screen'><p>screen</p></div><div class='msg' id='tablet'><p>tablet</p></div><div class='msg' id='phone'><p>phone</p></div></div>";
        var styles = "<style>#responsive-check{visibility: hidden;display: none;}.msg {visibility: hidden;display:none;position: absolute;z-index: 100000000000000000000;right: 1em;top: 1em;width: 4em;height: 4em;text-align: center;border: 3px solid black;background-color: white;color: black;font-size: 0.5em;}@media only screen and (max-width: 34.99em){#responsive-check{visibility: visible;display: block;}#phone {visibility: visible;display: block;}}@media only screen and (min-width: 35em) and (max-width: 70em){/* Style adjustments for viewports that meet the condition */#responsive-check{visibility: visible;display: block;}#tablet {visibility: visible;display: block;border: 3px solid red;background-color: white;color: red;}}@media only screen and (min-width: 70.01em) {#responsive-check{visibility: visible;display: block;}#screen {visibility: visible;display: block;border: 3px solid blue;background-color: white;color: blue;}}</style>";
        $('body').append(nodes);
        $('head').append(styles);

        console.log('responsive_util: loaded');
        return this;  

  };
})( jQuery, window, document );
