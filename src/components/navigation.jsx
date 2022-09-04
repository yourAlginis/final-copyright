import { render } from "@testing-library/react";
import { Header } from "./header";

export const Navigation = (props) => {
   
  return (

 <nav class="navbar navbar-expand-lg bg-dark  text-white">
  <div class="container">
  <img src=" /img/web.svg" width={80} height={80} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0"> 
                  
                    <li class="nav-item"> 
                      <a class="nav-link " href='https://web3-docs.azurewebsites.net/'>Document</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link " href='https://alginis-nft.netlify.app/'>NFT</a>
                    </li>

                    <li class="nav-item"> 
                      <a class="nav-link " href='https://fanil-voting-blockchaine.vercel.app/voting'>VOTING</a>
                    </li>
      </ul>      
    </div>
  </div>
</nav>
  )
}
