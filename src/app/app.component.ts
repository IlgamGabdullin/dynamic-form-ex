import { Component } from '@angular/core';

import { registrationForm } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public registrationForm = registrationForm;

  public formSubmitted(value) {
    console.log(value);
  }
}
