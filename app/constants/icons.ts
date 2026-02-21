import { 
  SparklesIcon, 
  CubeIcon, 
  UsersIcon, 
  HeartIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export const ICONS = {
  sparkles: SparklesIcon,
  cube: CubeIcon,
  users: UsersIcon,
  heart: HeartIcon,
  rocket: RocketLaunchIcon,
  shield: ShieldCheckIcon,
  userGroup: UserGroupIcon,
  arrowRight: ArrowRightIcon,
  magnifyingGlass: MagnifyingGlassIcon,
  funnel: FunnelIcon,
  scale: ScaleIcon
} as const

export type IconName = keyof typeof ICONS