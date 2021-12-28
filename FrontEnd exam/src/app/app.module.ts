import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  { path: 'game-board-component', component: GameBoardComponent },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameBoardComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
