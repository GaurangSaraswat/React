import React, {Component} from "react";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './public/data1.png';

class MyTable extends Component{
    constructor() {
        super();
        this.state ={
            selectedInterval: 'last30',
        };
    }
    handleInterval = (e) => {
        this.setState({selectedInterval: e.target.value});
    };
    render() {
        return (
            <div className="card" style={{marginLeft: '320px'}}>
                <div className="row">
                    <div className="col-7">
                        <h1>Product Sell</h1>
                    </div>
                    <div className="col-3">
                       <div className='search-bar'>
                           <input type='text' placeholder='Search'/>
                           <i className='fa fa-search' style={{marginLeft: '-20px'}}></i>
                        </div>
                    </div>
                    <div className="col-2">
                        <select
                           value={this.state.selectedInterval}
                           onChange={this.handleInterval}
                        >
                            <option value="last30">Last 30 days</option>
                            <option value="last15">Last 15 days</option>
                            <option value="last7">Last 7 days</option>
                        </select>
                    </div>

                </div>
              <table>
                <thead>
                    <tr>
                        <th><p>Product Name</p></th>
                        <th><p>Stock</p></th>
                        <th><p>Price</p></th>
                        <th><p>Total Sales</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={Image1} alt="my Image"/>
                            <h4>Abstract 3D</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </td>
                        <td>32 in stock</td>
                        <td><b>$ 45.99</b></td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td><h4>Sarphens Illustration</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </td>
                        <td>32 instock</td>
                        <td>$ 45.99</td>
                        <td>20</td>
                    </tr>
                </tbody>
              </table>
            </div>
        );
    }
}
export default MyTable;