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
import Timebar from './models/TimeBar';

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
const data = {
  // The array of nodes
  nodes: [
    {
      id: 'node1', // String, unique and required
      x: 100, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
    {
      id: 'node2', // String, unique and required
      x: 300, // Number, the x coordinate
      y: 200, // Number, the y coordinate
    },
  ],
  // The array of edges
  edges: [
    {
      source: 'node1', // String, required, the id of the source node
      target: 'node2', // String, required, the id of the target node
    },
  ],
};

function App() {
  new G6.ToolBar()
  // const container: any = React.useRef();
  // let graph: any = null;

  // useEffect(() => {
  //   // Instantiate the Minimap
  //   const toolbar = new G6.ToolBar();
  //   const minimap = new G6.Minimap({
  //     size: [100, 100],
  //     className: 'minimap',
  //     type: 'delegate',
  //   });
  //   // Instantiate grid
  //   const grid = new G6.Grid();
  //   if (!graph) {
  //     graph = new G6.Graph({

  //       container: container.current,
  //       width: 1200,
  //       height: 800,
  //       animate: true,
  //       // ...                           // Other configurations
  //       // The set of styles of nodes in different states
  //       nodeStateStyles: {
  //         // The node style when the state 'hover' is true
  //         hover: {
  //           fill: 'lightsteelblue',
  //         },
  //         // The node style when the state 'click' is true
  //         click: {
  //           stroke: '#000',
  //           lineWidth: 3,
  //         },
  //       },
  //       // The edge styles in different states
  //       edgeStateStyles: {
  //         // The edge style when the state 'click' is true
  //         click: {
  //           stroke: 'steelblue',
  //         },
  //       },
  //       modes: {
  //         default: ['drag-canvas', 'zoom-canvas', 'drag-node',  'activate-relations'],
  //       },
  //       layout: {
  //         type: 'dagre',
  //         direction: 'LR',
  //       },
  //       defaultNode: {
  //         type: 'node',
  //         labelCfg: {
  //           style: {
  //             fill: '#000000A6',
  //             fontSize: 10,
  //           },
  //         },
  //         style: {
  //           stroke: '#72CC4A',
  //           width: 150,
  //         },
  //       },
  //       defaultEdge: {
  //         type: 'polyline',
  //       },
  //       plugins: [minimap, grid, toolbar],
  //     });
  //   }

  //   // Click a node
  //   graph.on('node:click', (e: any) => {
  //     // Swich the 'click' state of the node to be false
  //     const clickNodes = graph.findAllByState('node', 'click');
  //     clickNodes.forEach((cn: any) => {
  //       graph.setItemState(cn, 'click', false);
  //     });
  //     const nodeItem = e.item; // et the clicked item
  //     graph.setItemState(nodeItem, 'click', true); // Set the state 'click' of the item to be true
  //   });

  //   // Click an edge
  //   graph.on('edge:click', (e: any) => {
  //     // Swich the 'click' state of the edge to be false
  //     const clickEdges = graph.findAllByState('edge', 'click');
  //     clickEdges.forEach((ce: any) => {
  //       graph.setItemState(ce, 'click', false);
  //     });
  //     const edgeItem = e.item; // Get the clicked item
  //     graph.setItemState(edgeItem, 'click', true); // Set the state 'click' of the item to be true
  //   });
  //   graph.data(data);
  //   graph.render();
  // }, []);
  return (
    <div className="App">
      <Graphin enabledStack= {true} data={GI_LOCAL_DATA}>
      {/* <Timebar /> */}
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
