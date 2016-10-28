//https://angular.io/docs/ts/latest/guide/server-communication.html
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ContactService } from '../../services/services.contact';

@Component({
    selector: 'contact-list',
    template: `
  <h4>
  List of Contacts
  <div class='pull-right'>
  <a routerLink="/new-contact"><i class='glyphicon glyphicon-plus'> </i></a>
  </div>
  </h4>   
  <div class='alert alert-danger' *ngIf="errorMessage !=''">
  {{errorMessage}}
  </div>
    <table class='table table-striped'>
    <thead>
    <tr>    
        <th>      
        <a href='#' (click)="doSort('id')">    
        <i class='glyphicon glyphicon-sort' *ngIf="sort =='id'"></i>
           Id                            
        </a>
        </th>
        <th>      
        <a href='#' (click)="doSort('name')">    
        <i class='glyphicon glyphicon-sort' *ngIf="sort =='name'"></i>
           Name
        </a>
        </th>
        <th>      
        <a href='#'  (click)="doSort('email')">    
        <i class='glyphicon glyphicon-sort' *ngIf="sort =='email'"></i>
           Email
        </a>
        </th>
        
        
    </tr>
    </thead>
    <tbody>
      <tr *ngFor="let contact of contacts">      
      <td>  {{ contact.id }}</td>
      <td>  {{ contact.name }}</td>
      <td>  {{ contact.email }}</td>      
      </tr>
      </tbody>
    </table>
    <div class='pull-right'>
        <a href='#' *ngIf="!first" class='btn btn-default' (click)="showPrevious()">
            <i class='glyphicon glyphicon-chevron-left'></i>
        </a>
     <a href='#' *ngIf="!last"  class='btn btn-default' (click)="showNext()">
            <i class='glyphicon glyphicon-chevron-right'></i>
        </a>
    </div>
  `,
    providers: [ContactService]
})
export class ContactList implements OnInit {

    contacts = [];
    errorMessage: String = "";
    page: number = 0;
    size: String = "4";
    sort: String = "id";
    dir: String = "asc";
    totalPages = 0;
    numberOfElements = 0;
    last = false;
    first = true;

    showNext(event) {
        this.page++;
        this.getContacts();
    }
    doSort(sort) {
        this.page = 0;
        if (this.sort != sort) {
            this.dir = "asc";
        } else {
            this.dir=this.dir == "asc" ? "desc" : "asc";
        }
        this.sort = sort;
        this.getContacts();

    }
    showPrevious(event) {
        this.page--;
        this.getContacts();
    }


    constructor(private contactservice: ContactService) { }
    ngOnInit(): void {
        this.getContacts();
    }
    getContacts(): void {
        this.contactservice.getContacts(this.page, this.size, this.sort, this.dir)
            .subscribe(
            body => {
                this.contacts = <any>(body.content),
                    this.totalPages = <any>(body.totalPages),
                    this.numberOfElements = <any>(body.numberOfElements),
                    this.last = <any>(body.last),
                    this.first = <any>(body.first)
            },
            error => this.errorMessage = <any>error);
    }
}
