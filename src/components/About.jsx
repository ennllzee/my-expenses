import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={process.env.PUBLIC_URL+'/bg1.jpg'} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title"><b>Developer information</b> </h5>
            <table><tr>
              <td><img src={process.env.PUBLIC_URL+'/palm.jpg'} alt="" width="150"/></td>
              <td>
                <p> &nbsp; &nbsp; Nattha Chaiyarin (610610580)</p>
                <p> &nbsp; &nbsp; This app use Google Firebase as backend.</p>
              </td>
            </tr></table>
            <br/>
            <Link to="/my-expenses/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
