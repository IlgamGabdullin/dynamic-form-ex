import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  styleUrls: ['./dynamic-form.component.css'],
  template: `
    <form 
      class="dynamic-form"
      [formGroup]="form"
      (ngSubmit)="submitted.emit(form.value)">
      
      <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">

      </ng-container>
    </form>
  `
})
export class DynamicFormComponent implements OnInit{
  @Input() public config: any[];
  @Output() public submitted: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.form = this.createForm();
  }

  private createForm() {
    const group = this.fb.group({});
    this.config.forEach((control) => {
      group.addControl(control.name, this.fb.control(control.value));
    });
    
    return group;
  }
}
