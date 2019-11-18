import React from 'react'
import { Tabs } from 'antd-mobile';
import Content from './Content';

export default class Slider extends React.Component {
  renderContent = tab =>
    (<div style={{ height: '100%', backgroundColor: '#fff' }}>
      { tab.floors.map( (item,index) => <Content key= { index } { ...item }></Content> ) }
    </div>);

  render() {
    const { data } = this.props
    return (
        <Tabs tabs={data} tabBarPosition='left' tabDirection='vertical' renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />}>
          {this.renderContent}
        </Tabs>
    );
  }
}
