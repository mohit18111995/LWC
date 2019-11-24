import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/LWC1Controller.getContactList';
export default class LWC1 extends LightningElement {
    @wire(getContactList) getcon;
}