import axios from 'axios'

//const STUDENT= 'v1'
//const COURSE_API_URL = 'http://localhost:8080' 
//const STUDENTS_API_URL = `${COURSE_API_URL}/api/${STUDENT}`
//const STUDENTS_API_URL = 'http://localhost:8080/api/v1'


class StudentsDataService {

    retrieveAllStudents() {
        return axios.get(`http://localhost:8080/api/v1/students`);
    }

    deleteStudent(id) {
        let myid = id
        console.log(myid)
        return axios.delete(`http://localhost:8080/api/v1/student/${myid}`);
    }

    retrieveStudent(id) {
        let myid = id
        return axios.get(`http://localhost:8080/api/v1/student/${myid}`);
    }

    updateStudent(id,student) {
        let myid = id
        let mystudent = student
        return axios.put(`http://localhost:8080/api/v1/student/${myid}`,mystudent);
    }

    createStudent(student) {
        let mystudent = student
        console.log('inside create')
        console.log(mystudent)
        return axios.post(`http://localhost:8080/api/v1/students`,mystudent);
    }
}

export default new StudentsDataService()