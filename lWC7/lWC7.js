import { LightningElement } from 'lwc';

export default class LWC7 extends LightningElement {
    handlePrevious(){
        //Creating Custom Event
        const nextEvent=new CustomEvent('previous');// 'next' is the name of Event and it can be anything
        //firing Event
        this.dispatchEvent(nextEvent);
    }
    handleNext(){
        const prevEvent=new CustomEvent('next');// 'next' is the name of Event and it can be anything
        //firing Event
        this.dispatchEvent(prevEvent);
    }
}