package com.services;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Queryansinfo;

@Repository
public interface QueryansinfoRepository extends JpaRepository<Queryansinfo, Integer>
{
	
}
