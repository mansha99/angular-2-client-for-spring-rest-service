"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this._url = 'http://localhost:8080/players'; // URL to web API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ContactService.prototype.create = function (model) {
        return this.http.post(this._url, JSON.stringify(model), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    //#####################################################################
    ContactService.prototype.getContacts = function (page, size, sort, dir) {
        return this.http.get(this._url, { search: "page=" + page + "&size=" + size + "&sort=" + sort + "," + dir })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ContactService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_2.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_2.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=services.contact.js.map