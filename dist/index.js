"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var settings_1 = __importDefault(require("./settings"));
var router_1 = __importDefault(require("./router"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // ours plugins
        this.app.set('PORT', settings_1.default.PORT);
    };
    Server.prototype.routes = function () {
        this.app.use(router_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('PORT'), function () { return console.log("Server started on " + settings_1.default.DOMAIN); });
    };
    return Server;
}());
var server = new Server();
server.start();
