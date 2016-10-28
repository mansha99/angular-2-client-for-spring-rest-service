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
var ContactList = (function () {
    function ContactList(contactservice) {
        this.contactservice = contactservice;
        this.contacts = [];
        this.errorMessage = "";
        this.page = 0;
        this.size = "4";
        this.sort = "id";
        this.dir = "asc";
        this.totalPages = 0;
        this.numberOfElements = 0;
        this.last = false;
        this.first = true;
    }
    ContactList.prototype.showNext = function (event) {
        this.page++;
        this.getContacts();
    };
    ContactList.prototype.doSort = function (sort) {
        this.page = 0;
        if (this.sort != sort) {
            this.dir = "asc";
        }
        else {
            this.dir = this.dir == "asc" ? "desc" : "asc";
        }
        this.sort = sort;
        this.getContacts();
    };
    ContactList.prototype.showPrevious = function (event) {
        this.page--;
        this.getContacts();
    };
    ContactList.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactList.prototype.getContacts = function () {
        var _this = this;
        this.contactservice.getContacts(this.page, this.size, this.sort, this.dir)
            .subscribe(function (body) {
            _this.contacts = (body.content),
                _this.totalPages = (body.totalPages),
                _this.numberOfElements = (body.numberOfElements),
                _this.last = (body.last),
                _this.first = (body.first);
        }, function (error) { return _this.errorMessage = error; });
    };
    ContactList = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n  <h4>\n  List of Contacts\n  <div class='pull-right'>\n  <a routerLink=\"/new-contact\"><i class='glyphicon glyphicon-plus'> </i></a>\n  </div>\n  </h4>   \n  <div class='alert alert-danger' *ngIf=\"errorMessage !=''\">\n  {{errorMessage}}\n  </div>\n    <table class='table table-striped'>\n    <thead>\n    <tr>    \n        <th>      \n        <a href='#' (click)=\"doSort('id')\">    \n        <i class='glyphicon glyphicon-sort' *ngIf=\"sort =='id'\"></i>\n           Id                            \n        </a>\n        </th>\n        <th>      \n        <a href='#' (click)=\"doSort('name')\">    \n        <i class='glyphicon glyphicon-sort' *ngIf=\"sort =='name'\"></i>\n           Name\n        </a>\n        </th>\n        <th>      \n        <a href='#'  (click)=\"doSort('email')\">    \n        <i class='glyphicon glyphicon-sort' *ngIf=\"sort =='email'\"></i>\n           Email\n        </a>\n        </th>\n        \n        \n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let contact of contacts\">      \n      <td>  {{ contact.id }}</td>\n      <td>  {{ contact.name }}</td>\n      <td>  {{ contact.email }}</td>      \n      </tr>\n      </tbody>\n    </table>\n    <div class='pull-right'>\n        <a href='#' *ngIf=\"!first\" class='btn btn-default' (click)=\"showPrevious()\">\n            <i class='glyphicon glyphicon-chevron-left'></i>\n        </a>\n     <a href='#' *ngIf=\"!last\"  class='btn btn-default' (click)=\"showNext()\">\n            <i class='glyphicon glyphicon-chevron-right'></i>\n        </a>\n    </div>\n  ",
            providers: [services_contact_1.ContactService]
        }), 
        __metadata('design:paramtypes', [services_contact_1.ContactService])
    ], ContactList);
    return ContactList;
}());
exports.ContactList = ContactList;
//# sourceMappingURL=contact-list.js.map