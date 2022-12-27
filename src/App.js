import AtomLogo from "./assets/image/atom-logo.png";
import InstaLogo from "./assets/image/insta-logo.png";
import FacebookLogo from "./assets/image/facebook-logo.png";
import LinkedInLogo from "./assets/image/linked-in-logo.png";
import TwitterLogo from "./assets/image/twitter-logo.png";
import './App.css';

function App() {
  return (
     <div class="container">
           
           
            <img src={AtomLogo} width="50%" className="main_image" alt="logo"/>
            
            <div className="s_logo">
              <a href="https://www.instagram.com/atomclassindia/" target="_blank">
                   <img src={InstaLogo} width="10%" className="mg"/>
              </a>
              
               <a href="https://www.facebook.com/atomclassindia" target="_blank">
                  <img src={FacebookLogo} width="10%" className="mg"/>
               </a>

              <a href="https://www.linkedin.com/company/atomclass/" target="_blank">
                 <img src={LinkedInLogo} width="10%"  className="mg"/>
              </a>  
                   
               <a href="https://twitter.com/AtomClass" target="_blank">
                  <img src={TwitterLogo} width="10%"  className="mg"/>
               </a>
                   
            </div>
            
    </div>
  );
}

export default App;
