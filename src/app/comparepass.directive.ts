import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import {Directive, Input} from '@angular/core'
import { Subscription } from 'rxjs';

@Directive({
    selector: '[compare]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: compareEqualDirective,
        multi:true
    }]
})
/*
export class compareEqualDirective implements Validator{

    @Input() appCompareEqualValidator: string
    validate(control: AbstractControl): {[key:string]:any} | null {
        const controlToCompare = control.parent.get(this.appCompareEqualValidator)
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notEqual': true}
        }
         return null
    }
}
*/

export class compareEqualDirective implements Validator{

    @Input('compare') controlNameToCompare : string 
    

    validate (c:AbstractControl) : ValidationErrors | null {

        //if(c.value === null || c.value.length === 0){
        //    return null //dont validate empty values
        //}

        const controlToCompare = c.root.get(this.controlNameToCompare)
        if(controlToCompare){
            const subscription: Subscription = controlToCompare.valueChanges.subscribe(()=>{
                c.updateValueAndValidity()
                subscription.unsubscribe()
            })
        }
        return controlToCompare && controlToCompare.value !== c.value ? {'notEqual':true} : null
    }
}