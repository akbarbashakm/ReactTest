import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productAction from './actions/productAction';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      serialNo: 0,
      time: new Date()
    }
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
      serialNo: 0,
      time: new Date()
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name) {
      return null;
    }
    let product = {
      name: this.state.name,
      serialNo: Math.round(Math.random() * 100000),
      time: new Date()
    }
    this.setState({
      name: '',
      serialNo: 0,
      time: new Date()
    });
    this.props.createProduct(product);
  }

  listView(data, index) {
    return (
      <tr>
        <td key={index}>{data.serialNo}</td>
        <td key={index}>{data.name}</td>
        <td key={index}>{data.time.toDateString()}</td>
        <td><button onClick={(e) => this.deleteProduct(e, index)} className="btn btn-danger">
          Remove
          </button></td>
      </tr>
    )
  }

  deleteProduct(e, index) {
    e.preventDefault();
    this.props.deleteProduct(index);
  }

  render() {

    return (
      <div className="container">
        <br/>
        <div>
          <h3>Add Product Details</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name} /><br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Seriel No</th>
                <th>Product Name</th>
                <th>Time</th>
                <th>Click to Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product, i) => this.listView(product, i))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: product => dispatch(productAction.createProduct(product)),
    deleteProduct: index => dispatch(productAction.deleteProduct(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
