import React from "react";
import "./ragPosting.css";
import {
 Card,
 Box,
  Typography,
  Grid,
  
} from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import RagPaper from "./RagPaper";
import Footer from "../footer/Footer";
import tamilnadu from "../support/meenakshi_temple.jpg";
import ladakh from "../support/ladakh.jpg";
import kerala from "../support/kerala.jpg";
import taj from "../support/tajmahal.jpg";
import delhi from "../support/indiagate.jpg";
import maharashtra from "../support/gatewayofindia.jpg";
import kolkata from "../support/kolkata.jpg";
import goa from "../support/goa.jpg";
import karnataka from "../support/karnataka.jpg";
import Pondicherry from "../support/Pondicherry.jpg";
import Uttarakhand from "../support/Uttarakhand.jpg";
import Nagaland from "../support/Nagaland.jpg";

const RagPosting = () => {
  return (
    <div className="outer-container">
      {/* <Navbar /> */}
      <div className="container">
        <div className="text-container">
          <div className="line1">
            <h1>The Hassle Free Rag Picker Services in India</h1>
          </div>
          <div className="line2">
            <h1>
              Trust Eco-Connect for efficient rag picker services in India. Our
              reliable ragger connect based service ensures safe and timely
              collection of your recyclable waste
            </h1>
          </div>
        </div>
        <RagPaper />
      </div>
      <div className="about">
        
        <div className="why-rag" >
          <h2>Why use Eco-connect?</h2>
          {/* <Grid item xs={12} sm={6} md={4} lg={3}> */}

          <div className="use">
            <div className="use1">
              <h3>Easy Connect with Rag Pickers</h3>
              <p>
                Our rag pickers are available around the clock to collect your recyclable waste conveniently.
              </p>
            </div>
            <div className="use2">
              <h3>Door to Door Services</h3>
              <p>
                Enjoy the convenience of our 24/7 door-to-door recyclable waste collection service.
              </p>
            </div>
          </div>
          <div className="use">
            <div className="use3">
              <h3>Get Anything sell</h3>
              <p>
                Our rag pickers help you sell your recyclable waste at any time.
              </p>
            </div>
            <div className="use4" style={{ marginLeft: "12vh" }}>
              <h3>Negotiable Price</h3>
              <p>
                We offer flexible pricing for your recyclable waste, ensuring the best deal.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="area2">
  <div className="service">
    <h2>Areas we provide service</h2>
    <div className="service-area">
      <Grid item sx={12}>
        <div className="service-card">
          <Card className="transfer">
            <div className="icon">
              <img src={tamilnadu} alt="Tamil Nadu" />
            </div>
          </Card>
          <h5>Tamil Nadu</h5>
        </div>
      </Grid>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={ladakh} alt="Jammu & Kashmir" />
          </div>
        </Card>
        <h5>Jammu & Kashmir</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={kerala} alt="Kerala" />
          </div>
        </Card>
        <h5>Kerala</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={delhi} alt="Delhi" />
          </div>
        </Card>
        <h5>Delhi</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={taj} alt="Uttar Pradesh" />
          </div>
        </Card>
        <h5>Uttar Pradesh</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={maharashtra} alt="Maharashtra" />
          </div>
        </Card>
        <h5>Maharashtra</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={goa} alt="Goa" />
          </div>
        </Card>
        <h5>Goa</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={kolkata} alt="Kolkata" />
          </div>
        </Card>
        <h5>Kolkata</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={karnataka} alt="Karnataka" />
          </div>
        </Card>
        <h5>Karnataka</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={Pondicherry} alt="Pondicherry" />
          </div>
        </Card>
        <h5>Pondicherry</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={Uttarakhand} alt="Uttarakhand" />
          </div>
        </Card>
        <h5>Uttarakhand</h5>
      </div>
      <div className="service-card">
        <Card className="transfer">
          <div className="icon">
            <img src={Nagaland} alt="Nagaland" />
          </div>
        </Card>
        <h5>Nagaland</h5>
      </div>
    </div>
  </div>
</div>


<Footer />
    </div>
  );
};

export default RagPosting;
