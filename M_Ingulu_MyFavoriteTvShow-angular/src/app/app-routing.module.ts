import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PreloadAllModules } from '@angular/router';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full",
    component: HomeComponent
    resolve: {
      crisis: CrisisDetailResolverService
    }
  },

  { path: "content/:id" , component: ContentDetailComponent },
  {
    path: "content",
    component: ContentListComponent

    loadChildren: () =>
import(".content/content.module")
.then((c) => c.ContentModule),

  },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },

  { path: "**", component: PageNotFoundComponent }
];


RouterModule.forRoot(
  appRoutes,
  {
    preloadingStrategy: PreloadAllModules
  }
)

@NgModule({
  //declarations: [],
  //imports: [
    //CommonModule
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule { }
