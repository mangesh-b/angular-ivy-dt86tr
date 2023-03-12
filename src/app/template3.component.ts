import { Component } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'dy-template3',
  template: `
    <h4>Support Bootstrap v4, v5 Grid system and Custom classes for fieldset</h4>
    <h4>Default width is 100% for each field</h4>
    <ng-template [ngIf]="demoAllFields?.fields && demoAllFields?.fields.length" [ngIfElse]="invalidConfig">
      <div class="demo-material-dynamic-form"> <!-- class="mx-3"-- If row is creating UI distortion -->
        <material-dynamic-form [fields]="demoAllFields.fields" 
          [buttons]="demoAllFields.buttons" [submitted]="submitted"
          [validationError]="validationError"
          (submitBtnEvent)="submitBtnEvent($event)">
        </material-dynamic-form>
      </div>
    </ng-template>
    <ng-template #invalidConfig>Please check form fields configuration</ng-template>
  `,
  styles: [],
})
export class Template3Component {
  validationError: any = {};
  submitted: boolean = false;

  demoAllFields: any = {
    fields: [
      {
        type: 'header',
        label: 'Employee Registration Form',
        classes: 'employee-form-header col-12',
        name: "employeeRegistration"
      },
      {
        type: 'text',
        name: 'fullName',
        label: 'Full Name',
        default: '',
        validation: {
          required: true,
        },
        classes: 'col-12 col-md-6 col-xs-12',
      },
      {
        type: 'textarea',
        name: 'address',
        label: `Address`,
        default: 'Mumbai, India',
        required: false,
        classes: 'col-12 col-md-6 col-xs-12',
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
        classes: 'col-12 col-md-6 col-xs-12',
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
        classes: 'col-12 col-md-6 col-xs-12',
      },
      {
        type: 'checkbox',
        name: 'isActive',
        label: `Employee Status`,
        default: true,
        required: true,
        classes: 'col-12 col-md-6 col-xs-12',
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
}
