export type ProjectType = 'own' | 'client';

export interface ProjectSummary {
  slug: string;
  title: string;
  type: ProjectType;
  date: string;
  coverImage: string;
  highlight: boolean;
}

export interface Project extends ProjectSummary {
  client: string;
  description: string;
  subtitle: string;
  gallery?: string[];
  tags: string[];
  video?: string | null;
  externalUrl?: string | null;
  sourceCodeUrl?: string | null;
  sections: ProjectSection[];
  technologies?: {
    name: string;
    url: string;
  }[];
}

export interface ProjectSection {
  title: string;
  text: string;
}
