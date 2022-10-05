import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  user:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user=new FormGroup({
      Name:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required]),
      Message:new FormControl('',[Validators.required]),
      Mobilenumber:new FormControl('',[Validators.required]),

    })
  }

  get register(){
    return this.user.controls
  }


  submit(){
    if (this.user.invalid) {
      this.user.markAllAsTouched();
    }else{
      console.log('ffffffffffffff',this.user.value);
      this.router.navigate(['school']);
  
    }
  }
}
