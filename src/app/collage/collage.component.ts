import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
  user:any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.user=new FormGroup({
      Name:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required]),
      Age:new FormControl('',[Validators.required]),
      DOB:new FormControl('',[Validators.required]),
      Mobilenumber:new FormControl('',[Validators.required]),
      Message:new FormControl('',[Validators.required]),

  })

}

get register(){
  return this.user.controls
}


submit(){
  if (this.user.invalid) {
    this.user.markAllAsTouched();
  }else{
    console.log('hkjfhkf',this.user.value);

  }
  // this.router.navigate(['/register']);
}
}
