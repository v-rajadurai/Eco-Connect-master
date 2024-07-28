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
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={tamilnadu} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover', // This ensures the image covers the entire card
            }} alt="Tamil Nadu" />
          </div>
        </Card>
        <h5>Tamil Nadu</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={ladakh} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Jammu & Kashmir" />
          </div>
        </Card>
        <h5>Jammu & Kashmir</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={kerala} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Kerala" />
          </div>
        </Card>
        <h5>Kerala</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={delhi} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Delhi" />
          </div>
        </Card>
        <h5>Delhi</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={taj} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Uttar Pradesh" />
          </div>
        </Card>
        <h5>Uttar Pradesh</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={maharashtra} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Maharashtra" />
          </div>
        </Card>
        <h5>Maharashtra</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={goa} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Goa" />
          </div>
        </Card>
        <h5>Goa</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={kolkata} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Kolkata" />
          </div>
        </Card>
        <h5>Kolkata</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={karnataka} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Karnataka" />
          </div>
        </Card>
        <h5>Karnataka</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={Pondicherry} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Pondicherry" />
          </div>
        </Card>
        <h5>Pondicherry</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={Pondicherry} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Pondicherry" />
          </div>
        </Card>
        <h5>Pondicherry</h5>
      </div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <Card
          className="transfer"
          sx={{
            width: 150,
            height: 150,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <img src={Pondicherry} style={{
              width: '170%',
              height: '170%',
              objectFit: 'cover',
            }} alt="Pondicherry" />
          </div>
        </Card>
        <h5>Pondicherry</h5>
      </div>
    </div>
  </div>
</div>
            <div className="works">

        <Box 
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '4rem',
          
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', margin: '2rem 0' }}>
          How it works?
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item lg={4}>
            <Looks1Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Sign up</Typography>
            <Typography>Fill the form above to join us.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks2Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Collect Rag</Typography>
            <Typography>Collect rag from your area.</Typography>
          </Grid>
          <Grid item lg={4}>
            <Looks3Icon color="primary" sx={{ fontSize: '3rem' }} />
            <Typography variant="h5">Get paid</Typography>
            <Typography>Get paid for the waste you collect.</Typography>
          </Grid>
        </Grid>
        
      </Box>
        {/* </div>
      </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default RagPosting;
