export interface NavigationNode {
  path?: string;
  label?: string;
  icon?: string;
  link?: string;
  children?: NavigationNode[];
  active?: boolean;
  bottom?: boolean;
}
