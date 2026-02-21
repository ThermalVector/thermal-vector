import { type IconName } from '@/constants/icons';
import FeatureCardClient from './FeatureCard.client';

type FeatureCardProps = {
  iconName: IconName;
  title: string;
  description: string;
  href: string;
};

export default function FeatureCard(props: FeatureCardProps) {
  return <FeatureCardClient {...props} />;
}
