import React from "react"
import servicesData from '../3_pages/3_services/3_servicesData'
import {Link, useLocation} from 'react-router-dom'

function ServicesList() {
    const location = useLocation()
    console.log(location)
    {/*ash: ""
    key: "fpqkoa"
    pathname: "/services"
    search: ""
    state: undefined
    __proto__: Object*/}
    const services = servicesData.map(service =>(
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
        </h3>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList