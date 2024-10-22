import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  countries: { value: string; label: string }[] = [
    { value: 'ind', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'eng', label: 'England' },
  ];
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),
      gender: new FormControl(null, Validators.required),
      married: new FormControl(false),
      country: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
  onClear() {
    this.registrationForm.reset();
  }
}
