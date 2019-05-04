import React from 'react';
import Modal from 'react-modal';

import GroupForm from '../components/GroupForm';
import GroupsService from '../services/GroupsService';

const  groupsService  =  new  GroupsService();

Modal.setAppElement('body');

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

class GroupList extends React.Component {
    handleDelete(e,pk){
        groupsService.deleteGroup({id :  pk}).then((result)=>{
            const groups_list = this.props.data.filter((post) => {
                        return pk !== post.id;});
            this.props.updateData(groups_list)
                    alert("Group deleted!");
            }).catch((e)=>{
                     alert(e,'There was an error! Please re-check your form.');
            });
    };
    constructor(){
        super()
        this.state = {
             addGroupForm: false,
             modalIsOpen: false,
             requestType:'',
             groupID:null
          };
        this.openModalGroup = this.openModalGroup.bind(this);
        this.closeGroupModal = this.closeGroupModal.bind(this);

    }
    openModalGroup(e, type, groupId) {
            this.setState({modalIsOpen: true, requestType:type,groupID: groupId ? groupId:null});
    }

    closeGroupModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        return(
        <div>
         <button onClick={(e)=>this.openModalGroup(e,'post')} type="button" className="btn btn-secondary">Add group</button>
         <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeGroupModal}
                  style={customStyles}
                  >

                  <GroupForm requestType={this.state.requestType} groupID={this.state.groupID}/>
                  <button onClick={this.closeGroupModal}>Close</button>
         </Modal>

         <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Group Name</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
           {this.props.data.map((group, index)=>
            <tr key={group.id}>
              <th scope="row">{group.id}</th>
              <td>{group.name}</td>
              <td>{group.description}</td>
              <td><button onClick={(e)=> this.openModalGroup(e,'put',group.id)} type="button"
                    className="btn btn-secondary">Edit</button>
              <button onClick={(e)=>  this.handleDelete(e,group.id) } type="button"
                    className="btn btn-secondary">Delete</button>
              </td>
            </tr>
            )}

          </tbody>
         </table>
        </div>
        )}
}
export default GroupList;