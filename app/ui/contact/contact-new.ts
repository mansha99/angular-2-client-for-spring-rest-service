//https://angular.io/docs/ts/latest/guide/server-communication.html
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ContactService } from '../../services/services.contact';
import { Contact } from '../../models/contact-model';

@Component({
    selector: 'contact-new',
    template: `
  <h4>
  New Contact Entry
   <div class='pull-right'>
  <a routerLink="/"><i class='glyphicon glyphicon-arrow-left'> </i></a>
  </div>
  </h4>   
  <contact-form 
  [model]="model" 
  [errors]="errors"
  [message]="message"  
  (onSaved)="doSave($event)"
  ></contact-form>
  `,
    providers: [ContactService]
})
export class ContactNew {
    errors={};
    message: String = "";
    status: String = "";
    model: Contact = new Contact();

    doSave(_model: Contact) {
        this.contactservice.create(_model)
            .subscribe(
            body => {              
                this.model = <any>(body.model),
                this.errors = <any>(body.errors),
                this.message= <any>(body.message)                                    
                this.status= <any>(body.status)                                    
            },
            error => this.message = <any>error);
    }
    constructor(private contactservice: ContactService) { }
    ngOnInit(): void {

    }

}
