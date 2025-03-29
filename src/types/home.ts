import { ComponentType, SVGProps } from 'react';

export interface HomeContent {
  hero: {
    title: string;
    description: string;
    ctaButton: string;
    learnMore: string;
  };
  features: {
    title: string;
    subtitle: string;
    description: string;
    items: Array<{
      name: string;
      description: string;
      icon: ComponentType<SVGProps<SVGSVGElement>>;
    }>;
  };
} 