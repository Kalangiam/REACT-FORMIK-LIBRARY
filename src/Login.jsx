import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">

            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4 font-weight-bold">LIBRARY MANAGEMENT SYSTEM</h1>
                  </div>
                  <form className="user">
     
                
                    <Link to ="/portal/blogs" class="btn btn-info btn-user btn-block">
                      Click here
                    </Link>
                   
                
                  </form>
                  <hr />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}


export default Login