import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from "../service-provider.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantData: any = [];
  eventData: any = [];

  lat: number ;
  lng: number ;
  constructor(public serviceProvider:ServiceProviderService) { }

  ngOnInit() {
    this.getRestaurantData();
    this.getEventData();
  }
  

  getRestaurantData(){
    this.serviceProvider.getRestaurants().then((result)=>{
      let data: any = result;
      this.restaurantData = data.restaurants.restaurant;
     
    }, (err) =>{});
  }

  getEventData(){
    this.serviceProvider.getEvents().then((result) =>{ 
      let data: any = result;
      this.eventData = data.EventList;
      
    },(err) => {})
  }
  fetchtoMap(data: any){
    this.lat=+data.latitude;
    this.lng=+data.longitude;
    console.log(this.lat);
    console.log(this.lng);
  }

}
