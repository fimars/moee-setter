import { Leva } from '@moee/leva';
import { Box, Text, Stack, Page } from '@shopify/polaris';
import { FC, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from './hooks';

// 布局四要素：Margin, Padding, Size, Background
type PropsWithWidget = {
  widgetData: any;
};

const WidgetBox: FC<PropsWithChildren & PropsWithWidget> = ({
  children,
  widgetData,
}) => {
  return (
    <div
      style={{
        margin: widgetData.m + 'px',
        padding: widgetData.p + 'px',
        width: widgetData.s + 'px',
        height: widgetData.s + 'px',
        background: widgetData.bcolor,
        border: `solid ${widgetData.borderSize}px black`,
        fontSize: "12 px"
      }}
    >
      <p>
        <small>m: {widgetData.m}</small>;<small>p: {widgetData.p}</small>;
        <small>s: {widgetData.s}</small>;<small>b: {widgetData.bcolor}</small>;
      </p>
      <p>{widgetData.value}</p>
      <p>{children}</p>
    </div>
  );
};

const StyledLeft = styled.div`
  max-width: 500px;
`;

export function App() {
  const widgetData = useAppSelector((state) => state.components.widgetData);

  return (
    <Page>
      <StyledLeft>
        <Stack vertical>
          <Box background="surface" borderRadius="2" padding="5" shadow="card">
            <Text as="h2" variant="headingMd">
              <WidgetBox widgetData={widgetData}></WidgetBox>
            </Text>
          </Box>
        </Stack>
        <Leva />
      </StyledLeft>
    </Page>
  );
}

export default App;
