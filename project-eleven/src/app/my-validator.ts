import { AbstractControl} from '@angular/forms'

// all form control inherit from abstractcontrol, it like as parent

export function rangeValidator(min: any,max: any) {
    return function(c:AbstractControl): {[key: string]: boolean} | null {
        if(c.value<min || c.value>max) {
            return {'range': true};
        }
        return null;
    }
}

export function emailMatchValidator(c:AbstractControl):{[key: string]: boolean} |null {
    // const emailControl = ;
    let emailControlValue = c.get('email')!.value;
    // console.log(emailControlValue);
    let confirmEmailControlValue = c.get('confirmEmail')!.value;
    if (emailControlValue !== confirmEmailControlValue) {
        return {'match':true};
    }
    return null;

}