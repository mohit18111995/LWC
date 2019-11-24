import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/LWC2Controller.getContactList';
export default class LWC2 extends LightningElement {
    @track searchkey;
    @track contacts;
    @track error;
    @wire(getContactList,{
        Name:'$searchkey'
    }) 
    getcon({error,data}){
        if(data){
            this.contacts=data;
            console.log(contacts);
        }else if(error){
            this.error=error;
            console.log('Error : '+error);
        }
    }
    handleChange(event){
        //event.preventDefault();
        console.log('EVENT :'+event.target.value)
        this.searchkey=event.target.value;
    }
}