import { Component } from "react";
import axios from 'axios';
class World extends Component
{
    constructor()
    {
        super();
        this.state ={
            data:[]
        }
    }

    componentDidMount()
    {
        axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>
        {
            //this.state.data.push(response.data);
            this.setState({data:response.data});
            //console.log(item.country);
        });
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-md-12">
                <table className="table table-primary table-bordered table-striped ">
                <thead>
                    <tr>
                    <td>Country</td>
                    <td>Total Cases</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((item,key)=>
                        {
                            return(
                            <tr>
                            <td>{item.country}
                            <img style={{width:'50px' , marginLeft:'20px',alignItems:'right'}}src={item.countryInfo.flag} alt=""/>
                            </td>
                            <td>{item.cases}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
                </div>
            </div>
            
        )
    }
}
export default World;