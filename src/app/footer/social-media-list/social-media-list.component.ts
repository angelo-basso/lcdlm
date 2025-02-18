import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {SocialMedia} from '../../models/social-media.model';
import {SocialMediaIconComponent} from '../social-media-icon/social-media-icon.component';

@Component({
  selector: 'app-social-media-list',
  imports: [
    NgForOf,
    SocialMediaIconComponent
  ],
  templateUrl: './social-media-list.component.html',
  styleUrl: './social-media-list.component.scss'
})
export class SocialMediaListComponent{
  @Input()
  socialMediaList!: SocialMedia[];

  constructor() {}

}
