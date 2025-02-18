import {SocialMedia} from '../models/social-media.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService{
  socialMedia: SocialMedia[] = [
    {
      faIconName: "fa-facebook-square",
      url: "https://www.facebook.com/le.canape.de.la.marmotte/",
      altText: "Facebook : Conciergerie le Canapé de la Marmotte",
      hoverColorHexCode: "#0D47A1"
    },
    {
      faIconName: "fa-instagram",
      url: "https://www.instagram.com/conciergeriecanapemarmotte/",
      altText: "Instagram : le Canapé de la Marmotte",
      hoverColorHexCode: "#EC407A"
    },
    {
      faIconName: "fa-linkedin",
      url: "https://www.linkedin.com/in/l%C3%A9a-collmann/",
      altText: "LinkedIn : Léa Collmann",
      hoverColorHexCode: "#64B5F6"
    }
  ]
}
