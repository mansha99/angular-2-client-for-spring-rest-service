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
//https://angular.io/docs/ts/latest/guide/server-communication.html
var core_1 = require('@angular/core');
var services_contact_1 = require('../../services/services.contact');
var contact_model_1 = require('../../models/contact-model');
var ContactNew = (function () {
    function ContactNew(contactservice) {
        this.contactservice = contactservice;
        this.errors = {};
        this.message = "";
        this.status = "";
        this.model = new contact_model_1.Contact();
    }
    ContactNew.prototype.doSave = function (_model) {
        var _this = this;
        this.contactservice.create(_model)
            .subscribe(function (body) {
            _this.model = (body.model),
                _this.errors = (body.errors),
                _this.message = (body.message);
            _this.status = (body.status);
        }, function (error) { return _this.message = error; });
    };
    ContactNew.prototype.ngOnInit = function () {
    };
    ContactNew = __decorate([
        core_1.Component({
            selector: 'contact-new',
            template: "\n  <h4>\n  New Contact Entry\n   <div class='pull-right'>\n  <a routerLink=\"/\"><i class='glyphicon glyphicon-arrow-left'> </i></a>\n  </div>\n  </h4>   \n  <contact-form \n  [model]=\"model\" \n  [errors]=\"errors\"\n  [message]=\"message\"  \n  (onSaved)=\"doSave($event)\"\n  ></contact-form>\n  ",
            providers: [services_contact_1.ContactService]
        }), 
        __metadata('design:paramtypes', [services_contact_1.ContactService])
    ], ContactNew);
    return ContactNew;
}());
exports.ContactNew = ContactNew;
//# sourceMappingURL=contact-new.js.map