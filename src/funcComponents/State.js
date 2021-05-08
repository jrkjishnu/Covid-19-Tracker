import axios from 'axios';
import { useEffect, useState } from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
const State = ()=>{


    const [value,setValue] = useState();


    useEffect(()=>
    {
        axios.get('https://api.covid19india.org/state_district_wise.json').then((res)=>
        {
            setValue(res.data);
        })
    })

    let key = Object.keys(value);

    


    return(
        <div className="row">
            <div className="col-md-12">
                <Accordion style={{width:'1500px'}}>
                   {
                       key.map((item,key)=>
                       {
                           let districts = value[item].districtData;
                           console.log(item);
                           let total_cases = 0;
                           let total_active = 0;
                           let total_recovered = 0;
                           let total_deaths = 0;
                            let list = [];
                           for(let x in districts)
                           {
                               total_cases += districts[x].confirmed;
                               total_active += districts[x].active;
                               total_recovered += districts[x].recovered;
                               total_deaths += districts[x].deceased;
                               let ob = districts[x];
                               ob["district_name"] = x;
                               list.push(ob);
                           }
                           return(
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={key}>
                                    {item} <span className="btn-primary p-1 mr-2">Cases-{total_cases}</span> <span className="btn-warning p-1 mr-2">Active-{total_active}</span><span className="btn-success p-1 mr-2">Recovered-{total_recovered}</span><span className="btn-danger p-1 mr-2">Deaths-{total_deaths}</span>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key}>
                                <Card.Body>
                                <table className="table table-bordered table-striped">
                                <thead>
                                    <td>District Name</td>
                                    <td>Active</td>
                                    <td>Confirmed</td>
                                    <td>Recovered</td>
                                    <td>Deaths</td>
                                   
                                </thead>
                                <tbody>
                                    {
                                        list.map((item,key)=>
                                        {
                                            return(
                                            <tr>
                                                 <td>{item.district_name}</td>
                                                <td>{item.active}</td>
                                                <td>{item.confirmed}</td>
                                                <td>{item.recovered} </td>
                                                <td>{item.deceased} </td>
                                            </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                                </table>



                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                           )
                       })
                   } 
                
                </Accordion>
            </div>
        </div>
       
    )

}

export default State;