package com.finalProjectBend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.finalProjectBend.guestModel.Guest;


@Repository
public interface GuestRepository extends JpaRepository<Guest, Integer>{
	
	List<Guest> findByFirstname(String fIRST_NAME);
}
