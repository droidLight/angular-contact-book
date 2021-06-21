import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import phoneRegionValidator from './phone-number.validator';
import DuplicateNameValidator from './contact-name.validator';

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.scss']
})
export class ContactInputComponent implements OnInit {

  contactForm: any;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private duplicateUser:DuplicateNameValidator) { }


  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contactname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)], [this.duplicateUser.validateUser()]),
      phone: this.formBuilder.array([]),
      email: this.formBuilder.array([]),
      telephone: this.formBuilder.array([])
    });
    console.log(this.contactForm);
  }

  //save new contact
  addNewContact() {
    if (this.contactForm.status === "VALID") {
      console.log(this.contactForm.value);
      this.contactService.saveContact(this.contactForm.value);
    }

  }


  addPhone() {
    let phoneList = this.contactForm.get("phone") as FormArray;
    phoneList.push(
      this.formBuilder.group({
        phonenumber: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("^[0-9]*$"), phoneRegionValidator("91")])
      })
    );
  }

  addEmail() {
    let emailList = this.contactForm.get("email") as FormArray;
    emailList.push(
      this.formBuilder.group({
        emailaddress: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
      })
    );
  }

  addTelephone() {
    let telephoneList = this.contactForm.get("telephone") as FormArray;
    telephoneList.push(
      this.formBuilder.group({
        telephonenumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
      })
    );
  }



  removePhone(index: number) {
    let phoneList = this.contactForm.get("phone") as FormArray;
    phoneList.removeAt(index);
  }

  removeEmail(index: number) {
    let emailList = this.contactForm.get("email") as FormArray;
    emailList.removeAt(index);
  }

  removeTelephone(index: number) {
    let teleList = this.contactForm.get("telephone") as FormArray;
    teleList.removeAt(index);
  }
}
