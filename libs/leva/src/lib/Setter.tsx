import { Card, TextField } from '@shopify/polaris';
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { componentsSlice } from '@moee/reducer';

const getInputType = (type: string) => {
  return {
    STRING_SETTER: 'text',
    NUMBER_SETTER: 'number',
  }[type];
};

export const Setter: FC<{
  isInList: boolean;
  parentAttrName: string;
  attrName: string;
  setterType: string;
}> = ({ attrName, setterType }) => {
  const value = useSelector(
    (state: any) => state.components.widgetData[attrName]
  );
  const dispatch = useDispatch();
  return (
    <Card.Section>
      <TextField
        label={attrName}
        onChange={(val) => {
          dispatch(
            componentsSlice.actions.handleUpdateDsl({
              attrPath: attrName,
              value: val,
            })
          );
        }}
        type={getInputType(setterType) as any}
        value={value}
        autoComplete="text"
      ></TextField>
    </Card.Section>
  );
};
