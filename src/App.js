import { useState } from 'react';
import photo from "./Img/image0.jpeg";
import './App.css';

function App() {

     const[skills, setSkills] = useState("My Name is Winta")

     const handleName =()=> {
          setSkills( " My Name is winta")
     }

     const handleSkills =()=> {
          setSkills("I am a Frontend Developer")
     }
     const [count, setCount] = useState(0)

     return(
     <>
       
      <main className="container">
           <div className="page"> 
              <img src={photo} alt="page" className="photo"/>
           </div>
           <h1>Hi!</h1>
           <div className="work">
                <div >{skills}</div>
                <div className="buttons">
                      <button onClick={handleName} class="Name">Name</button>
                      <button onClick={handleSkills} class="Skills">Skills</button>
          </div>
     </div>
     <div className="Loves">
           <div>{count}</div>
           </div>
              <button onClick={() => setCount(count+1)}>
                  <i class="fas fa-heart"></i>
              </button>
           <div>
      </div>

     <div className="socialmedia">
          <a href="https://ww.facebook.com/Winta.Meharena.581/" target="blank">
              <i class="fab fa-facebook-f"></i>
           </a>
      </div>
    </main>
  </>
  )
}
   export default App
