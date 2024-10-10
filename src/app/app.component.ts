import { Component } from '@angular/core';
import{ FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { NgFor } from '@angular/common';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { 
  userForm!: FormGroup;
   constructor (private formBuilder: FormBuilder) { 
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: [ "", [Validators.required, Validators.pattern(/^\w+([-+."]\w+)@\w+([-.]\w+)\.\w+([-.]\w +)*$/),],],
      address: this.formBuilder.group ({
        street:[ "", Validators.required],
        city: ["", Validators.required]

    }),
   }); 

  } 

  submitForm (){
    if (this.userForm.valid){
      console.log (this.userForm.valid);
    }
    }
  }
  