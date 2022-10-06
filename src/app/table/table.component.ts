import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cols:any ;
  products: any

  constructor(private confirmationService: ConfirmationService) { }

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

  confirm() {

    this.confirmationService.confirm({

        message: 'Are you sure that you want to perform this action?',

        accept: () => {

            //Actual logic to perform a confirmation

        }

    });

}



  

}