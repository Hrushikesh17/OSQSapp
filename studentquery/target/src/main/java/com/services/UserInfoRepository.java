package com.services;

import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.models.Userinfo;

@Repository
public interface UserInfoRepository extends JpaRepository<Userinfo, String>
{
	ArrayList<Userinfo> findByUseremail(String email);	
}
