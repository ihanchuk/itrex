import NewEmailController from './new-email-controller';
import template from './new-email.html';
import './new-email.css'

export  default class NewEmail {
    constructor() {
        this.template = template;
        this.controller = NewEmailController;
        this.bindings ={}
    }
}
