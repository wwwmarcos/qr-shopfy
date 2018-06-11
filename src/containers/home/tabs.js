import React, { Component } from 'react'
import { SegmentedControl } from 'gestalt'

class HomeTab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemIndex: 0
    }
    this.handleItemChange = this.handleItemChange.bind(this)
  }

  handleItemChange ({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }))
  };

  render () {
    const items = [
      'You',
      'Products',
      'Sales'
    ]

    return (
      <SegmentedControl
        items={items}
        selectedItemIndex={this.state.itemIndex}
        onChange={this.handleItemChange}
      />
    )
  }
}
export default HomeTab
