import type { TooltipValue } from '@antv/graphin';
import Graphin, { Components } from '@antv/graphin';
import * as React from 'react';
import { Row, Col, Divider, Dropdown, Menu, Card, Space } from 'antd';

const { Tooltip } = Components;

const TooltipDemo: React.FunctionComponent = () => {

    return (
        <Tooltip bindType="node" placement={'bottom'} hasArrow={false} style={{background:"#fff", width: "200px"}}>
            {(value: TooltipValue) => {
            if (value.model) {
              const { model } :any = value;
              //console.log(model);
              return (
                <div>
                    <Card bodyStyle={{ padding: '0px 12px' }}>
                     <Row>{model.id}</Row>
                     <Divider style={{ margin: '15px 0px' }} />
                     <Row>{model.nodeType}</Row>
                     </Card>
                  {/* <li> {model.id}</li> */}
                </div>
              );
            }
            return null;
          }}
        </Tooltip>
    );
}
export default TooltipDemo;