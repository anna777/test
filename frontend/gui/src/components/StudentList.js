import React from 'react';
import Modal from 'react-modal';

import StudentsService from '../services/StudentsService'
import StudentForm from '../components/StudentForm'


Modal.setAppElement('body');


const  studentsService  =  new  StudentsService();
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class StudentListCompoment extends React.Component {
    handleDelete(e,pk){
        studentsService.deleteStudent({id :  pk}).then((result)=>{
            const students_list = this.props.data.filter((post) => {
                        return pk !== post.id;});
            this.props.updateData(students_list)
                    alert("Student deleted!");
            }).catch((e)=>{
                    alert(e,'There was an error! Please re-check your form.');
            });
    };
    constructor(){
        super()
            this.state = {
                 addStudentForm: false,
                 modalIsOpen: false,
                 requestType:'',
                 studID:null
            };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(e, type, studentId) {
        this.setState({modalIsOpen: true, requestType:type,studID: studentId ? studentId:null});
     }

    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render(){
        return(
            <div>
             <button onClick={(e)=>this.openModal(e,'post')} type="button" class="btn btn-secondary">Add student</button>
             <Modal
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}>

                      <StudentForm requestType={this.state.requestType} studentID={this.state.studID}/>

                      <button onClick={this.closeModal}>Close</button>
             </Modal>

            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Group</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
               {this.props.data.map((student, index)=>
                <tr>
                  <th scope="row">{student.id}</th>
                  <td>{student.username}</td>
                  <td>{student.group}</td>
                  <td><button onClick={(e)=> this.openModal(e,'put',student.id)} type="button" className="btn btn-secondary">Edit</button>
                  <button onClick={(e)=>  this.handleDelete(e,student.id) } type="button" className="btn btn-secondary">Delete</button>
                  </td>
                </tr>
               )}
              </tbody>
            </table>
           </div>

)}}
export default StudentListCompoment;