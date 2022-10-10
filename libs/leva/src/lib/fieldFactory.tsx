import { Card } from '@shopify/polaris';
import {
  PanelConfig,
  PanelFieldConfig,
  PanelFieldGroupConfig,
} from './interface';
import { Setter } from './Setter';

export const renderFieldAndLabel = (
  config: PanelFieldConfig,
  displayName: string,
  isInList: boolean,
  parentAttrName: string
) => {
  const { id } = config;
  return (
    <Setter
      key={`${id}-${displayName}`}
      {...config}
      isInList={isInList}
      parentAttrName={parentAttrName}
    />
  );
};

function renderPanelBar(
  { id, groupName, children }: PanelFieldGroupConfig,
  displayName: string
) {
  const key = `${id}-${displayName}`;
  return (
    <Card.Section key={key}>
      <Card title={groupName}>{fieldFactory(children, displayName)}</Card>
    </Card.Section>
  );
}

function renderField(
  item: PanelConfig,
  displayName: string,
  isInList: boolean
) {
  if ((item as PanelFieldGroupConfig).groupName) {
    return renderPanelBar(item as PanelFieldGroupConfig, displayName);
  } else if ((item as PanelFieldConfig).setterType) {
    return renderFieldAndLabel(
      item as PanelFieldConfig,
      displayName,
      isInList,
      ''
    );
  }
  return null;
}

export function fieldFactory(panelConfig: PanelConfig[], displayName: string) {
  return panelConfig.map((item) => renderField(item, displayName, false));
}
