import {Component, Input} from '@angular/core';
import {CtaModel} from '../models/cta.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'lcdlm-cta',
  imports: [
    RouterLink
  ],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})

export class CtaComponent {
@Input() cta!: CtaModel;
}
