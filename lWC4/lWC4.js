import { LightningElement,track } from 'lwc';
import getAccountList from '@salesforce/apex/LWC4Controller.getAccountList';
export default class LWC4 extends LightningElement {
    @track searchkeyAccount;
    @track accounts;
    @track errorAccount;
    findAccounts(){
        getAccountList({
            Name:this.searchkeyAccount
        }).then(result=>{
            this.accounts=result;
            console.log('Account Result:'+accounts);
        }).catch(error=>{
            this.errorAccount=error;
            console.log('Account ERROR:'+errorAccount);
        })
    }
    handleChangeAccount(){
        event.preventDefault();
        console.log('EVENT :'+event.target.value)
        this.searchkeyAccount=event.target.value;
    }
}