package com.example.springbootpostgres.controller;

import com.example.springbootpostgres.exception.ResourceNotFoundException;
import com.example.springbootpostgres.model.students;
import com.example.springbootpostgres.repository.studentsrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1")
public class studentscontroller {

    @Autowired
    private studentsrepository studentsRepository;
    //get student
    @GetMapping("/students")
    public List<students> getAllStudents(){
        return this.studentsRepository.findAll();

    }
    //get student by id
    @GetMapping("/student/{id}")
    public ResponseEntity<students> getstudentbyId (@PathVariable(value = "id") Long studentId)
        throws ResourceNotFoundException {
        students student = studentsRepository.findById(studentId)
                .orElseThrow(()-> new ResourceNotFoundException ("Student not found for this id" + studentId));
        return ResponseEntity.ok().body(student);
    }

    //save/insert new student
    @PostMapping("/students")
    public ResponseEntity<students> createstudent(@RequestBody students Students){
        return ResponseEntity.ok(this.studentsRepository.save(Students));
    }
    //update student
    @PutMapping("/student/{id}")
    public ResponseEntity<students> updatestudent(@PathVariable (value = "id") Long studentId, @RequestBody students studentDetails)
    throws ResourceNotFoundException{
        students student = studentsRepository.findById(studentId)
                .orElseThrow(()-> new ResourceNotFoundException ("Student not found for this id" + studentId));

        student.setFirst_name(studentDetails.getFirst_name());
        student.setLast_name(studentDetails.getLast_name());
        student.setContact_phone(studentDetails.getContact_phone());
        student.setParent_guardian_email(studentDetails.getParent_guardian_email());

        return ResponseEntity.ok(this.studentsRepository.save(student));
    }

    //delete student
    @DeleteMapping("/student/{id}")
    public Map<String,Boolean> deletestudent(@PathVariable (value="id") Long StudentId) throws ResourceNotFoundException {
        students student = studentsRepository.findById(StudentId)
                .orElseThrow(()-> new ResourceNotFoundException ("Student not found for this id" + StudentId));
        this.studentsRepository.delete(student);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return response;


    }
}
