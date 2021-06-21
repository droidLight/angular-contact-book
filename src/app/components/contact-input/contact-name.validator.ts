import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { ContactService } from "src/app/services/contact/contact.service";

@Injectable({ providedIn: "root" })
class DuplicateNameValidator {

    constructor(private contactService: ContactService) { }

    validateUser(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{

            return new Promise((resolve, reject) => {

                //emulate network delay
                setTimeout(() => {
                    let status = this.contactService.nameExists(control.value);
                    let result = status ? { exists: { value: control.value } } : null;
                    resolve(result);
                }, 300);
            });
        };
    }

}
export default DuplicateNameValidator;
