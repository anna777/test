import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class StudentsService{

    getStudents() {
        const url = `${API_URL}/api/students/`;
        return axios.get(url).then(response => response.data);
    }
    getStudentsByID(pk) {
        const url = `${API_URL}/api/student/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteStudent(student){
        const url = `${API_URL}/api/student/${student.id}`;
        return axios.delete(url, student.id);
    }
    createStudent(student){
        const url = `${API_URL}/api/students/`;
        return axios.post(url,student);
    }
    updateStudent(student){
        const url = `${API_URL}/api/student/${student.id}`;
        return axios.put(url,student);
    }
}