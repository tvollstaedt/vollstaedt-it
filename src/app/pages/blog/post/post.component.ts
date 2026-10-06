import { Component, effect } from '@angular/core';
import { HeaderComponent } from '@app/components/sections/header/header.component';
import { FooterComponent } from '@app/components/sections/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-post',
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage],
  templateUrl: './post.component.html',
})
export class PostComponent {
  public constructor() {
    effect(() => {
      GLightbox({});
    });
  }
}
