import template from './emails-component.html';
import EmailsController from './emails-controller';
import  './emails.css';

export  default class Emails {
    constructor() {
        this.template = template;
        this.controller = EmailsController;
    }
}

