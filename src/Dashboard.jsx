import React from 'react'
import Card from './Card'
function Dashboard() {
    let cards = [
        {
            title: "Earnings(Monthly)",
            type: "currency"
        },
        {
            title: "Earnings(Annual)",
            type: "currency"
        }, {
            title: "Tasks",
            type: "progress"
        }, {
            title: "Pending request",
            type: "number"
        }
    ]
    return (
        <div className="container-fluid">
    
            <h1 className="h3 mb-0 text-gray-800 font-weight-bold" >Dashboard</h1><br></br>
            <div className='row'>
                <div className='col-7'>
                    <img src="https://www.socinvestigation.com/wp-content/uploads/2023/01/choosing_best_development_team.png"></img>
                </div>
                <div className='col-5'>
                    <p><b>
In React, API calls using Axios are essentially sending HTTP requests to a server to retrieve or manipulate data. Axios is a popular JavaScript library used for making asynchronous HTTP requests to REST endpoints.</b></p>
                <li><b>Go to List page and register your user details</b></li><br></br>
                <li><b>You can Edit and Delete your created details</b></li><br></br>
                <li><b>While fetching data, wait untill the data gets loaded</b></li>
                <li><b>The API used here is a <i className='text-danger'>mockapi</i></b></li>
                </div>


            </div>
        </div>


    )
}

export default Dashboard