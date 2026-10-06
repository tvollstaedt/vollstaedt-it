import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-gradient-cursor',
  imports: [],
  templateUrl: './gradient-cursor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradientCursorComponent {
  public coords = input<{ x: number; y: number }>();

  private container = viewChild('container', { read: ElementRef });

  public constructor() {
    effect(() => {
      const coords = this.coords();
      const container = this.container();
      const x = coords?.x;
      const y = coords?.y;
      if (x && y && container) {
        container.nativeElement.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    });
  }
}
