import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProviderService {
  
  constructor( public http: Http) { }

  getRestaurants(){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('content-Type', 'application/json');
      this.http.get("http://www.opendatamalta.org/ckan/dataset/1d5df898-1481-42cf-85a5-673c6cdec65e/resource/73e13022-0ae6-445e-9bb5-d3d91f154a7b/download/restaurants.json")
      .map(res => res.json())
      .subscribe(data =>{
        
        resolve(data);
      }, (err) => {

      }); 
    
      });
  
    }

    getEvents(){
      return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('content-Type', 'application/json');
        this.http.get("http://www.opendatamalta.org/ckan/dataset/dfdefba9-745e-4618-bddd-fbd179e910c8/resource/90f81009-fbc9-41ef-b031-fe3ae8bef03b/download/events.json")
        .map(res => res.json())
        .subscribe(data =>{
          
          resolve(data);
        }, (err) => {
  
        }); 
      
        });
    
      }

}
