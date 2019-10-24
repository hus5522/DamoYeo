var NearbySearch = require('./NearbySearch.js');
var GetDetailInfo = require('./GetDetailInfo.js');

function main(lat, lng, radius, type) {
    console.time('main');
    console.log(NearbySearch.nearbySearch(lat,lng,radius,type));
    //console.log(GetDetailInfo.getDetailInfo(37.547765, 127.06877,"케이이스케이프"));
    console.timeEnd('main');
}
function test() {
    console.time('test');
    console.log(GetDetailInfo.getDetailInfo(37.564174, 126.981608,"롯데백화점 에비뉴엘"));
    console.timeEnd('test');
}
//test();
main(37.5502596,127.0709503, 500, 50);

//main(37.5637399, 126.9838655, 500, 22);
//main(37.5637399, 126.9838655, 500, 23);
//main(37.5637399, 126.9838655, 500, 24);
//main(37.5637399, 126.9838655, 500, 25);
//main(37.5637399, 126.9838655, 500, 30);
//main(37.5637399, 126.9838655, 500, 30);
//main(37.5637399, 126.9838655, 500, 40);
//main(37.5637399, 126.9838655, 500, 50);
