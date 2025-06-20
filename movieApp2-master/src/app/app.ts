import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'movieApp';
}

