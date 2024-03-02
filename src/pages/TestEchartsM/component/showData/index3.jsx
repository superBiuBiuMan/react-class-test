import React, { Component, createRef } from 'react';
import * as echarts from 'echarts';
import axios from 'axios';
export default class index3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myEchartList: [], //实例化echart列表
      data1: [],
      data2: [],
      data3: [],
      data4: [],
    };
    this.allRef = []; //存储所有的ref
  }
  componentDidMount() {
    this.setState({
      //实例化echart
      myEchartList: this.allRef.map((item) => echarts.init(item)),
    });
    //获取数据A
    this.initDataA();
    //获取数据B
    this.initDataB();
  }
  initDataA = () => {
    axios.get('https://api.oick.cn/api/lishi').then((res) => {
      console.log(res,'来自initDataA');
      let data1 = res.data.result.map(() => Math.round(Math.random() * 100));
      let data2 = res.data.result.map(() => Math.round(Math.random() * 100));
      //处理数据
      this.setState({
        data1,
        data2,
      });
      this.state.myEchartList[0].setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data:data1,
            type: 'line',
          },
        ],
      });
      this.state.myEchartList[1].setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data:data2,
            type: 'line',
          },
        ],
      });
    });
  };
  initDataB = () => {
    axios.get('https://api.oick.cn/api/lishi').then((res) => {
      console.log(res,'来自initDataB');
      let data3 = res.data.result.map(() => Math.round(Math.random() * 100));
      let data4 = res.data.result.map(() => Math.round(Math.random() * 100));
      //处理数据
      this.setState({
        data3,
        data4,
      });
      this.state.myEchartList[2].setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data:data3,
            type: 'line',
          },
        ],
      });
      this.state.myEchartList[3].setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data:data4,
            type: 'line',
          },
        ],
      });
    });
  };
  handleUpdate = () => {
    this.initDataA();
  };
  render() {
    return (
      <>
        <button onClick={this.handleUpdate}>点击我更新2个图表数据</button>
        <div
          style={{ display: 'flex' }}
        >
          <div
            ref={(node) => {
              this.allRef.push(node);
            }}
            style={{ width: '401px', height: '400px' }}
          ></div>
          <div
            ref={(node) => {
              this.allRef.push(node);
            }}
            style={{ width: '402px', height: '400px' }}
          ></div>
          <div
            ref={(node) => {
              this.allRef.push(node);
            }}
            style={{ width: '403px', height: '400px' }}
          ></div>
          <div
            ref={(node) => {
              this.allRef.push(node);
            }}
            style={{ width: '404px', height: '400px' }}
          ></div>
        </div>
      </>
    );
  }
}
