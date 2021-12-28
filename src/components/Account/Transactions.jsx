import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import NavTab from "../../data/CourseNavTabs";
import { Link } from "react-router-dom";
import DummyTransactions from "../../data/DummyTransactions"; //to be deleted

export default class Transactions extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <h4 className="mt-5 col text-center text-primary text-uppercase mb-3">
              Transactions
            </h4>
          </div>
          <div className="row mb-5 mt-3">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="text-uppercase text-primary">
                    <tr>
                      <th>#</th>
                      <th>Transaction Names</th>
                      <th>Amounts</th>
                      <th>Payment Methods</th>
                      <th>payment Dates</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-capitalize">
                    {DummyTransactions.map((data, id) => {
                      return (
                        <tr id={id}>
                          <td>{++id}</td>
                          <td>{data.name}</td>
                          <td>{data.amount}</td>
                          <td>{data.method}</td>
                          <td>{data.date}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              <i className="fas fa-download mr-1"></i>
                              Download
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        Number Of Transactions: 3
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
