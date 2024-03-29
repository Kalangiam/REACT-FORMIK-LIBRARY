import React from 'react'
import PropTypes from "prop-types"

Card.propTypes = {
    data: {
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }
}
function Card({ data }) {

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            {
                                data.type === "currency" && (<><div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {data.title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div></>)
                            }
                            {
                                data.type === "progress" && (<>
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div></>)
                            }
                            {
                                data.type === "number" && (<><div class="col-auto">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    {data.title}</div>
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">25</div>
                                    </div></>)
                            }

                        </div>
                        <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card