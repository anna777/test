import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class GroupsService{

    getGroups() {
        const url = `${API_URL}/api/groups/`;
        return axios.get(url).then(response => response.data);
    }
    getGroupByID(pk) {
        const url = `${API_URL}/api/group/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteGroup(group){
        const url = `${API_URL}/api/group/${group.id}`;
        return axios.delete(url, group);
    }
    createGroup(group){
        const url = `${API_URL}/api/groups/`;
        return axios.post(url,group);
    }
    updateGroup(group){
        const url = `${API_URL}/api/group/${group.id}`;
        return axios.put(url,group);
    }
}