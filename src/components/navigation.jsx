import { render } from "@testing-library/react";
import { Header } from "./header";

export const Navigation = (props) => {
   
  return (

 <nav class="navbar navbar-expand-lg bg-dark  text-white">
  <div class="container">
    <a class="navbar-brand" href="#page-top">DApps</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0"> 
                    <li class="nav-item"> 
                      <a class="nav-link" href='#services'>Services</a>
                    </li>

                    <li class="nav-item"> 
                      <a  class="nav-link " href='#team'>Team</a>
                    </li>

                    <li class="nav-item"> 
                      <a class="nav-link " href='https://web3-docs.azurewebsites.net/'>Document</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link " href='https://alginis-nft.netlify.app/'>NFT</a>
                    </li>

                    <li class="nav-item"> 
                      <a class="nav-link " href='#'>VOTING</a>
                    </li>
      </ul>      
    </div>
  </div>
</nav>
  )
}
