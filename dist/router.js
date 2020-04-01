"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vk_1 = __importDefault(require("./controllers/vk"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.routes();
    }
    Routes.prototype.routes = function () {
        this.router.get('/', vk_1.default.getCode);
        this.router.get('/authorization', vk_1.default.redirectToToken);
    };
    return Routes;
}());
var routes = new Routes();
exports.default = routes.router;
