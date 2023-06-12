import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserReactiveForm } from 'src/app/models/UserReactiveForm';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  streetNumber = new FormControl('');
  streetName = new FormControl('');
  postcode = new FormControl('');
  city = new FormControl('');

  user?: UserReactiveForm;

  inscription() {
    if (this.username.value
      && this.email.value
      && this.password.value
      && this.streetNumber.value
      && this.streetName.value
      && this.postcode.value
      && this.city.value) {
      this.user = new UserReactiveForm(
        this.username.value,
        this.email.value,
        this.password.value,
        this.streetNumber.value,
        this.streetName.value,
        this.postcode.value,
        this.city.value,
      )

    }
  }

}


/*
{ 
    "_pendingDirty": false, 
    "_hasOwnPendingAsyncValidator": false, 
    "_pendingTouched": false, 
    "_parent": null, 
    "pristine": true, 
    "touched": false, 
    "_onDisabledChange": [ null ], 
    "_rawValidators": null, 
    "_composedValidatorFn": null, 
    "_rawAsyncValidators": null, 
    "_composedAsyncValidatorFn": null, 
    "defaultValue": null, 
    "_onChange": [ null ], 
    "_pendingChange": false, 
    "_pendingValue": "", 
    "value": "", 
    "valueChanges": { 
        "closed": false, 
        "currentObservers": null, 
        "observers": [], 
        "isStopped": false, 
        "hasError": false, 
        "thrownError": null, 
        "__isAsync": false 
    }, 
    "statusChanges": { 
        "closed": false, 
        "currentObservers": null, 
        "observers": [], 
        "isStopped": false, 
        "hasError": false, 
        "thrownError": null, 
        "__isAsync": false 
    }, 
    "status": "VALID", 
    "errors": null 
}
*/