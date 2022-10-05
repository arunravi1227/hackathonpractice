import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols:any ;
  products: any

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  this.products = [
    {
      code:'dot net',
      name:'arun',
      category:'fullstack',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'phython',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'java',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'c',
      quantity: 'good'


    },

    {
      code:'dot net',
      name:'arun',
      category:'java',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'c++',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'java',
      quantity: 'good'


    },
    {
      code:'dot net',
      name:'arun',
      category:'c',
      quantity: 'good'


    }



  ]
  }

}