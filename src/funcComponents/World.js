import { useEffect, useState } from "react";
import axios from 'axios';
const World = ()=>
{
    const [value,setValue] = useState([]);
    
    useEffect(()=>
        {
            axios.get('https://corona.lmao.ninja/v2/countries').then((res)=>
            {
                setValue(res.data);
            });
        })

    return(
        <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <td>Country</td>
                            <td>Cases</td>
                            <td>Active</td>
                            <td>Recovery</td>
                            <td>Deaths</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            value.map((item,key)=>
                            {
                                return(
                                <tr>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.active}</td>
                                    <td>{item.recovery}</td>
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

export default World;