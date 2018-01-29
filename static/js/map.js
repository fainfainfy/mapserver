var lineArr = [];

var marker, map = new AMap.Map("mapContainer", {
        resizeEnable: true,
        center:[116.39, 39.9],
        lang:'en'
    });
AMap.service(["AMap.PlaceSearch"], function() {
    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
        pageSize: 5,
        pageIndex: 1,
        city: "010", //城市
        map: map
        // panel: "result"
    });
    // placeSearch.search('北京人民大会堂', function(status, result) {
    // });

});

map.on('click', function(e){
    var lat = e.lnglat.lat;
    var lng = e.lnglat.lng;
    addMarker(lng, lat);
    var text = document.getElementById('lnglatbox').value;
    text = text + lng + ','+lat+"\n";
    document.getElementById('lnglatbox').value = text;
});

function updateMarker(lat, lng) {
    // 自定义点标记内容
    var markerContent = document.createElement("div");

    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = "Hi，我换新装备啦！";
    markerContent.appendChild(markerSpan);

    marker.setContent(markerContent); //更新点标记内容
    marker.setPosition([lng, lat]); //更新点标记位置
}

 function addMarker(lng, lat) {
    lineArr.push([lng, lat]);
    marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [lng, lat]
    });
    marker.setMap(map);
}

function clearpoints()
{
    map.clearMap(); 
    document.getElementById("lnglatbox").value='';
    lineArr = [];
}

function setarea()
{
    var editor = {};
    editor._polygon = (function(){
        var arr = lineArr;
        return new AMap.Polygon({
            map : map,
            path:arr,
            strokeColor:"#0000ff",
            strokeOpacity:1,
            strokeWeidht:3,
            fillColor:"#f5deb3",
            fillOpacity:0.35
        });
    })();
    map.setFitView();
    var requeststr = '';
    for (x in lineArr){
        if(requeststr == ''){
            requeststr = lineArr[x]['lng'] +','+ lineArr[x]['lat'];
        }else{
            requeststr = requeststr + '|'+ lineArr[x]['lng'] +','+lineArr[x]['lat'];
        }
    }
    getLabelsGet('/data/countfavor', requeststr);
}

var xmlHttp;
function GetXmlHttpObject(){
    if(window.XMLHttpRequest){
        var xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xmlHttp;
}

function getLabelsGet(url, requeststr){
    xmlHttp = GetXmlHttpObject();
    if (xmlHttp == null){
        alert('not support ajax');
    }
    // var id = document.getElementById('id').value;
    // var url = "/data/countfavor";
    url = url +'?parm=' + requeststr;
    xmlHttp.open('GET', url, true);
    xmlHttp.onreadystatechange = getOKGet;
    xmlHttp.send();
}

function getOKGet(){
    if(xmlHttp.readState==1||xmlHttp.readyState==2||xmlHttp.readyState==3){

    }
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var d = xmlHttp.responseText;
        document.getElementById('interestpoints').innerHTML="the number of POIs:" + d;
    }
}