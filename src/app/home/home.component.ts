import {Component, OnInit} from '@angular/core';
import {Commitment} from '../models/commitment.model';
import {CommitmentService} from '../services/commitment.service';
import {CommitmentCardComponent} from './commitment-card/commitment-card.component';
import {NgForOf} from '@angular/common';
import {CtaComponent} from '../cta/cta.component';
import {CtaModel} from '../models/cta.model';

@Component({
  selector: 'app-home',
  imports: [
    CommitmentCardComponent,
    NgForOf,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  commitments!: Commitment[];
  contactUsCta:CtaModel = {title:'Nous contacter', link:'/contact'};

  constructor(private commitmentService: CommitmentService) {
  }

  ngOnInit() {
    this.commitments = this.commitmentService.commitments;
  }
}
