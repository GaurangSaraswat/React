import React, {Component} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class sidebar extends Component {
  state = {
      dashboardOpen: true,
      productOpen: false,
      customerOpen: false,
      incomeOpen: false,
      promoteOpen: false,
      helpOpen:false,
  };
  toggleDropdown = (dropdownName) => {
    if(dropdownName === 'dashboardOpen'){
      this.setState({dashboardOpen: true});
    } else{
        this.setState((prevState) => ({
            [dropdownName]: !prevState[dropdownName],
        }));
    }
  };
     
  
  render(){
      return (
          <div className='sidebar'>
              <ul className='sidebar-nav'>
                  <li className='nav-item' onClick={()=> this.toggleDropdown('dashboardOpen')}>
                      <a className="nav-link " data-bs-target="#components-nav" data-bs-toggle="collapse" href='#'>
                      Dashboard
                      <i class="fa fa-chevron-down ms-auto"></i></a>
                      {this.state.dashboardOpen && (
                          <ul style={{display: this.state.dashboardOpen? 'block': 'none'}} id="components-nav" class="nav-content collapse show" data-bs-parent="#sidebar-nav">
                              <li className='nav-item' onClick={()=> this.toggleDropdown('productOpen')}>
                              <a class="active">
                                  Products
                                  <i className="bi bi-chevron-down ms-auto"></i>
                              </a>
                              {this.state.productOpen &&(
                                  <ul style={{display: this.state.productOpen?'block' : 'none'}}>
                                      <li className='nav-item'>Product1</li>
                                      <li className='nav-item'>Product2</li>
                                  </ul>
                              )}
                              </li>
                              <li onClick={()=>this.toggleDropdown('customerOpen')}>
                                  <a>
                                      Customers
                                      <i className="fa fa-chevron-down ms-auto"></i>
                                  </a>
                                  {this.state.customerOpen && (
                                      <ul style={{display: this.state.customerOpen?'block' : 'none'}}>
                                          <li>Customer1</li>
                                          <li>Customer2</li>
                                      </ul>
                                  )}
                              </li>
                              <li onClick={()=>this.toggleDropdown('incomeOpen')}>
                                  <a>
                                      Income
                                      <i className="fa fa-chevron-down ms-auto"></i>
                                  </a>
                                  {this.state.incomeOpen && (
                                      <ul style={{display: this.state.incomeOpen?'block' : 'none'}}>
                                          <li>income1</li>
                                          <li>income2</li>
                                      </ul>
                                  )}
                              </li>
                              <li onClick={()=>this.toggleDropdown('promoteOpen')}>
                                  <a>
                                      promoters
                                      <i className="fa fa-chevron-down ms-auto"></i>
                                  </a>
                                  {this.state.promoteOpen && (
                                      <ul style={{display: this.state.promoteOpen?'block' : 'none'}}>
                                          <li>promoter1</li>
                                          <li>promoter2</li>
                                      </ul>
                                  )}
                              </li>
                              <li onClick={()=>this.toggleDropdown('helpOpen')}>
                                  <a>
                                      Help
                                      <i className="fa fa-chevron-down ms-auto"></i>
                                  </a>
                                  {this.state.helpOpen && (
                                      <ul style={{display: this.state.helpOpen?'block' : 'none'}}>
                                          <li>Account Help</li>
                                          <li>Customer Care</li>
                                      </ul>
                                  )}
                              </li>
                          </ul>
                      )}

                  </li>
              </ul>
          </div>
      )
  }
} 
export default sidebar