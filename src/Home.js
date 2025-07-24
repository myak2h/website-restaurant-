import React from 'react';
import dounload from './download.jpeg';
import mes from './mes.jpeg';

const Home = () => {
  return <div>
    <div className="App-background">

      
      <div className="App" style={{ backgroundImage: `url(${dounload})` }}>
                      
     
        <div className="welcome-container">
  
          <div>
      <button className="nav-button">HOME</button>
      <button className="nav-button">MENU</button>
      <button className="nav-button">ABOUT</button>
      <button className="nav-button">SHOP</button>
     </div>
     <div>
      <img src={mes} className="imgm"></img>
        
      
      <div className="text-box">
      <h1>Welcome to our restorant</h1>
      <h2>"Made with love, served with warmth."<br/>
Feel at home in every bite.</h2>

     </div>
     <div>
      
     </div>
     
        </div>
     
     </div>
     
     <div className="vertical-text"> 
  {'MESOB'.split('').map((char, index) => (
    <span key={index} className="sparkle-text">{char}</span>
  ))}
  
</div>

     
    </div>
    
      
      
      
    </div>
    
    
   

  
</div>;
};

export default Home;