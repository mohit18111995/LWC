import { LightningElement ,track} from 'lwc';
import getAccountList from '@salesforce/apex/LWC8Controller.getAccountList';
export default class LWC8 extends LightningElement {
    @track searchkeyAccount 
    @track accounts
    @track errorAccount
    @track selectedAccount //to get value of selected Account
    findAccounts(){
        getAccountList({
            //Passing value to controller
            Name:this.searchkeyAccount
        }).then(result=>{
            this.accounts=result;
            console.log('Account Result:'+accounts);
        }).catch(error=>{
            this.errorAccount=error;
            console.log('Account ERROR:'+errorAccount);
        })
    }
    handleChangeAccount(event){
        event.preventDefault();
        console.log('EVENT :'+event.target.value)
        this.searchkeyAccount=event.target.value;
    }
    handleSelectRec(event){
        const recordId=event.detail;
        console.log('recordId ',recordId);
        this.selectedAccount=this.accounts.find(accounts=>accounts.Id===recordId);
        /* //alternate of find()
        for(let i=0;i<this.accounts.length;i++){
            if(this.accounts[i].Id===recordId){
                this.selectedAccount=this.accounts[i];
            }
        }*/
    }
}