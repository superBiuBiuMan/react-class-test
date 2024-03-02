import React, { Component, createRef } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';

class TestEcharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: '测试数据',
      list1: [],
    };
    this.echart1 = createRef();
  }
  componentDidMount() {
    this.initEchartsData();
  }
  // 请求并初始化echarts数据
  initEchartsData() {
    axios.get('https://api.oick.cn/api/lishi').then((res) => {
      console.log(res);
      //处理数据
      this.setState(
        {
          list1: res.data.result.map((item) => Math.round(Math.random() * 100)),
        },
        () => {
          const myChart = echarts.init(this.echart1.current);
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
                data: this.state.list1,
                type: 'line',
              },
            ],
          });
        },
      );
    });
  }

  render() {
    return (
      <div>
        {/* id="myChart" */}
        <div
          ref={this.echart1}
          style={{ width: '400px', height: '400px' }}
        ></div>
        <div>{this.state.testData}</div>
      </div>
    );
  }
}

export default TestEcharts;
