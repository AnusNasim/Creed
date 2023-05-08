import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header2 from "../newHeader/AppHeader";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Form from "react-bootstrap/Form";
import { FadeLoader } from 'react-spinners';
import "./trackorder.scss";
import TrackStepper from "./TrackStepper";
import { useState } from "react";
import { getOrderDetailsById, getOrderDetailsByNumber } from "../CreateOrder/service";
import { useNavigate, useParams } from "react-router-dom";

const handleClick = function handleClick(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  event.preventDefault();
};

export default function TrackOrder() {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState<any>(useParams().orderNumber);
  const [order, setOrder] = useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    getOrderDetailsByNumber(orderNumber).then(res => {
      setOrder(res.info)
      setLoading(false)
    })
  },[])
  const searchOrder=()=>{
    setLoading(true)
    getOrderDetailsByNumber(orderNumber).then(res => {
      setOrder(res.info)
    setLoading(false)
    })
  }
  return (

    <div className=" createOrderContainer">
      {
                   loading && <div style={{ backdropFilter: 'blur(5px) !important', WebkitBackdropFilter: 'blur(5px) !important' }}>
                   <div style={{
                     position: 'fixed',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      opacity: 0.9,
                      backgroundColor: '#fff',
                      zIndex: 99,
                    }}>
                      <FadeLoader
                        color="teal"

                        loading={loading}
                        
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        
                      />
                    </div>

                  </div>
                  }
      <div>
        <div className="top_navbar ">
          <Header2 />
        </div>
      </div>
      <div
        className="main_content"
      // style={{border:'2px solid blue'}}
      >

        <Row className="mt-5"
        // style={{border:'2px solid red'}}
        >
          <div className="bredcrumb" role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="breadcrumb-grey small  mid-bold">
                Home
              </Link>
              <Typography className="small breadcrumb-black mid-bold">Track Order</Typography>
            </Breadcrumbs>
          </div>
        </Row>

        <Row
        // style={{ border: "2px solid red" }}
        >
          <Typography textAlign="center" variant="h3" className="mid-bold trackorder-text">
            Track your <span className="text-red"> order</span>
          </Typography>
        </Row>



        <Row className="mt-4 d-flex justify-content-center"
        // style={{ border: "2px solid red" }}
        >

          <Col className="col-xl-4 col-lg-4 col-sm-6 col-10"
          // style={{ border: "2px solid green" }}
          >
            <Form.Control
              type="text"
              value={orderNumber}
              className="Track-Input "
              onChange={(e)=>{setOrderNumber(e.target.value)}}
            />
          </Col>
          <Col className="col-xl-2 col-lg-4 col-sm-4 col-10 d-flex justify-content-center "
          // style={{ border: "2px solid green" }}
          >
            <Button
            onClick={searchOrder}
              sx={{ pl: 3, pr: 3 }}
              className=" track-Btn bg-red text-white"
            >
              Track Order
            </Button>
          </Col>

        </Row>


        <Row className="bg-white mt-4 pt-5 pb-5 col-xl-8 m-auto">
          <Col>
            <Row className="d-flex justify-content-center" >

              <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-8 d-flex justify-content-center"
              // style={{ border: "2px solid green" }}
              >
                <Typography variant="h6" className="mid-bold ">
                  Order Tracking
                </Typography>
              </Col>
              <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3"
              // style={{ border: "2px solid green" }}
              >
                <Button
                  onClick={()=>{navigate('/manageOrder')}}
                  sx={{ pl: 4, pr: 4, pt: 1.5, pb: 1.5 }}
                  className=" manage-order-Btn bg-red text-white"
                >
                  Manage Order
                </Button>
              </Col>

            </Row>
            <Row className="track-stepper ">
              <Col className="track-box" style={{marginLeft:'30%'}} >
                {order && <TrackStepper order={order}/>}
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center"
              // style={{ border: "2px solid green" }}
              >
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
      
    </div>

   



  );
}
