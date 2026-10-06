import { Pipe, PipeTransform } from '@angular/core';
import { ProjectType } from '@app/models/project';

@Pipe({
  name: 'projectType',
})
export class ProjectTypePipe implements PipeTransform {
  transform(value: ProjectType): string {
    return value === 'own' ? 'Eigenes Vorhaben' : 'Kundenprojekt';
  }
}
