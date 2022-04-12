import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumComponent } from "./Albums/album/album.component";
import { UserDetailComponent } from "./Users/user-detail/user-detail.component";
import { UsersComponent } from "./Users/users/users.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "users", component: UsersComponent },
  { path: "albums", component: AlbumComponent },
  { path: ":tr", component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
