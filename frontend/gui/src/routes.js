import React from 'react';
import {Route} from 'react-router-dom'
import StudentListView from './containers/StudentListView'
import GroupListContainer from './containers/GroupListView'



const BaseRouter = () => (
<div>
<Route exact path='/' component={StudentListView}/>
<Route  path="/groups/"  component={GroupListContainer} />


</div>)

export default BaseRouter
