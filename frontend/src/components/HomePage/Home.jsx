import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../../src/components/HomePage/Home.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import bgimage from "../../../public/Designer (1).png";

import leftArrowimage from "../../../public/right-arrow (1).png";
import metalWaste from "../../../public/waste.png";
import plasticWaste from "../../../public/pollution.png";
import paperWaste from "../../../public/paper-bin.png";
import eWaste from "../../../public/e-waste.png";
// import bgimage from "../../../public/bgimage.png";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ height: "200vh" }}>
      {/*These div handles the Top image */}
      <div className="background">
        <img
          src={bgimage}
          alt="Loading"
          style={{
            width: "100%",
            height: "65vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        />
      </div>
      <Card
        style={{
          display: "flex",
          backgroundColor: "white",
          // background: "linear-gradient(135deg, #ECE9E6 0%, #FFFFFF 100%)", // Soft gradient
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",

          margin: "10px",
          borderRadius: "1.2 rem 1.2rem 0 0",
          boxShadow: "0 0 9px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          {/* <div
            style={{
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "lighter",
            }}
          >
            City:
          </div>
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              style={{ color: "black" }}
            >
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Location"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Mumbai</MenuItem>
              <MenuItem value={2}>Delhi</MenuItem>
              <MenuItem value={3}>Bangalore</MenuItem>
              <MenuItem value={4}>Hyderabad</MenuItem>
              <MenuItem value={5}>Ahmedabad</MenuItem>
              <MenuItem value={6}>Chennai</MenuItem>
              <MenuItem value={7}>Kolkata</MenuItem>
              <MenuItem value={8}>Surat</MenuItem>
              <MenuItem value={9}>Pune</MenuItem>
              <MenuItem value={10}>Jaipur</MenuItem>
            </Select>
          </FormControl> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
  className="transfer"
  sx={{
    width: 200,
    height: 250,
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    backdropFilter: "blur(10px)",
    margin: "10px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out",
    
  }}
>
  <div className="icon">
    <img src={paperWaste} alt="Paper Waste" />
  </div>
  <div className="Name">Paper Waste</div>
  <div className="Description">
    Perfect for collecting paper wastes quickly and efficiently.
  </div>
</Card>


    <Card
            className="transfer"
            sx={{
              // backgroundColor: "grey",
              width: 200,
              height: 250,
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              backdropFilter: "blur(10px)",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <div className="icon">
              <img src={metalWaste} width={100} alt="" />
            </div>
            <div className="Name">Metal Waste</div>
            <div className="Description">
              <div className="Description">
                Gathering metal wastes from urban and industrial areas.{" "}
              </div>
            </div>
          </Card>
          <Card
            className="transfer"
            sx={{
              // backgroundColor: "grey",
              width: 200,
              height: 250,
              backgroundColor: "#f5f5f5",
              transition: "transform 0.3s ease-in-out",
              
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              backdropFilter: "blur(10px)",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <div className="icon">
              <img src={plasticWaste} width={100} alt="" />
            </div>
            <div className="Name">Plastic Waste</div>
            <div className="Description">
              Suitable for transporting plastic wastes and other recyclables.{" "}
            </div>
          </Card>
          <Card
            className="transfer"
            sx={{
              // backgroundColor: "grey",
              width: 200,
              height: 250,
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              backdropFilter: "blur(10px)",
              margin: "10px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <div className="icon">
              <img src={eWaste} width={100} alt="" />
            </div>
            <div className="Name">E-Waste</div>
            <div className="Description">
              Best for handling bulk wastes including glass and e-waste.{" "}
            </div>
          </Card>
          
        </div>
      </Card>

        

      <div style={{ paddingTop: "25px", margin: "10px" }}>
        <div
          style={{
            fontFamily: "sans-serif",
            color: "grey",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Our Services
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "10%",
            width: "80%",
            gap: "20px",
            padding: "10px",
            overflowX: "scroll",
            overflowY: "hidden",
            transition: "3s",
            scrollbarWidth: "hide",
            scrollbarColor: "rgba(51,51,51,.24) #fff",
          }}
        >
          <Card
            sx={{
              width: "25rem",
              height: "20rem",
              margin: "0.7rem",
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
              background: "linear-gradient(to right, purple, red)",
              transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker1.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Clean-Up Champions
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "white",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Recycling for a Greener Tomorrow &quot;
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "2rem",
                }}
              >
                <img src={leftArrowimage} alt="" />
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              minWidth: 300,
              maxHeight: 500,
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
              
              transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker2.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: 700 }}
              >
                Waste Warriors
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "black",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Turning Trash into Treasure&quot;
              </Typography>
            </CardContent>
            
          </Card>
          <Card
            sx={{
              minWidth: 300,
              maxHeight: 500,
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
             transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker3.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: 700 }}
              >
                Eco Savers
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "black",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Cleaning the Streets, Saving the Planet&quot;
              </Typography>
            </CardContent>
            
          </Card>
          <Card
            sx={{
              minWidth: 300,
              maxHeight: 500,
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
              transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker4.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: 700 }}
              >
                Trash Transformers
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "black",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Making Waste Work&quot;
              </Typography>
            </CardContent>
            
          </Card>
          <Card
            sx={{
              minWidth: 300,
              maxHeight: 500,
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
             transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker5.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: 700 }}
              >
                Urban Recyclers
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "black",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Keeping Our Cities Clean&quot;
              </Typography>
            </CardContent>
           
          </Card>
          <Card
            sx={{
              minWidth: 300,
              maxHeight: 500,
              borderRadius: "1.4rem",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0, .08)",
               transition: "transform 0.3s ease-in-out",
              
            }}
          >
            <CardMedia
              sx={{ height: 50, borderRadius: "2.4rem" }}
              image="/static/images/cards/ragpicker6.jpg"
              title="Rag Picker"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontWeight: 700 }}
              >
                Green Guardians
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "2rem",
                  color: "black",
                  letterSpacing: ".02rem",
                }}
              >
                &quot;Protecting the Environment, One Step at a Time&quot;
              </Typography>
            </CardContent>
            
          </Card>
        </div>
      </div>

      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#030815",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <h1
            style={{
              fontFamily: "Titillium Web,sans-serif",
              color: "white",
              margin: "10px",
              border: "2px",

              // justifyContent: "center",
            }}
          >
            And thanks to you, we are growing each & every day!
          </h1>
          <div>
            <p
              style={{
                // backgroundColor: "rgba(51, 51, 51, 0.24)",
                // color: "#ffff",
                width: "200px",
                background:
                  "linear-gradient(83.32deg, #f2c94c 10.66%, #ffe9c4 20.12%, #f29c4c 30.41%, #f2c44c 47.29%, #ffb800 62.11%, #fff1d0 74.46%, #f2b04c 89.69%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                borderSpacing: "10px",
                margin: "30px",
                fontFamily: "sans-serif",
                padding: "20px",
                border: "2px solid #f2c94c ",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  fontFamily: "sans-serif",
                  padding: "2px",
                }}
              >
                Eco Connect
              </div>
              <br />
              &quot; Find Your Rag Picker, Easily. Connecting Communities, One
              Recycle at a time&quot;
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                borderRight: "2px dotted grey",
              }}
            >
              <div
                className="cities"
                style={{
                  color: "white",
                  fontWeight: "200",
                  fontSize: "1.7rem",
                }}
              >
                20+
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                cities
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                borderRight: "2px dotted grey",
              }}
            >
              <div
                className="driver"
                style={{
                  color: "white",
                  fontWeight: "200",
                  fontSize: "1.7rem",
                }}
              >
                5 Lakh+
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "px",
                  fontWeight: "700",
                }}
              >
                Driver Partners
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                borderRight: "2px dotted grey",
              }}
            >
              <div
                className="customer"
                style={{
                  color: "white",
                  fontWeight: "200",
                  fontSize: "1.7rem",
                }}
              >
                1 Crore+
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Customers
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div
                className="trips"
                style={{
                  color: "white",
                  fontWeight: "200",
                  fontSize: "1.7rem",
                }}
              >
                10 Crore+
              </div>
              <div
                style={{
                  color: "grey",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Trips
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
