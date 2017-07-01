import template from './root-component.html';
import  './root-component.css';
import RootController from './root-controller';

export  default class Root {
    constructor() {
        this.template = template;
        this.controller = RootController;
    }
}