import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import './dashboard.less'
class Dashboard extends Component {
  render() {
    return (
      <>
        <Card title="概览" bordered={false}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor:'#29b6f6'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor:'#ab47bc'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor:'#ff7043'}}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="qf-gutter-box" style={{backgroundColor:'#43a047'}}>col-6</div>
            </Col>
          </Row>
        </Card>
        <Card title="最近浏览量" bordered={false}>

        </Card>
      </>
    );
  }
}

export default Dashboard;
