import template from './emails-component.html';
import EmailsController from './emails-controller';

export  default class Emails {
    constructor() {
        this.template = template;
        this.controller = EmailsController;
    }
}

