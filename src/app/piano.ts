import { Component } from "@angular/core";
import { PianoButton } from "./pianoButton";

@Component({

    selector:"piano",
    imports:[PianoButton],
    template:`
    
    <div class="flex flex-row w-screen/2"> 

    @for (item of notes; track $index) {
        <piano-button [keyType]="item.isBlack" [name]="item.name"></piano-button>
    }
    </div>
    
    `
})
export class Piano {
     notes = [
  { name: 'key01', isBlack: false },
  { name: 'key02', isBlack: true },
  { name: 'key03', isBlack: false },
  { name: 'key04', isBlack: true },
  { name: 'key05', isBlack: false },
  { name: 'key06', isBlack: true },
  { name: 'key07', isBlack: false },
  { name: 'key08', isBlack: false },
  { name: 'key09', isBlack: true },
  { name: 'key10', isBlack: false },
  { name: 'key11', isBlack: true },
  { name: 'key12', isBlack: false },
  { name: 'key13', isBlack: false },
  { name: 'key14', isBlack: true },
  { name: 'key15', isBlack: false },
  { name: 'key16', isBlack: true },
  { name: 'key17', isBlack: false },
  { name: 'key18', isBlack: true },
  { name: 'key19', isBlack: false },
  { name: 'key20', isBlack: false },
  { name: 'key21', isBlack: true },
  { name: 'key22', isBlack: false },
  { name: 'key23', isBlack: true },
  { name: 'key24', isBlack: false },
];
    constructor() {
        
    }
}