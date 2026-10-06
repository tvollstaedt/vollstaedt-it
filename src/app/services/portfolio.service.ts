import { computed, Injectable, Signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Project, ProjectSummary, ProjectType } from '@app/models/project';
import { parse } from 'yaml';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  public readonly projectSummaries = httpResource<ProjectSummary[]>(
    // @ts-ignore
    'content/portfolio-index.json',
    { defaultValue: [] },
  );

  public readonly availableTypes = computed(() => {
    const summaries = this.projectSummaries.value();

    const types = summaries
      .map((project) => project.type)
      .filter((type): type is ProjectType => !!type);

    return Array.from(new Set(types)).sort();
  });

  public loadProject(projectId: Signal<string>) {
    return httpResource.text<Project>(
      () => ({ url: `content/portfolio/${projectId()}.yaml` }),
      {
        defaultValue: {} as Project,
        parse: (input: unknown) => parse(input as string) as Project,
      },
    );
  }
}
