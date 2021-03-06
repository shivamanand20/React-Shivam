import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "../Components/EmployeeDetailsComponent"
//import PostForm from '../Components/Formpost';

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }
    render() {
        debugger;
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.id} {...employee} deleteEmployee={this.deleteEmployee} updateEmployee={this.updateEmployee}></EmployeeDetailsComponent>

                })}
            </div>    
        )
    }

    deleteEmployee = (event) => {
        debugger;
        Axios.delete("https://localhost:5001/api/Employee/" + event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }

    componentDidMount() {
        this.getData();
    }
    updateEmployee = (event) => {

        var employeeId = event.target.id;

        this.props.history.push("/update/" + employeeId);

    }
    getData = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/Employee");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}
