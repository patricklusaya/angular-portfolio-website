import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = ['Flutter & Angular for frontend','java Spring boot & Laravel for backend']
  tech = ['Angular','Flutter','Spring boot','PHP','SQL',]
  tools=['Figma', 'Wordpress',  'Vs Code', 'CapCut']
  constructor() { }

  ngOnInit(): void {
  }

}
