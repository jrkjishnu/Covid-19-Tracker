import React, { Component } from 'react';
import Axios from 'axios';
import {Card,Accordion,Button} from 'react-bootstrap';
class StateData extends Component
{
    constructor()
    {
        super();
        this.state = {
            stateData:{a:"5"}
        }
    }

    componentDidMount()
    {
        Axios.get("https://api.covid19india.org/state_district_wise.json").then((response)=>
        {
            //console.log(response.data);
            this.setState({stateData:response.data})
        })
    }

    render()
    {
        let keys = Object.keys(this.state.stateData);
        return(
            <div className="row">
                <div className="col-md-12">

                <Accordion>
                    {
                        keys.map((item,key)=>
                        {
                            let districts = this.state.stateData[item].districtData;
                            let distict_keys = Object.keys(this.state.stateData[item]);
                            //console.log(distict_keys);
                            //console.log(districts);
                            let total_active=0;
                            let total_confirmed=0;
                            let total_deaths=0;
                            let total_recovery=0;
                            let district_list = [];

                            for(let x in districts)
                            {
                                total_active += districts[x].active;
                                total_confirmed += districts[x].confirmed;
                                total_deaths += districts[x].deceased;
                                total_recovery += districts[x].recovered;
                                let ob = districts[x];
                                ob["district_name"] = x;
                                district_list.push(ob);
                            }
                            return(
                                <Card>
                                <Card.Header>
                                  <Accordion.Toggle as={Button} variant="secondary" eventKey={key}>
                                    {item} <span className="btn-info p-1 mr-2">Total Cases - {total_confirmed}</span> <span className="btn-warning p-1 mr-2">Active- {total_active} </span><span className="btn-success p-1 mr-2">Recovered -{total_recovery}</span> <span className="btn-danger p-1 mr-2">Deaths- {total_deaths}</span>
                                  </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key}>
                                  <Card.Body>
                                      <table className="table table-bordered table-striped">
                                          <thead>
                                          <tr>
                                              <td>District</td>
                                              <td>Confirmed</td>
                                              <td>Active</td>
                                              <td>Recovered</td>
                                              <td>Deaths</td>
                                          </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                    district_list.map((item,key)=>
                                                    {
                                                        return(
                                                        <tr>
                                                            <td>{item.district_name}</td>
                                                            <td>{item.confirmed}</td>
                                                            <td>{item.active}</td>
                                                            <td>{item.recovered}</td>
                                                            <td>{item.deceased}</td>
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
}

export default StateData;