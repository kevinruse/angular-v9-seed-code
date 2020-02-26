import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  nameForm: FormGroup;
  userName: any;

  constructor(private formBuilder: FormBuilder) {
    this.nameForm = formBuilder.group({
      'userName' : [null]
    });
    this.userName = this.nameForm.controls['userName'];
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  log(val) {
    console.log(val);
  }

  ngOnInit() {
  }
}
