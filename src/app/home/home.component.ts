import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  cols = 1;
  stepForm = this.fb.group({ step: this.fb.control(null) });
  control = this.fb.control(null);
  linear = true;
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
