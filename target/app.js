"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var https_1 = __importDefault(require("https"));
var PORT = 8080;
var HOST = "0.0.0.0";
var URL = "https://api.iextrading.com/1.0";
var stock = "AAPL";
var app = express_1.default();
app.get("/", function (req, res) {
    https_1.default.get(URL + "/stock/" + stock + "/book", function (response) {
        var json = "";
        response.on("data", function (data) {
            json += data;
        });
        response.on("end", function () {
            res.send(JSON.stringify(JSON.parse(json)));
        });
    }).on("error", function (e) {
        console.log(e);
    });
});
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
