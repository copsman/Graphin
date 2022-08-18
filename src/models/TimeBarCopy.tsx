import { G6, GraphinContext } from '@antv/graphin';
import React from 'react';

const defaultOptions = {
  className: 'graphin-timebar',
  viewportClassName: 'graphin-timebar-viewport',
  // Minimap 中默认展示和主图一样的内容，KeyShape 只展示节点和边的 key shape 部分，delegate表示展示自定义的rect，用户可自定义样式
  type: 'default' as 'simple' | 'trend' | undefined,
  padding: 50,
  size: [200, 120],
  delegateStyle: {
    fill: '#40a9ff',
    stroke: '#096dd9',
  },
  refresh: true,
};
export interface TimeBarProps {
  /**
   * @description 是否开启
   * @default false
   */
  visible: boolean;
  /**
   * @description TimeBar 配置项
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
    //bottom: 0,
    //left: 0,
    background: '#fff',
    boxShadow:
      '0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
  },
};
let containerRef: null | HTMLDivElement = null;
const containerHeight = 120;
const TimeBar: React.FunctionComponent<TimeBarProps> = props => {
  const { graph } = React.useContext(GraphinContext);
  const { options, style = {} } = props;
  const timeBarData:any = [];

  for (let i = 0; i < 100; i++) {
      timeBarData.push({
        date: `2020${i}`,
        value: Math.round(Math.random() * 300),
      });
    }
  React.useEffect(() => {
    const width = graph.getWidth();
    const height = graph.getHeight();
    const padding = graph.get('fitViewPadding');

    const containerSize = [((width - padding * 2) / (height - padding * 2)) * containerHeight, containerHeight];

    const timeBarOptions:any = {
      container: containerRef,
      ...defaultOptions,
      size: containerSize,
      ...options,
      x: 0,
        y: 0,
        width,
        height: 150,
        padding: 10,
        type: 'trend',
        trend: {
          data: timeBarData,
        },
    };

    const timeBar = new G6.TimeBar(timeBarOptions);

    graph.addPlugin(timeBar);
    console.log(graph)
    return () => {
      if (timeBar && !timeBar.destroyed) {
        //graph.removePlugin(timeBar);
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

export default TimeBar;