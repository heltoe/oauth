"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = __importDefault(require("../../settings"));
var Vk = /** @class */ (function () {
    function Vk(client_id, client_secret, redirectUri, display) {
        this.baseUrlAuthorize = 'https://oauth.vk.com/authorize?';
        this.baseUriToken = 'https://oauth.vk.com/access_token?';
        this.baseUriMethods = 'https://api.vk.com/method/';
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.redirectUri = redirectUri;
        this.display = display;
        this.code = '';
        this.token = '';
        this.userId = '';
    }
    Vk.prototype.authorization = function () {
        return this.baseUrlAuthorize + "scope=email&client_id=" + this.client_id + "&display=" + this.display + "&redirect_uri=" + this.redirectUri + "/authorization&response_type=code&v=5.103&revoke=1";
    };
    Vk.prototype.getToken = function () {
        return this.baseUriToken + "client_id=" + this.client_id + "&client_secret=" + this.client_secret + "&redirect_uri=" + this.redirectUri + "/authorization&code=" + this.code;
    };
    Vk.prototype.getUser = function () {
        return this.baseUriMethods + "users.get?user_id=" + this.userId + "&fields=photo_50,photo_100,photo_200_orig,photo_200,photo_400_orig,photo_max,photo_max_orig,city,sex,bdate,country&access_token=" + this.token + "&v=5.52";
    };
    // 
    Vk.prototype.setCode = function (code) {
        this.code = code;
    };
    Vk.prototype.setToken = function (token) {
        this.token = token;
    };
    Vk.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    return Vk;
}());
var redirectUri = 'http://localhost:3000';
var vk = new Vk(settings_1.default.oauth.vk.idApp, settings_1.default.oauth.vk.secretKey, redirectUri, 'page');
exports.default = vk;
