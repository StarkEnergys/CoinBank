import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';




@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    
    
   
    
    
    
    dasable:boolean = true;

    constructor() {
        
     }


     ngOnInit(): void {
       
        
    }
    
    Hola:boolean = this.eventos(false)
    eventos(aj:boolean){
        
        console.log(aj)
        return aj
    }
      
    
    
}


