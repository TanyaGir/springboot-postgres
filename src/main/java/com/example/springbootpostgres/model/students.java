package com.example.springbootpostgres.model;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table( name="students", schema = "my_students")
public class students {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long student_id;
    @Column (name = "first_name")
    private String first_name;
    @Column (name= "last_name")
    private String last_name;
    @Column (name = "contact_email")
    private String contact_email;
    @Column (name = "contact_phone")
    private String contact_phone;
    @Column (name = "parent_guardian_email")
    private String parent_guardian_email;
    @Column (name ="contact_medium")
    private String contact_medium;
    @CreatedBy
    @Column(name = "created_by")
    private String created_by;
    @CreatedDate
    @Column( name = "created_date")
    private Date created_date;
    @LastModifiedBy
    @Column (name = "updated_by")
    private String updated_by;
    @LastModifiedDate
    @Column (name= "last_updated_date")
    private Date last_updated_date;

    public students() {
    }

    public students(long student_id, String first_name, String last_name, String contact_email, String contact_phone, String parent_guardian_email, String contact_medium, String created_by, Date created_date, String updated_by, Date last_updated_date) {
        this.student_id = student_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.contact_email = contact_email;
        this.contact_phone = contact_phone;
        this.parent_guardian_email = parent_guardian_email;
        this.contact_medium = contact_medium;
        this.created_by = created_by;
        this.created_date = created_date;
        this.updated_by = updated_by;
        this.last_updated_date = last_updated_date;
    }

    public long getStudent_id() {
        return student_id;
    }

    public void setStudent_id(long student_id) {
        this.student_id = student_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getContact_email() {
        return contact_email;
    }

    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;
    }

    public String getContact_phone() {
        return contact_phone;
    }

    public void setContact_phone(String contact_phone) {
        this.contact_phone = contact_phone;
    }

    public String getParent_guardian_email() {
        return parent_guardian_email;
    }

    public void setParent_guardian_email(String parent_guardian_email) {
        this.parent_guardian_email = parent_guardian_email;
    }

    public String getContact_medium() {
        return contact_medium;
    }

    public void setContact_medium(String contact_medium) {
        this.contact_medium = contact_medium;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public Date getCreated_date() {
        return created_date;
    }

    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    public void setUpdated_by(String updated_by) {
        this.updated_by = updated_by;
    }

    public Date getLast_updated_date() {
        return last_updated_date;
    }

    public void setLast_updated_date(Date last_updated_date) {
        this.last_updated_date = last_updated_date;
    }
}
