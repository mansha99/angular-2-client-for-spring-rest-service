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
var core_1 = require('@angular/core');
var services_contact_1 = require('../../services/services.contact');
var contact_model_1 = require('../../models/contact-model');
var ContactForm = (function () {
    function ContactForm() {
        this.onSaved = new core_1.EventEmitter();
    }
    ContactForm.prototype.doSave = function () {
        this.onSaved.emit(this.model);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', contact_model_1.Contact)
    ], ContactForm.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ContactForm.prototype, "errors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ContactForm.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactForm.prototype, "onSaved", void 0);
    ContactForm = __decorate([
        core_1.Component({
            selector: 'contact-form',
            template: "\n   <div class='alert alert-danger' *ngIf=\"message !=''\">\n  {{message}}\n  </div>   \n  <div class='form-group'>\n    <label>Name</label>\n    <input class='form-control' [(ngModel)]=\"model.name\"  id=\"name\" name=\"name\" />\n    <span class='error' *ngIf=\"errors.name !=''\">{{errors.name}}</span>\n    </div>\n    <div class='form-group'>\n    <label>Email</label>\n    <input class='form-control' [(ngModel)]=\"model.email\"   id=\"email\" name=\"email\"  />\n    <span class='error' *ngIf=\"errors.email !=''\">{{errors.email}}</span>\n    </div>\n    <button type='button' class='btn btn-sm btn-success' (click)=\"doSave()\">Save</button>\n    ",
            providers: [services_contact_1.ContactService]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactForm);
    return ContactForm;
}());
exports.ContactForm = ContactForm;
//# sourceMappingURL=_form.js.map