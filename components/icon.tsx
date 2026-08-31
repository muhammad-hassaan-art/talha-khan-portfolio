import {
  Layers,
  ShoppingCart,
  Sparkles,
  Headphones,
  LayoutGrid,
  Code,
  Boxes,
  ShoppingBag,
  Brain,
  Cloud,
  TrendingUp,
  Globe,
  type LucideIcon,
} from "lucide-react"

/**
 * Maps the string `icon` keys in `lib/content.ts` to lucide components, so the
 * content layer stays free of JSX imports.
 */
const icons: Record<string, LucideIcon> = {
  layers: Layers,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  headphones: Headphones,
  "layout-grid": LayoutGrid,
  code: Code,
  boxes: Boxes,
  "shopping-bag": ShoppingBag,
  brain: Brain,
  cloud: Cloud,
  "trending-up": TrendingUp,
  wordpress: Globe,
}

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? Code
  return <Component className={className} aria-hidden="true" />
}
