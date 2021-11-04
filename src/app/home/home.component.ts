import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list = ['Angular','React for frontend','java for backend']
  tech = ['Angular','React ','java','PHP','SQL','PostgreSQL']
  tools=['Adobe XD', 'Adobe Photoshop', 'Wordpress','VS Code']
  constructor() { }

  ngOnInit(): void {
  }

}
