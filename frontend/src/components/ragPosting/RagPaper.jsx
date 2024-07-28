import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link
  // FormControl,
  // InputLabel,
  // MenuItem,
  // Paper,
  // Select,
  // TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ragPaper.css";
import FindPicker from "./FindPicker";
// import axios from 'axios';
const RagPaper = () => {
  // const [estimatedvalue, setEstimatedvalue] = useState(0);
  // const [address, setAddress] = useState("");
  // const [phn, setPhn] = useState("");
  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState('');
  // const [ragselect, setRagselect] = useState("");
  const [openDialog, setOpenDialog] = React.useState(false)

  const handleClick = () => {
    setOpenDialog(true)
  }

  // useEffect(() => {
  //   console.log(quantity);
  //   console.log(estimatedvalue);
  //   setEstimatedvalue(30 * quantity);
  //   switch (ragselect) {
  //     case "metal":
  //       setEstimatedvalue(30 * quantity);
  //       break;
  //     case "paper":
  //       setEstimatedvalue(10 * quantity);
  //       break;
  //     case "Plastic":
  //       setEstimatedvalue(15 * quantity);
  //       break;
  //     case "Glass":
  //       setEstimatedvalue(25 * quantity);
  //       break;
  //     case "Mixed":
  //       setEstimatedvalue(20 * quantity);
  //       break;
  //     case "Other":
  //       setEstimatedvalue(0);
  //       break;
  //     case "":
  //       setEstimatedvalue(0);
  //       break;
  //   }
  //   console.log(name,phn,address,quantity,ragselect,estimatedvalue);
  // }, [quantity, ragselect,estimatedvalue]);

  return (
    <div
      style={{
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        height: '30%',
        position: 'relative',
        top: '30%',
      }}
    >
      
      <Button variant="contained"
            fullWidth component={FindPicker} to="/findPicker">Find Pickers</Button>
      
    </div>
  )
};

export default RagPaper;