import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  // useClick(){
  //   return console.log("this is SERVICE")
  // }

  getUsersFromApi(){
    return this.http.get('https://reqres.in/api/users')
  }
}
