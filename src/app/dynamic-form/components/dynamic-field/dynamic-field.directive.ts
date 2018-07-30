import { ComponentFactoryResolver, ViewContainerRef, Directive, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
}

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;

  public component;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {}

  public ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);

    this.component = this.container.createComponent(factory);

    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}