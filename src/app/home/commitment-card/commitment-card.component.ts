import {Component, Input} from '@angular/core';
import {Commitment} from '../../models/commitment.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-commitment-card',
  imports: [
    NgClass
  ],
  templateUrl: './commitment-card.component.html',
  styleUrl: './commitment-card.component.scss'
})
export class CommitmentCardComponent {

  @Input() commitment!: Commitment;
  constructor() {}
}
