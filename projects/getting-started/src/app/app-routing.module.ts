import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChairmanLetterComponent } from './components/about/chairman-letter/chairman-letter.component';
import { BoardOfDirictorsComponent } from './components/about/board-of-dirictors/board-of-dirictors.component';
import { CompanyProfileComponent } from './components/about/company-profile/company-profile.component';
import { CsrComponent } from './components/csr/csr.component';

const routes: Routes = [
  { path: `home`, redirectTo: ``, pathMatch: `full` },
  { path: ``, component: HomeComponent },
  { path: `chairman-letter`, component: ChairmanLetterComponent },
  { path: `board-of-dirictors`, component: BoardOfDirictorsComponent },
  { path: `company-profile`, component: CompanyProfileComponent },
  { path: `news`, component: NewsComponent },
  { path: `csr`, component: CsrComponent },
  { path: `services`, component: ServicesComponent },
  { path: `contact`, component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
