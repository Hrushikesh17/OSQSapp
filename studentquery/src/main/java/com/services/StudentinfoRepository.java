package com.services;

import com.models.Studentinfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentinfoRepository extends JpaRepository<Studentinfo, String> 
{
	Studentinfo findByEmail(String email);
}
