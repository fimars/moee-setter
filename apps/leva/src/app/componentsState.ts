export type ComponentNode = {
  // 布局四要素：Margin, Padding, Size, Background
  widgetData: {
    m: number;
    p: number;
    s: number;
    bcolor: string;
    [k: string]: string | number;
  };
};

export type ComponentsState = ComponentNode | null;
