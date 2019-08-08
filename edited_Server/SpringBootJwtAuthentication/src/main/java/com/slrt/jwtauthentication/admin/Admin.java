package com.slrt.jwtauthentication.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="notification_no")
	private Long notificationNo=0l;
	
	protected Admin() {}

	public Admin(Long id, Long notificationNo) {
		super();
		this.id = id;
		this.notificationNo = notificationNo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getNotificationNo() {
		return notificationNo;
	}

	public void setNotificationNo(Long notificationNo) {
		this.notificationNo = notificationNo;
	}
	
	
}
