import { Card } from '@shopify/polaris';
import { fieldFactory } from './fieldFactory';
import { TEXT_PANEL_CONFIG } from './panelConfig';

/* eslint-disable-next-line */
export interface LevaProps {}

export function Leva(props: LevaProps) {
  return (
    <Card title="属性面板">{fieldFactory(TEXT_PANEL_CONFIG, 'root')}
    </Card>
  );
}

export default Leva;
