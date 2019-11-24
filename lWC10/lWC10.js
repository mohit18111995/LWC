import { LightningElement ,api} from 'lwc';
import LWC10LABEL from '@salesforce/label/c.LWC10LABEL';
import LWC10Img from '@salesforce/resourceUrl/LWC10Img';
import Id from '@salesforce/user/Id';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import timezone from '@salesforce/i18n/timezone';

export default class lWC10 extends LightningElement {

    @api heading;
    @api greeting;
    @api label={LWC10LABEL,LWC10Img,Id,ACCOUNT_OBJ,NAME_FIELD,lang,locale,currency,timezone}
}