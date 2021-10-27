package com.finalProjectBend.guestModel;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="guestlisttable")
public class Guest {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ID;
//	@Column(name = "firstname")
	private String firstname;
//	@Column(name = "LAST_NAME")
	private String lastname;
	private String TICKET;
	
	public Guest() {
		
	}

	public Guest(int iD, String fIRST_NAME, String lAST_NAME, String tICKET) {
		super();
		this.ID = iD;
		this.firstname = fIRST_NAME;
		this.lastname = lAST_NAME;
		this.TICKET = tICKET;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getfirstname() {
		return firstname;
	}

	public void setfirstname(String fIRST_NAME) {
		firstname = fIRST_NAME;
	}

	public String getlastname() {
		return lastname;
	}

	public void setlastname(String lAST_NAME) {
		lastname = lAST_NAME;
	}

	public String getTICKET() {
		return TICKET;
	
	}
	
	public void setTICKET(String tICKET) {
		TICKET = tICKET;
	}
}
