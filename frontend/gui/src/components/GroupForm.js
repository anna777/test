import React from 'react';

import GroupsService from '../services/GroupsService';


const  groupsService  =  new  GroupsService();

class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            groups:[],
            groupDesc:'',
            groupName:'',
            groupObj:{}}
         this.handleSubmit = this.handleSubmit.bind(this)
         }

    componentDidMount(props){
       groupsService.getGroups().then(result=> {
            this.setState({ groups:  result})
         });
       if(this.props.groupID){
           groupsService.getGroupByID(this.props.groupID).then(group=> {
                   this.setState({ groupObj:group, groupDesc:group.description, groupName:group.name})
                   });
       }
    };

    handleSubmit(event, requestType, groupID) {
        const groupName = event.target.elements.groupName.value;
        const group_desc = event.target.elements.groupDesc.value;

        if (!groupID){
          groupsService.createGroup(
            {
            "name":  groupName,
            "description":  group_desc,

            }).then((result)=>{
                    alert("Group created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
            });
       }else{
       this.handleUpdate(groupID,groupName,group_desc)}
    }


    handleUpdate(pk,groupName,desc){
    groupsService.updateGroup(
        {
       "id":pk,
        "name":  groupName,
        "description":  desc,
        }
        ).then((result)=>{
          alert("Group updated!");
        }).catch(()=>{
           alert('There was an error! Please re-check your form.');
        });
    }
    handleGroupDescChange= (event) =>
    this.setState({groupDesc:event.target.value})

    handleGroupNameChange= (event) =>
    this.setState({groupName:event.target.value})

    render(){
        return (
          <div>
          <form onSubmit={(e)=>this.handleSubmit(e,this.props.requestType,this.props.groupID)}>
          <div className="form-group">
            <label for="username">Group Name</label>
            <input type="text" className="form-control" name='groupName' value={this.state.groupName}
            onChange={this.handleGroupNameChange} placeholder="Group Name"/>
          </div>
          <div className="form-group purple-border">
             <label for="groupDesc1">Group description</label>
             <textarea className="form-control" id="groupDesc1" value={this.state.groupDesc}
             onChange={this.handleGroupDescChange} name="groupDesc" rows="3"></textarea>
          </div>

          <button>Submit</button>
          </form>
          </div>
        )}
    }
export default StudentForm;