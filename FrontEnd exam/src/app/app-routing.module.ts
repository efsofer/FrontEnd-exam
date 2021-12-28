import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'game-board-component', component: GameBoardComponent },
  { path: 'welcome-component', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
