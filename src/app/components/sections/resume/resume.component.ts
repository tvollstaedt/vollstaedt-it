import { ChangeDetectionStrategy, Component } from '@angular/core';

import { appSettings } from '@app/app.settings';
import { NgOptimizedImage } from '@angular/common';
import { WorkTypePipePipe } from '@app/pipes/work-type.pipe';

@Component({
  selector: 'app-resume',
  imports: [NgOptimizedImage, WorkTypePipePipe],
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent {
  protected readonly certificates = appSettings.certificates;
  protected readonly resumeEntries = appSettings.resumeEntries;
}
