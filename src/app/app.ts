import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Piano } from "./piano";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Piano],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'piano';
}
