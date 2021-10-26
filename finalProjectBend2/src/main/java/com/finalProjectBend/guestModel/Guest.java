package com.finalProjectBend.guestModel;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="guestlisttable")
public class Guest {
	
	@Id
	
	private int ID;
//	@Column(name = "firstname")
	private String firstname;
//	@Column(name = "LAST_NAME")
	private String LASTNAME;
	private String TICKET;
	
	public Guest() {
		
	}

	public Guest(int iD, String fIRST_NAME, String lAST_NAME, String tICKET) {
		super();
		this.ID = iD;
		this.firstname = fIRST_NAME;
		this.LASTNAME = lAST_NAME;
		this.TICKET = tICKET;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getFIRST_NAME() {
		return firstname;
	}

	public void setFIRST_NAME(String fIRST_NAME) {
		firstname = fIRST_NAME;
	}

	public String getLAST_NAME() {
		return LASTNAME;
	}

	public void setLAST_NAME(String lAST_NAME) {
		LASTNAME = lAST_NAME;
	}

	public String getTICKET() {
		return TICKET;
	
	}
	
	public void setTICKET(String tICKET) {
		TICKET = tICKET;
	}
}
