import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

function phoneRegionValidator(code: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        
        let matched = (control.value.substring(0,2)===code);
        //if phone number not matched to given pattern, throw error else null(no error)
        return (!matched)?{region:{value:control.value}}:null;
    };
}

export default phoneRegionValidator;