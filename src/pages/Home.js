import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Sidebar from "../components/Sidebar"
import WeatherBrief from "../components/WeatherBrief"; 
import LineChart from "../components/LineChart";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckList from '../components/checklist'
import Calender from '../components/Calender'
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>

    <Row>
      <Col sm className="p-4 box mt-3 text-center" >    <LineChart/>
</Col>

<Col sm className="p-4 box mt-3 ">    <CheckList />
</Col>
    </Row>

      

      <Row>
        <Col sm className="p-4 box mt-3 text-center">
            <div >
        Ola, What's up? <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>    
</Col>
        <Col sm className="p-4 box mt-3 text-center">      <WeatherBrief />
</Col>
      </Row>

      <Row>
        <Col sm className="p-4 box mt-3 text-center">      <Calender />
</Col>
      </Row>

    </>
  );
};

export default Home;
