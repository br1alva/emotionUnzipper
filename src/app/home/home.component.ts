import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { map, Subscription } from 'rxjs';
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
    isProyected: this.fb.control(false),
    relationshipName: this.fb.control(null),
  });
  ownershipOptions = [
    { label: 'Myself', value: false, tooltip: "I know it's my thing 😵‍💫..." },
    {
      label: 'Something/someone else',
      value: true,
      tooltip: "Ugh 😒, it's something/someone else's fault",
    },
  ];
  story = '';
  private sub!: Subscription;

  constructor(private fb: FormBuilder, private forms: FormService) {}

  ngOnInit(): void {
    this.updateStory(this.welcomeForm.value);
    this.sub = this.onWelcomeFormChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onFirstEventOwnershipSelection(event: MatButtonToggleChange) {
    event.value as string;
  }

  private onWelcomeFormChanges(): Subscription {
    return this.welcomeForm.valueChanges.subscribe((value) =>
      this.updateStory(value)
    );
  }

  private updateStory(value: any): void {
    const isProyected = value.isProyected ?? false;
    const owner = isProyected ? value.relationshipName : 'me';
    this.story = `It's ${owner}.`;
  }
}
