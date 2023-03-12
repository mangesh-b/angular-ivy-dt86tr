import { Component, Input } from '@angular/core';

@Component({
  selector: 'dy-template1',
  template: `
    <h4>Basic Dynamic form</h4>
    <ng-template [ngIf]="demoAllFields?.fields && demoAllFields?.fields.length" [ngIfElse]="invalidConfig">
      <div class="demo-material-dynamic-form">
        <material-dynamic-form [fields]="demoAllFields.fields" 
            [buttons]="demoAllFields.buttons" [submitted]="submitted"
            [validationError]="validationError"
            (submitBtnEvent)="submitBtnEvent($event)"
            (secondaryBtnEvent)="secondaryBtnEvent()">
        </material-dynamic-form>
      </div>
    </ng-template>
    <ng-template #invalidConfig>Please check form fields configuration</ng-template>
  `,
  styles: [],
})
export class Template1Component {
  validationError: any = {};
  submitted: boolean = false;
  // fieldsMandatoryCheck: boolean = false; // To skip form validation

  demoAllFields: any = {
    fields: [
      {
        type: 'header',
        label: 'Employee Registration Form',
        classes: 'employee-form-header',
        name: 'registrationHeader',
      },
      {
        type: 'text',
        name: 'fullName',
        label: 'Full Name',
        default: '',
        validation: {
          required: true,
        },
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
        name: 'customer',
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
