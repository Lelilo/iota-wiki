import type { ComponentType, SVGProps } from 'react';
import {
  Hornet,
  Wasp
} from './common/icons'

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: ComponentType<SVGProps<SVGSVGElement>>;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'Hornet',
    docId: 'build-hornet-next',
    icon: Hornet,
    section: 'layer-1',
  },
  {
    name: 'Hornet 1.0.0',
    docId: 'build-hornet-1-0-0',
    icon: Hornet,
    section: 'layer-1',
  },
  {
    name: 'Hornet 2.0.0-rc.1',
    docId: 'build-hornet-2-0-0-rc-1',
    icon: Hornet,
    section: 'layer-1',
  },
  {
    name: 'Wasp',
    docId: 'build-wasp',
    icon: Wasp,
    section: 'layer-2',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'Layer 1',
      section: 'layer-1',
      description:
        'Layer 1 description',
    },
    {
      name: 'Layer 2',
      section: 'layer-2',
      description: 'Layer 2 description',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
