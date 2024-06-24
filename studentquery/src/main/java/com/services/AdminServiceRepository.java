package com.services;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Studentinfo;

@Repository
public interface AdminServiceRepository extends JpaRepository<Studentinfo, String>
{
	
	ArrayList<Studentinfo> findByEmail(String email);
}
