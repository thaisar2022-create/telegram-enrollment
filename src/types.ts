import type { ReactNode } from 'react';

export interface CourseOption {
  id: string;
  name: string;
  iconBgClass: string;
  iconColorClass: string;
  icon: ReactNode;
}
