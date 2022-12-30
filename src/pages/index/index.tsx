import { Component } from 'react'
import { View, Button, Text, Image } from '@tarojs/components'

import './index.scss'

interface IProps {

}
interface IState {
  /**
   * 非推荐下的商品数据
   */
  [key: string]: any
}
class Index extends Component<IProps, IState>  {
  state: IState = {
    // eslint-disable-next-line react/no-unused-state
    list: [
      {
        id: '001',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/69906/36/23532/167062/639f19beEbb1d3f34/3be471e235ffa563.png'
      },
      {
        id: '002',
        url: 'https://images.ydjia.cn/ydjia-merchant-manager/999999/20221220/9557e4a556ff4b7b85a0d9600272eaa1.jpg'
      },
      {
        id: '003',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/160100/24/33274/171055/639f19bdEe6210f95/5864b1d670c29560.png'
      },
      {
        id: '004',
        url: 'https://m11.360buyimg.com/babel/s1065x144_jfs/t1/91949/23/31209/169594/63a41eb3E6890cbf0/cb0e8333047f90dd.png'
      },
      {
        id: '005',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/69906/36/23532/167062/639f19beEbb1d3f34/3be471e235ffa563.png'
      },
      {
        id: '006',
        url: 'https://images.ydjia.cn/ydjia-merchant-manager/999999/20221220/9557e4a556ff4b7b85a0d9600272eaa1.jpg'
      },
      {
        id: '007',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/160100/24/33274/171055/639f19bdEe6210f95/5864b1d670c29560.png'
      },
      {
        id: '008',
        url: 'https://m11.360buyimg.com/babel/s1065x144_jfs/t1/91949/23/31209/169594/63a41eb3E6890cbf0/cb0e8333047f90dd.png'
      },
      {
        id: '009',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/69906/36/23532/167062/639f19beEbb1d3f34/3be471e235ffa563.png'
      },
      {
        id: '010',
        url: 'https://images.ydjia.cn/ydjia-merchant-manager/999999/20221220/9557e4a556ff4b7b85a0d9600272eaa1.jpg'
      },
      {
        id: '011',
        url: 'https://m11.360buyimg.com/babel/jfs/t1/160100/24/33274/171055/639f19bdEe6210f95/5864b1d670c29560.png'
      },
      {
        id: '012',
        url: 'https://m11.360buyimg.com/babel/s1065x144_jfs/t1/91949/23/31209/169594/63a41eb3E6890cbf0/cb0e8333047f90dd.png'
      }
    ]
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }



  render() {
    const { list } = this.state
    return (
      <View className='index'>
        {
          list.map(item => <Image className='_img' lazyLoad key={item.id} mode='widthFix' src={item.url} />)
        }
      </View>
    )
  }
}

export default Index
