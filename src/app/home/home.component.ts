import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Subscription } from 'rxjs';
import { Pronoun } from '../shared/models/pronoun.model';
import { Relationship } from '../shared/models/relationship.model';
import { FormService } from '../shared/services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 1;
  linear = true;
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  welcomeForm = this.fb.group({
    isProyected: this.fb.control(true),
  });
  ownershipOptions = [
    { label: 'myself', value: false, tooltip: "I know it's my thing 😵‍💫..." },
    {
      label: 'something/someone else',
      value: true,
      tooltip: "Ugh 😒, it's something/someone else's fault",
    },
  ];
  private sub!: Subscription;

  constructor(private fb: FormBuilder, private forms: FormService) {}

  ngOnInit(): void {
    const relForm = this.forms.buildForm<Relationship>();
    console.log(relForm);
    this.sub = this.onStepFormChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onFirstEventOwnershipSelection(event: MatButtonToggleChange) {
    event.value as string;
  }

  private onStepFormChanges(): Subscription {
    return this.welcomeForm.valueChanges.subscribe((value) =>
      console.log(this.welcomeForm)
    );
  }
}
