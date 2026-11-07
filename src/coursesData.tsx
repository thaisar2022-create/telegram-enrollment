import type { CourseOption } from './types';

export const COURSES: CourseOption[] = [
  {
    id: 'zoom',
    name: 'Zoom Face to Face',
    iconBgClass: 'icon-zoom',
    iconColorClass: 'text-zoom',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="3" y="7" width="19" height="18" rx="4" />
        <path d="m22 13 7-4v14l-7-4" />
      </svg>
    ),
  },
  {
    id: 'yangon',
    name: 'ရန်ကုန်အပြင်သင်တန်း',
    iconBgClass: 'icon-yangon',
    iconColorClass: 'text-yangon',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 28h24M7 28V14l9-6 9 6v14M12 28v-8h8v8M16 3v5M11 15h10" />
        <path d="M3 17h4m18 0h4" />
      </svg>
    ),
  },
  {
    id: 'mandalay',
    name: 'မန္တလေးအပြင်သင်တန်း',
    iconBgClass: 'icon-mandalay',
    iconColorClass: 'text-mandalay',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M3 28h26M6 28V17h20v11M4 17l5-5h14l5 5M9 12l7-6 7 6M16 3v3M12 28v-7h8v7" />
      </svg>
    ),
  },
  {
    id: 'one-on-one',
    name: 'One on One အတန်း',
    iconBgClass: 'icon-one',
    iconColorClass: 'text-one',
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="11" cy="10" r="4" />
        <path d="M3 27v-3a8 8 0 0 1 16 0v3M22 6a4 4 0 0 1 0 8M23 19a7 7 0 0 1 6 7" />
      </svg>
    ),
  },
];
