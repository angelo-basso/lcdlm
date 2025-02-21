import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CgvComponent} from './static-pages/legal/cgv/cgv.component';
import {LegalMentionComponent} from './static-pages/legal/legal-mention/legal-mention.component';
import {PrivacyPolicyComponent} from './static-pages/legal/privacy-policy/privacy-policy.component';
import {BlogComponent} from './static-pages/further/blog/blog.component';
import {TheyTalkAboutUsComponent} from './static-pages/further/they-talk-about-us/they-talk-about-us.component';
import {HiringComponent} from './static-pages/further/hiring/hiring.component';
import {EstimateYourIncomeComponent} from './static-pages/further/estimate-your-income/estimate-your-income.component';
import {
  FrequentlyAskedQuestionComponent
} from './static-pages/further/frequently-asked-question/frequently-asked-question.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'legal/cgu', component: CgvComponent},
  {path: 'legal/legal-mention', component: LegalMentionComponent},
  {path: 'legal/privacy-policy', component: PrivacyPolicyComponent},
  {path: 'further/blog', component: BlogComponent},
  // {path:'further/they-talk-about-us', component: TheyTalkAboutUsComponent},
  {path: 'further/frequently-asked-questions', component: FrequentlyAskedQuestionComponent},
  // {path:'further/hiring',component:HiringComponent},
  {path: 'further/estimate-your-income', component: EstimateYourIncomeComponent}

];
