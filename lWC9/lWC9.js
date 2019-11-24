import { LightningElement,api } from 'lwc';

export default class LWC9 extends LightningElement {
    @api accounts;
    handleSelect(event){
        event.preventDefault(); //we can prevent behaviour of <a> tag
        const selectEvent=new CustomEvent('select',{
            //Passing the value from child to parent
            detail:this.accounts.Id
        });
        //to dispatch the event
        this.dispatchEvent(selectEvent)
    }
}