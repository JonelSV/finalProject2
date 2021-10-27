package com.finalProjectBend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.finalProjectBend.ResourceNFexception.ResourceNFexception;
import com.finalProjectBend.Repository.GuestRepository;

import com.finalProjectBend.guestModel.Guest;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class GuestController {

@Autowired
	private GuestRepository guestRepo;

	@GetMapping("/allguests")
	public List<Guest> getAllGuests()
	{
		return guestRepo.findAll();
	}
	
	@PostMapping("/addguest")
	public Guest newGuest(@RequestBody Guest g) {
		return guestRepo.save(g);
	}
	
	@GetMapping("guests/{Id}")
	public ResponseEntity<Guest> getGuestById(@PathVariable int Id){
		Guest g= guestRepo.findById(Id).orElseThrow(() -> new ResourceNFexception("Guest not found"));
		return ResponseEntity.ok(g);
	}
	
	@GetMapping("guests/{name}")
	public List<Guest> getGuestByName(@PathVariable String name)
	{
		List <Guest> guests=guestRepo.findByFirstname(name);
		if(guests.isEmpty())
		{
			System.out.println(new ResourceNFexception("Guest" + name + "not found"));
		}
		
		return guestRepo.findByFirstname(name);
	}
	
	
		@PutMapping("/guest/{Id}")
		public ResponseEntity <Guest> updateGuest(@PathVariable int Id, @RequestBody Guest guest)
		{
			Guest g= guestRepo.findById(Id).orElseThrow(() ->  new ResourceNFexception("Guest not found"));
		    g.setfirstname(guest.getfirstname());
		    g.setlastname(guest.getlastname());
		    g.setTICKET(guest.getTICKET());
		    Guest updatedGuest=guestRepo.save(g);
		    return ResponseEntity.ok(updatedGuest);
		}
		

		
		@DeleteMapping("/guest/{Id}")
		public String deleteGuest(@PathVariable int Id)
		{
			guestRepo.findById(Id).orElseThrow(() ->  new ResourceNFexception("Student not found"));
		    guestRepo.deleteById(Id);
		    return "The student with id: "+ Id +" is removed from the database.";
		}
		
		
	}

