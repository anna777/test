import React from 'react';

import StudentsService from '../services/StudentsService';
import GroupsService from '../services/GroupsService';


const  groupsService  =  new  GroupsService();
const  studentsService  =  new  StudentsService();


class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            groups:[],
            student:{},
            optionsState:'',
            username:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(props){
         groupsService.getGroups().then(result=> {
            this.setState({ groups:  result})
               });
         if(this.props.studentID){
                studentsService.getStudentsByID(this.props.studentID).then(stud=> {
                        this.setState({ student:stud, optionsState:stud.id, username:stud.username})
                });
         }
          };

    handleSubmit(event, requestType, studentID) {
        const username = event.target.elements.username.value;
        const group_id = event.target.elements.group.value;

        if (!studentID){
            studentsService.createStudent(
              {
              "username":  username,
              "group":  group_id,

               }).then((result)=>{
                    alert("Student created!");
                }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
             });
        }else{
            this.handleUpdate(studentID,username,group_id)
        }
    }


    handleUpdate(pk,username,group_id){
        studentsService.updateStudent(
            {"id":pk,
             "username":  username,
             "group":  group_id
            }
        ).then((result)=>{
            alert("Student updated!");
        }).catch(()=>{
            alert('There was an error! Please re-check your form.');
        });
    }
    handleSelectChange= (event) =>
        this.setState({optionsState:event.target.value})

    handleUserChange= (event) =>
        this.setState({username:event.target.value})

    render(){
        return (

         <div>
          <form onSubmit={(e)=>this.handleSubmit(e,this.props.requestType,this.props.studentID)}>
          <div class="form-group">
            <label for="username">Student Name</label>
            <input type="text" class="form-control" id="username" name='username' value={this.state.username} onChange={this.handleUserChange} placeholder="Your full Name"/>
          </div>
          <div class="form-group">
            <label for="groups">Select Group</label>
            <select class="form-control"   name='group' onChange={this.handleSelectChange} value={this.state.optionsState}>
            {this.state.groups.map((group,index) =>
                <option value={group.id}>{group.name}</option>
             )}
            </select>
          </div>
          <button>Submit</button>


         </form>
        </div>
    )}
}
export default StudentForm;