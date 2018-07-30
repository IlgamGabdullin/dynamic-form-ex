import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  template: `
    <div
      class="dynamic-form form-input"
      [formGroup]="group">

      <label>{{ config.label }} </label>

      <input type="text"
             [attr.placeholder]="config.placeholder"
             [formControlName]="config.name" />

    </div>
  `
})
export class FormInputComponent {
  public form: FormGroup;
  public config;
}
