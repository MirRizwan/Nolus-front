import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals=[
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "770m",
      rating: "",
      reviews: "200",
      title: "Meal 1",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "550m",
      rating: "",
      reviews: "212",
      title: "Meal 2",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "300m",
      rating: "",
      reviews: "89",
      title: "Meal 3",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "1240m",
      rating: "",
      reviews: "198",
      title: "Meal 4",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "1000m",
      rating: "",
      reviews: "158",
      title: "Meal 5",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    {
      imageUrl:"http://placehold.it/380x210",
      distance: "800m",
      rating: "",
      reviews: "300",
      title: "Meal 6",
      description: "Lorem ipsum dolor sit amet",
      price: "XXX",
    },
    
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
