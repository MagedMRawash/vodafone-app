import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  clientFormGroup: FormGroup;

  constructor(private fb : FormBuilder ) { }

  ngOnInit() {
    this.clientFormGroup = this.fb.group({
      email:['', [Validators.required, Validators.pattern( /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ]],
      password:['', [Validators.required, Validators.minLength(6)]]
      });

  }

}
