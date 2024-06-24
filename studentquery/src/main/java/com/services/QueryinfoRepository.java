package com.services;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.models.Queryinfo;


@Repository
public interface QueryinfoRepository extends JpaRepository<Queryinfo, Integer> 
{
	ArrayList<Queryinfo> findByQueryid(Integer queryid);
}
