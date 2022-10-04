import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  user:any;

  constructor() { }

  ngOnInit(): void {
    this.user=new FormGroup({
      Name:new FormControl('',[Validators.required]),
      Age:new FormControl('',[Validators.required]),
      DOB:new FormControl('',[Validators.required]),
      Address:new FormControl('',[Validators.required]),

    })
  }

  get register(){
    return this.user.controls
  }
  submit(){
    if (this.user.invalid) {
      this.user.markAllAsTouched();
    }
    console.log('hkjfhkf',this.user.value);

  }

}
