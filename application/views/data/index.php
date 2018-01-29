<link rel="stylesheet" href="https://cache.amap.com/lbs/static/main.css"/>
<script src="http://webapi.amap.com/maps?v=1.4.3&key=46ad99f63d2a9a1e6369e7f80d184e89&plugin=AMap.PolyEditor,AMap.CircleEditor"></script>
<script type="text/javascript" 
src="https://webapi.amap.com/maps?v=1.4.2&key=46ad99f63d2a9a1e6369e7f80d184e89"></script>
<style type="text/css">
    #panel {
        position: absolute;
        background-color: white;
        max-height: 90%;
        overflow-y: auto;
        top: 10px;
        left: 18%;
        right: 10px;
        width: 280px;
    }
    #mapContainer{
        left: 18%;
    }
    .sidebar{
        float: left;
        height: 100%;
        width: 18%;
        padding: 20px;
        margin-right: 20px;
        padding-left: 10px;
    }
    textarea.lnglatbox{
        width: 80%;
        height: 70%;
        /*margin-top: 20%;*/
    }
    .sidebar label{
        font-size: 11px;
    }
    .sidebar button{
        font-size: 11px;
        width: 80%;
    }
</style>
<div class='sidebar'>
    <label>please select no less than three points on the map</label>
    <textarea id='lnglatbox' class='lnglatbox' cols="50" rows="40%" placeholder=""></textarea>
    <button onclick="setarea()">area selection is done</button>
    <button onclick="clearpoints()">clear all the selected points</button>
    <div><label id='interestpoints'></label></div>
</div>
<div id="mapContainer"></div>
<div id="panel">
</div>
<script type="text/javascript" src="/static/js/map.js"></script>
 <script type="text/javascript" src="https://webapi.amap.com/demos/js/liteToolbar.js"></script>