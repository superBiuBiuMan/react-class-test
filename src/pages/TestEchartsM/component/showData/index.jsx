import React, { Component, createRef } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      myEchart: '',
    };
    this.echartDOM = createRef();
  }
  // 请求数据
  initData() {
    axios.get('https://api.oick.cn/api/lishi').then((res) => {
      console.log(res);
      //处理数据
      this.setState({
        data: res.data.result.map((item) => Math.round(Math.random() * 100)),
      },() => {
        this.initEchartsData();
      });
    });
  }
  //初始化echart图表
  initEchartsData(){
    const myChart = echarts.init(this.echartDOM.current);
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.state.data,
          type: 'line',
        },
      ],
    });
  }
  componentDidMount() {
    this.initData(); //初始化数据
  }
  render() {
    return (
      <div
        ref={this.echartDOM}
        style={{ width: '400px', height: '400px' }}
      ></div>
    );
  }
}
