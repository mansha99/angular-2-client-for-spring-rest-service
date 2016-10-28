import { Component, Input,Output,EventEmitter } from '@angular/core';
import { ContactService } from '../../services/services.contact';
import { Contact } from '../../models/contact-model';

@Component({
  selector: 'contact-form',
  template: `
   <div class='alert alert-danger' *ngIf="message !=''">
  {{message}}
  </div>   
  <div class='form-group'>
    <label>Name</label>
    <input class='form-control' [(ngModel)]="model.name"  id="name" name="name" />
    <span class='error' *ngIf="errors.name !=''">{{errors.name}}</span>
    </div>
    <div class='form-group'>
    <label>Email</label>
    <input class='form-control' [(ngModel)]="model.email"   id="email" name="email"  />
    <span class='error' *ngIf="errors.email !=''">{{errors.email}}</span>
    </div>
    <button type='button' class='btn btn-sm btn-success' (click)="doSave()">Save</button>
    `,
    providers: [ContactService]
})
export class ContactForm {
  @Input() model:Contact;
  @Input() errors:any;    
  @Input() message:String;    
  
  @Output() onSaved = new EventEmitter<Contact>();
  doSave(){
      this.onSaved.emit(this.model);
  }
}
