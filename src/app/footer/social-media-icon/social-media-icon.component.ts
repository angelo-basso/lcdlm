import {Component, Input} from '@angular/core';
import {SocialMedia} from '../../models/social-media.model';

@Component({
  selector: 'app-social-media-icon',
  imports: [],
  templateUrl: './social-media-icon.component.html',
  styleUrl: './social-media-icon.component.scss'
})
export class SocialMediaIconComponent{

  @Input() socialMedia!: SocialMedia;
  constructor() {}

}
