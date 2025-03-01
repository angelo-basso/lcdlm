import {Injectable} from '@angular/core';
import {Commitment} from '../models/commitment.model';

@Injectable({
  providedIn: 'root'
})
export class CommitmentService {

  commitments: Commitment[] = [
    new Commitment("Finis les taches chronophages", "check-list-clipboard"),
    new Commitment("Objectif commun", "handshake", "h-100px"),
    new Commitment("Experience locale", "pretzel", "h-100px")
  ]
}
