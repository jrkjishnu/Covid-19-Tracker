import { Component } from 'react';
import {Card} from 'react-bootstrap'
import StateData from './StateData'
import axios from 'axios';
class India extends Component
{
  constructor()
  {
    super();
    this.state ={
      data:{}
    }
  }

  componentDidMount()
  {
    axios.get("https://corona.lmao.ninja/v2/countries/india").then((response)=>
    {
        this.setState({data:response.data});
        console.log(this.state.data.active);
    })
  }
  render()
  {
    const {data} = this.state;

    return(
      <div className="row">
          <div className="col-md-12">
              <img src="https://www.countryflags.io/in/shiny/64.png" alt="India"/>
              <h2>India</h2>
          </div>
          <div className="col-md-12">
              <div className="row">
              <div className="col-md-3">
                <Card className="badge badge-primary" style={{ width: '18rem' }}>
                  <Card.Body className="text-center">
                   <Card.Title>TOTAL CASES</Card.Title>
                   <h3>{data.cases}</h3>
                   <Card.Text>
                      [Today:{data.todayCases}]
                  </Card.Text>
                 </Card.Body>
               </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-warning" style={{ width: '18rem' }}>
                  <Card.Body className="text-center">
                   <Card.Title>ACTIVE CASES</Card.Title>
                   <h3>{data.active}</h3>
                   <Card.Text>
                   [Today:{data.todayCases}]
                  </Card.Text>
                 </Card.Body>
               </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-success" style={{ width: '18rem' }}>
                  <Card.Body className="text-center">
                   <Card.Title>RECOVERED</Card.Title>
                   <h3>{data.recovered}</h3>
                   <Card.Text>
                   [Today:{data.todayCases}]
                  </Card.Text>
                 </Card.Body>
               </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-danger" style={{ width: '18rem' }}>
                  <Card.Body className="text-center">
                   <Card.Title>DEATHS</Card.Title>
                   <h3>{data.deaths}</h3>
                   <Card.Text>
                   [Today:{data.todayCases}]
                  </Card.Text>
                 </Card.Body>
               </Card>
              </div>  
           </div>
             
          </div>
      
        <div className="col-md-12">

        <StateData/>
        </div>
      
      
      </div>
  )
  }
   

}

export default India;