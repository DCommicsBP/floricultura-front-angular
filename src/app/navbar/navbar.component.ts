import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navBarImage: string = "../../assets/image/evergreenTerrace.jpg";
  width: string = "200" 
  height: string = "50" 
  ngOnInit() {
  
  }

}
