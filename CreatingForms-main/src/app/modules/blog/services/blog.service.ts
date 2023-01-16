import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: any[] = [
    {
      ID: 1,
      Title: 'Ride to Marinduque',
      Description: 'Riding needs',
      Authors: ['Rowell Esguerra'],
      Comments: 'Ride safe!'
    },
    {
      ID: 2,
      Title: 'Best Helmets',
      Description: 'Best helmets within cheap price',
      Authors: ['Rowell Esguerra'],
      Comments: 'Wow what a great deal'
    },
    {
      ID: 3,
      Title: 'Best Helmets',
      Description: 'Best helmets within cheap price',
      Authors: ['Rowell Esguerra'],
      Comments: 'Wow what a great deal'
    }
  ];

  constructor() { }

  getBlogs() {
    return this.blogs
  }
}
