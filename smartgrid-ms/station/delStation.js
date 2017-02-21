'use strict';
const rest = require('rest');
const mime = require('rest/interceptor/mime');

const {SMARTGRID_MS_SERVICE_HOST = "10.0.3.31", SMARTGRID_MS_SERVICE_PORT = "8010"} = process.env;
this._httpRequest = rest;

var url = `http://${SMARTGRID_MS_SERVICE_HOST}:${SMARTGRID_MS_SERVICE_PORT}/lessees/lesseeID/stations/stationID`;
var options = {
    method: "DELETE",
    path: url,
    // entity: {
    //     lesseeID: "lesseeID",
    //     stationID: "stationID"
    // }
};
let request = this._httpRequest.wrap(mime, {mime: 'application/json'});
request(options).then(response => {
//    let {errcode, errmsg} = response.entity;
    console.log(response.entity);
});

