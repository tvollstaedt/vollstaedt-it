import { WorkType } from '@app/models/work-type';

export interface ResumeEntry {
  title: string;
  company: string;
  timeRange: string;
  description: string;
  type: WorkType;
  logo?: string;
}
