import React from "react";
import Sidebar from "../components/Sidebar"
import LineChart from "../components/LineChart";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Piechart from '../components/PieChart'
import BarChart from "../components/BarChart";

const Crypto = () => {
  
  return (
    <>

    <Row>
      <Col sm className="p-4 box mt-3 text-center" >    <LineChart/>
</Col>


    </Row>

      

      <Row>
        <Col sm className="p-4 box mt-3 text-center">    <Piechart />
</Col>
        <Col sm className="p-4 box mt-3 text-center">      <BarChart />
</Col>
      </Row>

    </>
  );
};

export default Crypto;
