import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [NavBar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'movieApp';
}
