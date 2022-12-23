import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../Assets/Logo.png";
import Discord from "./../../Assets/discord.png";
import Insta from "./../../Assets/instagram 1.png";
import Twitter from "./../../Assets/Twitter.png";
import mg from "./../../Assets/me.png";
import ss from "./../../Assets/ss.png";
import tik from "./../../Assets/tik.png";
import yt from "./../../Assets/yt.png";
export default function Footer() {
  return (

        
<div class="container-fluid">

  <footer class="text-center text-lg-start" Style="background-color: black;">
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" Style="background-color: black;">
      <a href="https://magiceden.io/item-details/Gn46ZGAYgF1gDtxwNkPCn6TUnsottyTf8AapBdWuLvhW"target="_blank"> <img src={mg} width="auto" height="30px" /> </a>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" Style="background-color:black;">
        <a href="https://solscan.io/token/Gn46ZGAYgF1gDtxwNkPCn6TUnsottyTf8AapBdWuLvhW?fbclid=IwAR1t6kbgMxIHNtE-PsRZ6nrulvPTBgVXWFG1-Eq_4NcC8XVPxIlyqPW19J0"target="_blank"><img src={ss} width="auto" height="30px" /></a>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" Style="background-color: black;">
      <a href="https://www.tiktok.com/@pixelteco"target="_blank"><img src={tik} width="auto" height="30px" /></a>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" Style="background-color: black;">
      <a href="https://www.youtube.com/channel/UCtXLP2P71F5lMyzBhq2Khlg"target="_blank"><img src={yt} width="auto" height="30px" /></a>
      </button>
    </div>
    <div class="text-center text-white p-3" Style="background-color: #181820;">
      © 2023 
      <a class="text-white" href="https://mdbootstrap.com/"/> Pixel Te.co
    </div>
    
  </footer>
  
</div>
 
  )
}
