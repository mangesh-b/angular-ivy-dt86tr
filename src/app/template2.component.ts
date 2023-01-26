import { Component, Input } from '@angular/core';

@Component({
  selector: 'dy-template2',
  template: `
    <h4>Custom Dynamic form</h4>
    <ng-template [ngIf]="demoAllFields?.fields && demoAllFields?.fields.length" [ngIfElse]="loggedOut">
      <div class="demo-material-dynamic-form">
        <material-dynamic-form [fields]="demoAllFields.fields" 
            [buttons]="demoAllFields.buttons" [submitted]="submitted"
            [validationError]="validationError"
            (submitBtnEvent)="submitBtnEvent($event)"
            (secondaryBtnEvent)="secondaryBtnEvent()">
        </material-dynamic-form>
      </div>
    </ng-template>
    <ng-template #loggedOut>Please check form fields configuration</ng-template>
  `,
  styles: [],
})
export class Template2Component {
  validationError: any = {};
  submitted: boolean = false;
  // fieldsMandatoryCheck: boolean = false; // To skip form validation

  demoAllFields: any = {
    fields: [
      {
        type: 'header',
        label: 'Registration Form',
        classes: 'registrtion-form-header',
      },
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        default: '',
        validation: {
          required: true,
        },
        appearance: 'fill', // outline - default
        hint: 'Enter only first name ',
        suffix: 'matSuffix', // matPrefix
        alignPosition: 'end', // start
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        default: '',
        validation: {
          required: true,
        },
        appearance: 'fill',
      },

      {
        type: 'textarea',
        name: 'address',
        label: `Address`,
        default: 'Mumbai, India',
        required: false,
      },
      {
        type: 'select',
        name: 'customer1',
        label: `Customer`,
        default: '',
        required: false,
        options: [
          { id: 1, name: 'TATA Consultancy Services' },
          { id: 2, name: 'HDFC Bank' },
          { id: 3, name: 'Infosys' },
        ],
      },
      {
        type: 'radio',
        name: 'gender',
        label: `Gender`,
        default: '',
        validation: {
          required: true,
        },
        options: [
          {
            value: 12,
            label: 'Male',
          },
          {
            value: 13,
            label: 'Female',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'isActive',
        label: `Employee Status`,
        default: true,
        required: true,
      },
    ],
    buttons: {
      display: true,
      align: 'center',
      primaryButton: true,
      primaryLabel: 'Submit',
      secondaryButton: true,
      secondaryLabel: 'Reset',
      resetForm: true,
    },
  };

  submitBtnEvent(event: any) {
    console.log(event);
  }
  secondaryBtnEvent() {
    console.log('Secondary Button have been clicked !!');
  }
}
