import {Component, OnInit} from '@angular/core';
import {SocialMediaService} from '../services/social-media.service';
import {SocialMedia} from '../models/social-media.model';
import {SocialMediaListComponent} from './social-media-list/social-media-list.component';

@Component({
  selector: 'app-footer',
  imports: [
    SocialMediaListComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  socialMediaList!:SocialMedia[]

  constructor(private socialMediaService: SocialMediaService){}

  ngOnInit(){
    this.socialMediaList = this.socialMediaService.socialMedia;
  }
}
