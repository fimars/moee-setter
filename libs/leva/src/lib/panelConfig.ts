import { PanelConfig } from "./interface";

export const TEXT_PANEL_CONFIG: PanelConfig[] = [
  {
    id: `text-basic`,
    groupName: 'editor.inspect.setter_group.basic',
    children: [
      {
        id: `text-basic-inputModal`,
        labelName: 'editor.inspect.setter_label.content',
        labelDesc: 'editor.inspect.setter_tooltip.text_value',
        attrName: 'disableMarkdown',
        setterType: 'NUMBER_SETTER',
        options: [
          { label: 'Markdown', value: false },
          { label: 'widget.text.text_model', value: true },
        ],
      },
      {
        id: `text-basic-value`,
        attrName: 'value',
        setterType: 'STRING_SETTER',
        isSetterSingleRow: true,
      },
      {
        id: `text-basic-margin`,
        attrName: 'm',
        setterType: 'NUMBER_SETTER',
        isSetterSingleRow: true,
      },
      {
        id: `text-basic-padding`,
        attrName: 'p',
        setterType: 'NUMBER_SETTER',
        isSetterSingleRow: true,
      },
      {
        id: `text-basic-size`,
        attrName: 's',
        setterType: 'NUMBER_SETTER',
        isSetterSingleRow: true,
      },
      {
        id: `text-basic-background`,
        attrName: 'bcolor',
        setterType: 'STRING_SETTER',
        isSetterSingleRow: true,
      },
      {
        id: `text-basic-border`,
        attrName: 'borderSize',
        setterType: 'NUMBER_SETTER',
        isSetterSingleRow: true,
      },
    ],
  },
];
