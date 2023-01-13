export enum QuickLinksType {
  Link = 'link',
  Pill = 'pill',
}

export type QuickLinksUI = {
  title: string;
  type: QuickLinksType;
  routes: { title: string; destination: string }[];
};
