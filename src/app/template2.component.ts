import { Component, ViewChild } from '@angular/core';
import { MaterialDynamicFormComponent } from 'material-dynamic-form';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'dy-template2',
  template: `
    <h4>Custom Dynamic form with all field events</h4>
    <ng-template [ngIf]="demoAllFields?.fields && demoAllFields?.fields.length" [ngIfElse]="invalidConfig">
      <div class="demo-material-dynamic-form">
        <material-dynamic-form [fields]="demoAllFields.fields" 
          [buttons]="demoAllFields.buttons" [submitted]="submitted"
          [validationError]="validationError"
          (submitBtnEvent)="submitBtnEvent($event)"
          (secondaryBtnEvent)="secondaryBtnEvent()" (selectChangeEvent)="selectChange($event)"
          (multiSelectChangeEvent)="multiSelectChange($event)" 
          (radioChangeEvent)="radioChange($event)"
          (inputChangeEvent)="inputChange($event)" (checkboxChangeEvent)="checkboxChange($event)"
          (dateChangeEvent)="dateChange($event)" (blurInputChangeEvent)="blurInputChange($event)"
          (otpChangeEvent)="otpChange($event)" (blurOtpChangeEvent)="blurOtpChange($event)"
          (errorsOnSubmitEvent)="errorsOnSubmitEvent($event)" 
          (tertiaryBtnEvent)="tertiaryBtnEvent()">
        </material-dynamic-form>
      </div>
    </ng-template>
    <ng-template #invalidConfig>Please check form fields configuration</ng-template>
  `,
  styles: [],
})
export class Template2Component {
  validationError: any = {};
  submitted: boolean = false;
  fieldsMandatoryCheck: boolean = false; // default true

  @ViewChild(MaterialDynamicFormComponent, { static: false })
  private dynamicFormComponent!: MaterialDynamicFormComponent;

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
        name: 'firstName',
        label: 'First Name',
        default: '',
        validation: {
          required: true,
        },
        appearance: 'fill',
        hint: 'hey',
        suffix: 'matSuffix', // matPrefix
        suffixIcon: 'sentiment_very_satisfied',
        alignPosition: 'end',
      },
      {
        type: 'text',
        name: 'lastName',
        label: `Last Name`,
        default: '',
        validation: {
          required: true,
        },
        errorMessages: {
          required: 'Last Name Custom Message',
          minimumLength: '',
          maximumLength: '',
        },
        maxLength: 10,
      },
      {
        type: 'password',
        name: 'password',
        label: `Enter Password`,
        default: '',
        validation: {
          required: true,
          min: 8,
          pattern: '[a-zA-Z0-9!@#$%^&*)(+=._-]{4,}',
        },
      },
      {
        type: 'password',
        name: 'confirmPassword',
        label: `Enter Confirm Password`,
        default: '',
        validation: {
          required: true,
          min: 8,
          max: 12,
          pattern: '[a-zA-Z0-9!@#$%^&*)(+=._-]{4,}',
        },
        errorMessages: {
          required: 'Confirm password is require',
          passwordNotMatch: 'Confirm password should match',
        },
      },
      {
        type: 'date',
        name: 'dob',
        label: `DOB`,
        required: false,
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
        type: 'number',
        name: 'yearsOfExperience',
        label: 'Years of Experience',
        default: '',
        validation: {
          required: true,
        },
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
        type: 'select',
        name: 'customer2',
        label: `Custom key select`,
        default: '',
        validation: {
          required: true,
        },
        options: [
          { id: 1, name: 'TATA Consultancy Services', customKey: 'Id1' },
          { id: 2, name: 'HDFC Bank', customKey: 'Id2' },
          { id: 3, name: 'Infosys', customKey: 'Id3' },
        ],
        valueParam: 'customKey',
      },
      {
        type: 'select',
        name: 'customer4',
        label: `Multiple Customers`,
        default: '',
        validation: {
          required: true,
        },
        multiselect: true,
        // valueParam: 'id',
        options: [
          { id: 1, name: 'TATA Consultancy Services' },
          { id: 2, name: 'HDFC Bank' },
          { id: 3, name: 'Infosys' },
        ],
      },
      {
        type: 'groupselect',
        name: 'ranging',
        label: `Ranging`,
        default: [],
        required: false,
        // valueParam: 'id',
        options: [
          {
            name: 'Grass',
            childs: [
              { id: 'bulbasaur-0', name: 'Bulbasaur' },
              { id: 'oddish-1', name: 'Oddish' },
              { id: 'bellsprout-2', name: 'Bellsprout' },
            ],
          },
          {
            name: 'Water',
            childs: [
              { id: 'squirtle-3', name: 'Squirtle' },
              { id: 'psyduck-4', name: 'Psyduck' },
              { id: 'horsea-5', name: 'Horsea' },
            ],
          },
          {
            name: 'Fire',
            disabled: true,
            childs: [
              { id: 'charmander-6', name: 'Charmander' },
              { id: 'vulpix-7', name: 'Vulpix' },
              { id: 'flareon-8', name: 'Flareon' },
            ],
          },
        ],
      },

      {
        type: 'countryselect',
        name: 'country',
        label: `Country`,
        default: {
          name: 'India',
          code: 'IN',
          flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
        },
        validation: {
          required: true,
        },
        options: [
          {
            name: 'Ascension Island',
            code: 'AC',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg',
          },
          {
            name: 'Andorra',
            code: 'AD',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg',
          },
          {
            name: 'United Arab Emirates',
            code: 'AE',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg',
          },
          {
            name: 'Antigua & Barbuda',
            code: 'AG',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg',
          },
          {
            name: 'Albania',
            code: 'AL',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg',
          },
          {
            name: 'India',
            code: 'IN',
            flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg',
          },
        ],
      },
      {
        type: 'textarea',
        name: 'address',
        label: `Address`,
        default: 'Mumbai, India',
        required: false,
      },
      {
        type: 'checkbox',
        name: 'isActive',
        label: `Employee Status`,
        default: true,
        required: true,
      },
      {
        type: 'date',
        name: 'endDate',
        label: `End Date`,
        errorMessages: {
          mustGreater: 'End date should be greater',
        },
      },
    ],
    buttons: {
      display: true,
      align: 'center',
      primaryButton: true,
      primaryLabel: 'Submit',
      secondaryButton: true,
      secondaryLabel: 'Cancel',
      resetForm: false,
      tertiaryButton: true,
      tertiaryLabel: 'Random',
    },
  };

  submitBtnEvent(event: any) {
    console.log(event);
  }
  secondaryBtnEvent() {
    console.log('Secondary Button have been clicked !!');
  }

  selectChange(event: any) {
    console.log('selectChange', event);
  }
  multiSelectChange(event: any) {
    console.log('multiSelectChange', event);
  }
  radioChange(event: any) {
    console.log('radioChange', event);
  }
  inputChange(event: any) {
    console.log('inputChange', event);
  }
  checkboxChange(event: any) {
    console.log('checkboxChange', event);
  }
  dateChange(event: any) {
    console.log('dateChange', event);
  }
  blurInputChange(event: any) {
    console.log('blurInputChange', event);
  }
  otpChange(event: any) {
    console.log('otpChange', event);
  }
  blurOtpChange(event: any) {
    console.log('blurOtpChange', event);
  }
  errorsOnSubmitEvent(event: any) {
    console.log('errorsOnSubmitEvent', event);
  }
  tertiaryBtnEvent() {
    console.log('Extra button clicked!!!');
  }

  parentSubmit() {
    this.dynamicFormComponent.parentSubmitEvent();
  }
}
