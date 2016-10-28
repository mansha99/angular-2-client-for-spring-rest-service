import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
///////////////////////////////////////////////////////
import { App } from './ui/App';
import { ContactList } from './ui/contact/contact-list';
import { ContactNew } from './ui/contact/contact-new';
import { ContactForm } from './ui/contact/_form';
import { Dashboard } from './ui/dashboard';

///////////////////////////////////////////////////////////
import { ContactService } from './services/services.contact';

const routes = [
    {
        path: '',
        component: ContactList
    },
    {
        path: 'new-contact',
        component: ContactNew
    }, {
        path: 'dashboard',
        component: Dashboard
    }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        App,
        ContactList,
        ContactNew,
        Dashboard,
        ContactForm
    ],
    providers: [
        ContactService
    ],
    bootstrap: [App],
})
export class AppModule { }
