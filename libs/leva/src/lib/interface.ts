export type PanelConfig = {
  id: string;
  [K: string]: unknown;
};

export type PanelFieldGroupConfig = PanelConfig & {
  groupName: string
  children: PanelConfig[];
}

export type PanelFieldConfig = PanelConfig & {
  attrName: string;
  setterType: string
}
