import React, { Component } from 'react'
import ShowData from "./component/showData/index";
import ShowData2 from "./component/showData/index2";
import ShowData3 from "./component/showData/index3";
export default class index extends Component {
  render() {
    return (
      <div>
        <div>显示多个图表</div>
        {/* 方式1 */}
        <h1>方式1</h1>
        <div style={{ display:'flex' }}>
          {/* <ShowData2/>
          <ShowData2/>
          <ShowData2/>
          <ShowData2/> */}
        </div>
        {/* 方式2 */}
        <h1>方式2</h1>
        <div >
          <ShowData3/>
        </div>
      </div>
    )
  }
}
