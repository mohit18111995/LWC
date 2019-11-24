import { LightningElement ,track} from 'lwc';

export default class LWC6 extends LightningElement {
    @track page = 1;
    handlePrevious(){
        if(this.page>1){
            this.page--;
        }        
    }
    handleNext(){
        this.page++;
    }
}