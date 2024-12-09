import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-app',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-app.component.html',
  styleUrl: './form-app.component.css'
})
export class FormAppComponent {
  form: FormGroup

  
  constructor(private simpleForm: FormBuilder){
    this.form = this.simpleForm.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('09\\d{2}-\\d{3}-\\d{4}')]]
    });
  }

  submitForm() {
    console.log(this.form.value);
  }
}
