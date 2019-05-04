import React from 'react';
import StudentListCompoment from '../components/StudentList';
import StudentsService from '../services/StudentsService';

const  studentsService  =  new  StudentsService();

class StudentListContainer extends React.Component{
    updateData = (value) => {
       this.setState({ students: value })
    }

    constructor(props){
        super(props);
        this.state  = {
            students:[]
            }
        }

    componentDidMount(){
        studentsService.getStudents().then(result=> {
             this.setState({ students:  result})
        });
    };

    render(){
        return (
            <StudentListCompoment updateData={this.updateData} data={this.state.students}/>
            )
    }
}
export default StudentListContainer;