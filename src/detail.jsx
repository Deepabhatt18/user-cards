import React from 'react';

const Detail = (props) => {
  return (
    <div className="card">

      <div className='top'>
        <img src={props.logo} />
        <button>save <img src={props.save} /></button>
      </div>

      <div className="center">
        <h3>
          {props.companyName}
          <span>{props.postedDay}</span>
        </h3>

        <h4>{props.role}</h4>

        <div className="tag">
          <button>{props.timing1}</button>
          <button>{props.timing2}</button>
        </div>
      </div>

      <div className="bottom">
        <p>
          {props.payPerHour}
          <span>{props.address}</span>
        </p>
        <button className='btn'>Apply now</button>
      </div>

    </div>
  );
}

export default Detail;

