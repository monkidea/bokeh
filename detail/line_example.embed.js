console.log("embed.js");

(function(global) {

    var host = "/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "line_example"}, "doc": null, "dimension": 0, "id": "835e7202-1fa0-4373-a128-b4417d88ae27"}, "type": "Grid", "id": "835e7202-1fa0-4373-a128-b4417d88ae27"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3"}, {"type": "DataRange1d", "id": "393ce080-1272-4ca7-bbbd-8584be936b63"}], "dimensions": ["width", "height"], "id": "f773b018-d2f9-42cb-b107-7c7cc7163b64"}, "type": "ZoomTool", "id": "f773b018-d2f9-42cb-b107-7c7cc7163b64"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3"}, {"type": "DataRange1d", "id": "393ce080-1272-4ca7-bbbd-8584be936b63"}], "dimensions": ["width", "height"], "doc": null, "id": "988e95a7-a87f-4cd2-b6e6-bd05c930e8e9"}, "type": "PanTool", "id": "988e95a7-a87f-4cd2-b6e6-bd05c930e8e9"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "672b51fb-ec4c-4ac3-80b9-26fc2e1c417c"}, "columns": ["x"]}], "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3", "doc": null}, "type": "DataRange1d", "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "672b51fb-ec4c-4ac3-80b9-26fc2e1c417c"}, "columns": ["y"]}], "id": "393ce080-1272-4ca7-bbbd-8584be936b63", "doc": null}, "type": "DataRange1d", "id": "393ce080-1272-4ca7-bbbd-8584be936b63"}, {"attributes": {"plot": {"type": "Plot", "id": "line_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "f99cd906-2587-46cb-925e-d9469c22c107", "dimension": 0}, "type": "LinearAxis", "id": "f99cd906-2587-46cb-925e-d9469c22c107"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "393ce080-1272-4ca7-bbbd-8584be936b63"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "f99cd906-2587-46cb-925e-d9469c22c107"}, {"type": "LinearAxis", "id": "d84d8124-cfeb-498c-9db4-bcaee3572bf4"}, {"type": "Grid", "id": "835e7202-1fa0-4373-a128-b4417d88ae27"}, {"type": "Grid", "id": "48bdfdeb-8087-40ed-b028-d4521d81c029"}, {"type": "GlyphRenderer", "id": "17fcdb3e-8de3-46f8-8a97-a17329b72e77"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "line_example", "tools": [{"type": "PanTool", "id": "988e95a7-a87f-4cd2-b6e6-bd05c930e8e9"}, {"type": "ZoomTool", "id": "f773b018-d2f9-42cb-b107-7c7cc7163b64"}, {"type": "ResizeTool", "id": "8207852b-0842-4d1a-a83b-a3c2c0f69624"}], "canvas_width": 600}, "type": "Plot", "id": "line_example"}, {"attributes": {"plot": {"type": "Plot", "id": "line_example"}, "id": "8207852b-0842-4d1a-a83b-a3c2c0f69624", "doc": null}, "type": "ResizeTool", "id": "8207852b-0842-4d1a-a83b-a3c2c0f69624"}, {"attributes": {"plot": {"type": "Plot", "id": "line_example"}, "doc": null, "dimension": 1, "id": "48bdfdeb-8087-40ed-b028-d4521d81c029"}, "type": "Grid", "id": "48bdfdeb-8087-40ed-b028-d4521d81c029"}, {"attributes": {"plot": {"type": "Plot", "id": "line_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "d84d8124-cfeb-498c-9db4-bcaee3572bf4", "dimension": 1}, "type": "LinearAxis", "id": "d84d8124-cfeb-498c-9db4-bcaee3572bf4"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.15839802440721498, 0.31279660702222717, 0.45929728922297797, 0.5942010289717106, 0.7141015990967496, 0.815971592199161, 0.8972388606192122, 0.9558514614057608, 0.9903294664725019, 0.9998023297700656, 0.9840308679784207, 0.9434132997221345, 0.8789751908224336, 0.7923435594615744, 0.6857057950864132, 0.5617544283207707, 0.4236191464085279, 0.27478777075102506, 0.11901819180190486, -0.03975651509692564, -0.19752739717795278, -0.35031084756382447, -0.4942491886167231, -0.6257080756605602, -0.7413682616986181, -0.8383094061302768, -0.9140838113540347, -0.966778225458037, -0.9950621505224275, -0.998221436781933, -0.9761763144190507, -0.929483407697387, -0.8593216805796612, -0.7674626686939078, -0.6562257492703756, -0.528419578452619, -0.3872711746506408, -0.23634443853290504, -0.079450166971714, 0.07945016697171439, 0.23634443853290543, 0.38727117465064126, 0.5284195784526193, 0.6562257492703759, 0.7674626686939079, 0.8593216805796613, 0.9294834076973871, 0.976176314419051, 0.9982214367819331, 0.9950621505224274, 0.966778225458037, 0.9140838113540342, 0.8383094061302766, 0.7413682616986179, 0.6257080756605592, 0.4942491886167231, 0.35031084756382413, 0.19752739717795192, 0.03975651509692613, -0.11901819180190482, -0.27478777075102584, -0.42361914640852905, -0.5617544283207707, -0.6857057950864135, -0.7923435594615749, -0.8789751908224336, -0.9434132997221346, -0.9840308679784208, -0.9998023297700656, -0.9903294664725019, -0.9558514614057606, -0.8972388606192118, -0.815971592199161, -0.7141015990967494, -0.5942010289717097, -0.4592972892229782, -0.31279660702222695, -0.15839802440721423, -4.898587196589413e-16], "x": [0.0, 0.1590679824602427, 0.3181359649204854, 0.47720394738072813, 0.6362719298409708, 0.7953399123012135, 0.9544078947614563, 1.1134758772216988, 1.2725438596819416, 1.4316118421421844, 1.590679824602427, 1.7497478070626697, 1.9088157895229125, 2.0678837719831553, 2.2269517544433977, 2.3860197369036404, 2.5450877193638832, 2.704155701824126, 2.863223684284369, 3.022291666744611, 3.181359649204854, 3.3404276316650967, 3.4994956141253395, 3.6585635965855823, 3.817631579045825, 3.9766995615060674, 4.135767543966311, 4.294835526426553, 4.453903508886795, 4.6129714913470385, 4.772039473807281, 4.931107456267524, 5.0901754387277665, 5.249243421188009, 5.408311403648252, 5.567379386108494, 5.726447368568738, 5.88551535102898, 6.044583333489222, 6.2036513159494655, 6.362719298409708, 6.521787280869951, 6.680855263330193, 6.839923245790436, 6.998991228250679, 7.158059210710921, 7.317127193171165, 7.476195175631407, 7.63526315809165, 7.7943311405518925, 7.953399123012135, 8.112467105472378, 8.271535087932621, 8.430603070392863, 8.589671052853106, 8.74873903531335, 8.90780701777359, 9.066875000233834, 9.225942982694077, 9.385010965154319, 9.544078947614562, 9.703146930074805, 9.862214912535048, 10.02128289499529, 10.180350877455533, 10.339418859915776, 10.498486842376018, 10.65755482483626, 10.816622807296504, 10.975690789756747, 11.134758772216989, 11.293826754677232, 11.452894737137475, 11.611962719597717, 11.77103070205796, 11.930098684518203, 12.089166666978445, 12.248234649438688, 12.407302631898931, 12.566370614359172]}, "id": "672b51fb-ec4c-4ac3-80b9-26fc2e1c417c"}, "type": "ColumnDataSource", "id": "672b51fb-ec4c-4ac3-80b9-26fc2e1c417c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "line_example"}], "id": "266151ac-d665-4525-8619-d922556308fb"}, "type": "PlotContext", "id": "266151ac-d665-4525-8619-d922556308fb"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "672b51fb-ec4c-4ac3-80b9-26fc2e1c417c"}, "doc": null, "id": "17fcdb3e-8de3-46f8-8a97-a17329b72e77", "xdata_range": {"type": "DataRange1d", "id": "97edd8be-6365-4549-b3b0-8df057c3f3c3"}, "ydata_range": {"type": "DataRange1d", "id": "393ce080-1272-4ca7-bbbd-8584be936b63"}, "glyphspec": {"line_color": {"value": "#0000FF"}, "fill_color": "#0000FF", "type": "line", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "name": "line_example"}, "nonselection_glyphspec": {"line_color": {"value": "#0000FF"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "GlyphRenderer", "id": "17fcdb3e-8de3-46f8-8a97-a17329b72e77"}];
    var modeltype = "PlotContext";
    var elementid = "1e9299a6-8b69-44fd-9a34-87641fc65544";
    var plotID = "line_example";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));
