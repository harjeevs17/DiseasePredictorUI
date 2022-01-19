import React from "react";
import {Mark} from "../assets/human.js";
import Logo from "../assets/logo.png";
import Button from 'rsuite/Button';
import { useEffect, useState } from "react";
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import Navbar from 'rsuite/Navbar';
import "../css/main.css";
export const Main = ()=>{
    const [Symp,setSymp] = useState([]);
    const handleChange = ()=>{
        console.log("clicked"+Symp);
    }
    return(
       <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
            <img src= {Logo} width="50" />
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content className="inner">  <Mark symp1 = {setSymp} symp2 = {Symp}/></Content>
        
      </Container>
    )
}

