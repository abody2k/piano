import { Component, inject, input, OnInit, output } from "@angular/core";

@Component({

    
    template:`
    
    @if (keyType())
        {

            <div class="w-20 h-24 bg-white active:bg-gray-100"  (mousedown)="pressed()" ></div>

        }
    @else         {

            <div class="w-20 h-16 bg-black active:bg-gray-900 m-2 relative -top-2" (mousedown)="pressed()" ></div>

        }
    <div></div>
    
    `,
    selector:"piano-button"
})
export class PianoButton implements OnInit {


    keyType = input(false); // if it's false it's a white key, otherwise it's a black one
    name = input("");
    audio = new Audio()
    // audioLoder = inject(WebAudioService)

        ngOnInit(): void {
            // this.audioLoder.loadNote(this.name(),"/assets/"+this.name()+".mp3");
        this.audio = new Audio("/assets/"+this.name()+".mp3");
        this.audio.loop= false;
    }

    pressed(){

        // this.audioLoder.playNote(this.name())
        
        this.audio.currentTime=0
this.audio.play();
    }

    released(){

        this.audio.pause()
        this.audio.currentTime=0
    }

    
}