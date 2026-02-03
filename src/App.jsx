import React from 'react';


const App = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className='top'>
           <img src={props.logo} />
           <button>save <img src={props.save} /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.application_status}</span></h3>
          <h4>{props.position}</h4>
          <div className="tag">
          <button >{props.working_hour}</button>
          <button>{props.working_hour2}</button>
          </div>
        </div>
         <div className="bottom">
          <p>{props.payment} <span>{props.address}</span></p>
          <button className='btn'>Apply now</button>
        </div>
      </div>
     
    </div>
  );
}

export default App;

