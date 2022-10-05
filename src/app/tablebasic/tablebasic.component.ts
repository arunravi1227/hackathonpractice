import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablebasic',
  templateUrl: './tablebasic.component.html',
  styleUrls: ['./tablebasic.component.scss']
})
export class TablebasicComponent implements OnInit {
  products:any
  

  constructor() { }

  ngOnInit(): void {
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
    
    
        }
      ]
    }
    
  }


