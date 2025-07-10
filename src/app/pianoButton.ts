import { Component, input, output } from "@angular/core";

@Component({

    template:`
    
    @if (keyType())
        {

            <div class=" h-4 bg-white active:bg-gray-100"></div>

        }
    @else         {

            <div class=" h-2 bg-black active:bg-gray-900"></div>

        }
    <div></div>
    
    `,
    selector:"button"
})
export class PianoButton {

    keyType = input(false); // if it's false it's a white key, otherwise it's a black one

    constructor() {
        // get the audio using the name from parent
        
    }
}