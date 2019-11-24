import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/LWC3Controller.getContactList';
import getAccountList from '@salesforce/apex/LWC3Controller.getAccountList';
export default class LWC3 extends LightningElement {
    @track searchkey;
    @track contacts;
    @track error;
    @track searchkeyAccount;
    @track accounts;
    @track errorAccount;
    //calling Apex class using @wire 
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
        event.preventDefault();
        console.log('EVENT :'+event.target.value)
        this.searchkey=event.target.value;
    }
    //Calling Apex class in imperative way
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