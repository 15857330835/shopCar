import React from 'react'
import { List, Stepper } from 'antd-mobile';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
    };
  }
  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  render() {
    return (
      <List>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: '100%' }}
              showNumber
              max={10}
              min={1}
              value={this.state.val}
              onChange={this.onChange}
            />}
        >
        </List.Item>
      </List>
    );
  }
}