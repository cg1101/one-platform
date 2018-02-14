export interface NavigationNode {
  icon: string;
  label: string;
  children?: NavigationNode[];
  active?: boolean;
  highlight?: boolean;
  link?: string;
}
