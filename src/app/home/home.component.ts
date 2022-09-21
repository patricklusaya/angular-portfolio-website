import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = ['Flutter & Angular for frontend','java Spring boot for backend']
  tech = ['Angular','Flutter','Spring boot','Python','SQL',]
  tools=['Figma', 'Wordpress', 'SPSS','Ms Excel', 'KOBO Toolbox']
  constructor() { }

  ngOnInit(): void {
  }

}
