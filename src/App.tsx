import React, { useEffect, useState } from 'react';
import { Graph, GraphOptions } from '@antv/g6';
import logo from './logo.svg';
import './App.css';
//import G6 from '@antv/g6';
import Graphin, { Components, Behaviors, Utils, G6, GraphinContext } from '@antv/graphin';
import { Menu, message } from 'antd';
import type { ContextMenuValue } from '@antv/graphin';
import ReactDOM from 'react-dom';
//import { Toolbar } from '@antv/graphin-components';
import {
  GI_LOCAL_DATA,
  GI_SCHEMA_DATA,
} from "./data/GI_DATA";
import MiniMap from './models/Minimap';
import ToolBar from './models/ToolBar';
import TooltipDemo from './models/ToolTip';
//import Timebar from './models/TimeBar';

import setIcons from './styles/graphine-icons';

const { ZoomCanvas, FitView, ActivateRelations } = Behaviors;
const data1 = Utils.mock(8).circle().graphin();
const { ContextMenu } = Components;
//const { MiniMap } = Components;

const MyMenu = (value: ContextMenuValue) => {
  const handleClick = (e: { key: unknown }) => {
    const { onClose, id } = value;
    message.info(`${e.key}:${id}`);
    onClose();
  };

  return (
    <Menu onClick={handleClick}>
      <Menu.Item key="copy">Copy</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
      <Menu.Item key="tag">Tag</Menu.Item>
    </Menu>
  );
};

function App() {

  //var data: any;
  //data = setIcons(GI_LOCAL_DATA);
  return (
    <div className="App">
      <Graphin enabledStack={true} data={setIcons(GI_LOCAL_DATA)} layout={{ type: 'dagre' }}>
        {/* <Timebar /> */}
        <TooltipDemo />
        <ToolBar />
        <MiniMap />
        <ContextMenu style={{ background: '#fff' }} bindType="node">
          {value => {
            return <MyMenu {...value} />;
          }}
        </ContextMenu>
        <ZoomCanvas />
        <FitView />
        <ActivateRelations />
      </Graphin>

    </div>
  );
}

export default App;
