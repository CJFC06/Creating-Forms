import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = [
    {
      Id: 1,
      Name: 'Rowell',
      Authors: ['Rowell Esguerra'],
      ISBN: '12314123'
    },
    {
      Id: 2,
      Name: 'Esguerra',
      Authors: ['Esguerra Rowell'],
      ISBN: '3123123123123'
    },
    {
      Id: 3,
      Name: 'Rowell Rowell',
      Authors: ['Esguerra Esguerra'],
      ISBN: '1231241231'
    }
  ];

  constructor() { }

  getBooks() {
    return this.books
  }
}
