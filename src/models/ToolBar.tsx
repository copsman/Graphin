import React from 'react';
import { GraphinContext } from '@antv/graphin';
import G6 from '@antv/g6';

const defaultOptions = {
  className: 'graphin-toolbar',
  viewportClassName: 'graphin-toolbar-viewport',
  // Minimap 中默认展示和主图一样的内容，KeyShape 只展示节点和边的 key shape 部分，delegate表示展示自定义的rect，用户可自定义样式
  //type: 'default' as 'default' | 'keyShape' | 'delegate' | undefined,
  padding: 50,
  //size: [200, 120],
  delegateStyle: {
    fill: '#40a9ff',
    stroke: '#096dd9',
  },
  refresh: true,
};
export interface ToolBarProps {
  /**
   * @description Toolbar 配置项
   * @default
   */
  options?: Partial<typeof defaultOptions>;

  style?: React.CSSProperties;
}
const styles: {
  [key: string]: React.CSSProperties;
} = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: '#fff',
    boxShadow:
      '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
  },
};
let containerRef: null | HTMLDivElement = null;
const containerHeight = 120;
const ToolBar: React.FunctionComponent<ToolBarProps> = props => {
  const { graph } = React.useContext(GraphinContext);
  const { options, style = {} } = props;
  
  React.useEffect(() => {
      
    const width = graph.getWidth();
    const height = graph.getHeight();
    const padding = graph.get('fitViewPadding');

    const containerSize = [((width - padding * 2) / (height - padding * 2)) * containerHeight, containerHeight];

    const toolBarOptions = {
      container: containerRef,
      ...defaultOptions,
      size: containerSize,
      ...options,
    };

    const toolBar = new G6.ToolBar();
    graph.addPlugin(toolBar);
    return () => {
      if (toolBar && !toolBar.destroyed) {
        graph.removePlugin(toolBar);
      }
    };
  }, [options]);

  const mergedStyle = {
    ...styles.container,
    ...style,
  };
  return (
    <div
      ref={node => {
        containerRef = node;
      }}
      // @ts-ignore
      style={mergedStyle}
    />
  );
};

export default ToolBar;