import { TextField } from "@mui/material";
import React, { useState } from "react";
import useSWR from "swr";
import { getData, postDataJwt } from "../services/axios.service";
import { Gettoken } from "../utils/helper";
import {useNavigate} from 'react-router-dom'

function Addrooms() {
  const [roomname, setRoomname] = useState("");
  const [address, setaddress] = useState("");
  const [rentperday, setRentperday] = useState();
  const [maxpeople, setMaxpeople] = useState();
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState();
  const [roomtype, setroomtype] = useState("");
  const [imageone, setimageone] = useState("");
  const [imagetwo, setimagetwo] = useState("");
  const [imagethree, setimagethree] = useState("");
  const token = Gettoken();

  const navigate = useNavigate()

  async function addRoom() {
    const room = {
      name:roomname,
      address:address,
      maxPeople:maxpeople,
      phoneNumber:number,
      pricePerDay:rentperday,
      image:[imageone, imagetwo, imagethree],
      roomType:roomtype,
      description:description,
    };

    console.log(room);

    const resp = await postDataJwt("/room/createroom", token, room);
    if (resp.status) {
      navigate("/admin")
    } else {
      console.log("Room canot be added");
    }
  }

  return (
    <>
      <div className="container p-8 mx-auto">
        <div className="flex flex-col gap-2 p-2 bg-white">
          <TextField
            id="outlined-basic"
            label="Roomname"
            variant="outlined"
            
            onChange={(e) => {
              setRoomname(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="address"
            variant="outlined"
       
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Rent per day"
            variant="outlined"
         
            onChange={(e) => {
              setRentperday(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Max People"
            variant="outlined"
     
            onChange={(e) => {
              setMaxpeople(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
         
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
       
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Room type"
            variant="outlined"
        
            onChange={(e) => {
              setroomtype(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="ImageURL one"
            variant="outlined"
       
            onChange={(e) => {
              setimageone(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="ImageURL two"
            variant="outlined"
       
            onChange={(e) => {
              setimagetwo(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="ImageURL three"
            variant="outlined"
         
            onChange={(e) => {
              setimagethree(e.target.value);
            }}
          />
        </div>
        <div className="pt-1">
          <button className="p-2 bg-green-400 rounded-md" onClick={addRoom}>
            Add room
          </button>
        </div>
      </div>
    </>
  );
}

export default Addrooms;
