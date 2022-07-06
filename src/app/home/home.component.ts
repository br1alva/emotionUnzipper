import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  stepForm = this.fb.group({ step: this.fb.control(null) });
  control = this.fb.control(null);
  linear = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
