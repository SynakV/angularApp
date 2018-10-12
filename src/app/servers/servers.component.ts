import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = true;
  createServer = 'Server isn`t created';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'Testserver 3'];
  showP = false;
  clickTracker = [];
  myColor = ''

  toggleP() {
	  this.clickTracker.push(this.clickTracker.length + 1);
	  this.showP = !this.showP;
	  console.log(this.clickTracker);
	  if (this.clickTracker.length > 5) {
		  this.myColor = 'blue';
	  }
  }

  // constructor() {
  //   if (this.userName === '') {
  //     this.allowNewServer = true;
  //   } else {
  //     this.allowNewServer = false;
  //   }
  //  }

  ngOnInit() {}

  onCreateServer() {
	this.serverCreated = true;
	this.servers.push(this.serverName);
	this.createServer = 'Server is created! Name is ' + this.serverName;
  }

}
