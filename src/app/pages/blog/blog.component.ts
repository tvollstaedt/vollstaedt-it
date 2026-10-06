import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [HeaderComponent, FooterComponent, RouterLink, NgOptimizedImage],
  templateUrl: './blog.component.html',
  styles: ``,
})
export class BlogComponent {}
