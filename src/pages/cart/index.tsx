import { getCurrentInstance } from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'


class CartIndex extends Component {
  current = getCurrentInstance()

  componentWillMount () {
    // getCurrentInstance().router 和 this.$router 和属性一样
    console.log('cart---index', this.current.router)
  }
  render() {
    return <View>购物车</View>
  }
}

export default CartIndex