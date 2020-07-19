package com.example.springbootpostgres.repository;

import com.example.springbootpostgres.model.students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface studentsrepository extends JpaRepository<students,Long>  {
}
