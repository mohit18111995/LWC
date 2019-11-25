import { LightningElement, track, wire } from 'lwc';
import NAME_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
import RecordId from '@salesforce/user/Id';
import mapDemo from '@salesforce/apex/UtilityClass.mapDemo';
import testName from '@salesforce/apex/UtilityClass.testName';
//import getContactList from '@salesforce/apex/ContactController.contactList';

export default class HelloIteration extends LightningElement {
    @track name1 = NAME_Field;
    @track objName = sObjectName;
    UserId = RecordId;
    @track records;
    @track error;
    @track map;
  
    //@wire(getContactList) contat;

    @track contacts = [ //declearation of list
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        { 
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];

    @wire(testName)
    methodCall({error,data}){
        if(data){
            this.records=data;
            this.error=undefined;
            console.log(data);
        }else if(error){
            this.records=undefined;
            this.error=error;
            console.log(error);
        }
    }
   // @wire(mapDemo)     records;
   HandleClick(){
        console.log("Inside HandleClick");
        mapDemo().then(result=>{
            console.log("Inside mapDemo");
            console.log(result); 
            const option=[];
            for(let key in result){
                if(key){
                    option.push({
                        key:key,
                        value:result[key]
                    })
                }
            }
            console.log(option);
            this.map=option;            
        })
        .catch(error=>{
            console.log(error);
        })
    }
}