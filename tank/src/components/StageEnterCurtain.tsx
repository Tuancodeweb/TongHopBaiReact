import * as React from 'react';
import { BLOCK_SIZE as B } from 'utils/consts';
import Curtain from 'components/Curtain';
import Text from 'components/Text';

interface P {
  t: number;
  stageName: string;
}

export default class StageEnterCurtain extends React.PureComponent<P> {
  render() {
    const { t, stageName } = this.props;

    return (
      <Curtain name="stage-enter/exit" t={t} x={B} y={B} width={13 * B} height={13 * B}>
        <rect width={13 * B} height={13 * B} fill="#757575" />
        <Text content={stageName} x={5 * B} y={6 * B} fill="black" />
      </Curtain>
    );
  }
}
