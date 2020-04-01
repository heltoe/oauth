"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var settings_1 = __importDefault(require("../../settings"));
var Instagramm = /** @class */ (function () {
    function Instagramm(client_id, client_secret, redirect_uri) {
        this.client_id = client_id;
        this.redirect_uri = redirect_uri;
        this.client_secret = client_secret;
        this.baseUrlAuthorize = 'https://api.instagram.com/oauth/authorize/?';
        this.baseUriToken = 'https://api.instagram.com/oauth/access_token/?';
        this.code = '';
        this.token = '';
    }
    Instagramm.prototype.authorization = function () {
        return this.baseUrlAuthorize + "?client_id=" + this.client_id + "&scope=user_profile&redirect_uri=" + this.redirect_uri + "&response_type=code";
    };
    Instagramm.prototype.getToken = function () {
        return this.baseUriToken + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret + "&grant_type=authorization_code&redirect_uri=" + this.redirect_uri + "&code=" + this.code;
    };
    Instagramm.prototype.clientTest = function () {
        return this.baseUrlAuthorize + "?client_id=" + this.client_id + "&redirect_uri=" + this.redirect_uri + "&response_type=token";
    };
    // 
    Instagramm.prototype.setCode = function (code) {
        this.code = code;
    };
    Instagramm.prototype.setToken = function (token) {
        this.token = token;
    };
    return Instagramm;
}());
var redirectUri = 'http://localhost:3000';
var instagram = new Instagramm(settings_1.default.oauth.instagram.idApp, settings_1.default.oauth.instagram.secretKey, redirectUri);
exports.default = instagram;
