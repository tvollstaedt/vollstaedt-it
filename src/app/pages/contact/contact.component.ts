import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {}
