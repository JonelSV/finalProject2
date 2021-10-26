package com.finalProjectBend.guestModel;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="guestlisttable")
public class Guest {
	
	@Id
	private int ID;
	private String FIRST_NAME;
	private String LAST_NAME;
	private String TICKET;
	
	public Guest() {
		
	}

	public Guest(int iD, String fIRST_NAME, String lAST_NAME, String tICKET) {
		super();
		this.ID = iD;
		this.FIRST_NAME = fIRST_NAME;
		this.LAST_NAME = lAST_NAME;
		this.TICKET = tICKET;
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getFIRST_NAME() {
		return FIRST_NAME;
	}

	public void setFIRST_NAME(String fIRST_NAME) {
		FIRST_NAME = fIRST_NAME;
	}

	public String getLAST_NAME() {
		return LAST_NAME;
	}

	public void setLAST_NAME(String lAST_NAME) {
		LAST_NAME = lAST_NAME;
	}

	public String getTICKET() {
		return TICKET;
	
	}
	
	public void setTICKET(String tICKET) {
		TICKET = tICKET;
	}
}
