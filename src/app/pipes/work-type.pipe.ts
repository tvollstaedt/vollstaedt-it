import { Pipe, PipeTransform } from '@angular/core';
import { WorkType } from '@app/models/work-type';

@Pipe({
  name: 'workType',
})
export class WorkTypePipePipe implements PipeTransform {
  transform(value: WorkType): string {
    return value === 'freelance'
      ? 'Freiberuflich'
      : value === 'startup'
        ? 'Eigenes Projekt / Startup'
        : 'Angestellt';
  }
}
