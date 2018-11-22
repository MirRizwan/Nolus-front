import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-search',
  templateUrl: './home-page-search.component.html',
  styleUrls: ['./home-page-search.component.css']
})
export class HomePageSearchComponent implements OnInit {

  cities = ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ras Al Khaimah', 'Umm Al Quwain','Al Ain', 'Fujairah'];
  areas = ['Abu Dhabi Gate City','Abu Dhabi Hills', 'Al Adla', 'Al Aman', 
    'Al Bahya', 
    'Al Bandar', 
    'Al Dafrah', 
    'Al Etihad',
    'Al Falah City',
    'Al hosn', 
    'Al Khalidiyah', 
    'Al Karamah', 
    'Al Maqta', 
    'Al Mafraq', 
    'Al Markaziyah', 
    'Al Musalla', 
    'Al Mina', 
    'Al Nahyan', 
    'Al Raha', 
    'Al Rahba', 
    'Al Rowdah', 
    'Al Shamkha'];
    
  constructor() { }

  ngOnInit() {
  }

}
