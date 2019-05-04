import React from 'react';


import GroupList from '../components/GroupList';
import GroupsService from '../services/GroupsService';


const  groupsService  =  new  GroupsService();

class GroupListContainer extends React.Component{
    updateData = (value) => {
       this.setState({ groups: value })
    }

    constructor(props){
            super(props);
            this.state  = {
                groups:[]
                }
            }

    componentDidMount(){
         var  self  =  this;
         groupsService.getGroups().then(result=> {
                self.setState({ groups:  result})
            });
    };

    render(){
        return (
            <GroupList updateData={this.updateData} data={this.state.groups}/>
            )
    }
}
export default GroupListContainer;