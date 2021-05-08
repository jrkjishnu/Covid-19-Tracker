import { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import State from './State';
const India = ()=>
{
    const [value,setValue] = useState([]);

    useEffect(()=>
        {
            console.log("useeffect");
            axios.get("https://corona.lmao.ninja/v2/countries/india").then((response)=>
            {
                setValue(response.data);
                console.log(value);
            })
        },[])



    return(
        <div className="row">
            <div className="col-md-12">
                <h2>India</h2>
                <img src="https://www.countryflags.io/in/shiny/64.png" alt=""/>
            </div>
            <div className="col-md-12">
                    <div className="row">
                     <div className="col-md-3">
                        <Card className = "badge badge-primary"style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total Cases</Card.Title>
                            <Card.Text>
                            {value.cases}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                     </div>
                     <div className="col-md-3">
                        <Card className = "badge badge-primary"style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>ACTIVE Cases</Card.Title>
                            <Card.Text>
                            {value.active}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                     </div>
                     <div className="col-md-3">
                        <Card className = "badge badge-primary"style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>RECOVERED</Card.Title>
                            <Card.Text>
                            {value.recovered}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                     </div>
                     <div className="col-md-3">
                        <Card className = "badge badge-primary"style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title>Total DEATHS</Card.Title>
                            <Card.Text>
                            {value.deaths}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                     </div>
                    </div>

                   
            </div>
            <div className="row">
                    <State />
            </div>
        </div>
      
    )
}

export default India;