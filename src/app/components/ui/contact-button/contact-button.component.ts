import { Component } from '@angular/core';
import { appSettings } from '@app/app.settings';

@Component({
  selector: 'app-contact-button',
  imports: [],
  templateUrl: './contact-button.component.html',
})
export class ContactButtonComponent {
  protected readonly appSettings = appSettings;
}
