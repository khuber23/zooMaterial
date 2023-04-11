import {Injectable} from '@angular/core';
import {Guest} from '../Guest';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {

  ELEMENT_DATA: Guest[] = [
    {position: 0, fullName: 'Jesse James', gender: 'Female', age: 14,date_posted: new Date(), body: 'Body 1'},
    {position: 1, fullName: 'Joe Dirt', gender: 'Male', age: 30, date_posted: new Date(), body: 'Body 2'},
    {position: 2, fullName: 'Jess Hose', gender: 'Female', age: 32, date_posted: new Date(), body: 'Body 3'},
    {position: 3, fullName: 'Nelson Johnson', gender: 'Male', age: 17, date_posted: new Date(), body: 'Body 4'},
    {position: 4, fullName: 'Nicole Owen', gender: 'Female', age: 12, date_posted: new Date(), body: 'Body 5'},
    {position: 5, fullName: 'John Skoll', gender: 'Male', age: 11, date_posted: new Date(), body: 'Body 6'},
  ];
  categories = [
    {value: 'Female', viewValue: 'Female'},
    {value: 'Male', viewValue: 'Male'}
  ];

  constructor() {
  }

  getData(): Observable<Guest[]> {
    return of<Guest[]>(this.ELEMENT_DATA);
  }

  getCategories() {
    return this.categories;
  }

  addPost(data: Guest) {
    this.ELEMENT_DATA.push(data);
  }

  deletePost(index: number) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
