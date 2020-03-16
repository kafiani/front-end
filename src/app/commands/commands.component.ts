import { Component, OnInit } from '@angular/core';
import { PanierServiceService } from 'src/app/Services/panier-service.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  allCommands:commandInfo[]=[];
  allCommandLines:command[][]=[];
  visible:boolean[]=[];
  constructor(private panierService:PanierServiceService) {}

  getAllCommand(){
    this.panierService.getCommandsForAdmin().subscribe(
      (data:commandInfo[]) => {
        this.allCommands = data;
        let i = 0;
        for(let oneCommand of this.allCommands){
          this.getCommandLines(oneCommand.id,i);
          i++
          this.visible[i]=false;
        }
      },
      error=>console.error(error)
    );
  }
  visibility(i){
    if(this.visible[i])
    this.visible[i]=false;
    else
    this.visible[i]=true;    
  }
  getCommandLines(id,i){
    this.panierService.getCommandsLines(id).subscribe(
      (data:command[]) => {
        this.allCommandLines[i] = data;   
      },
      error=>console.error(error)
    );
  }

  changeStatus(id,indexOfCommand){   
   
     
    this.panierService.changeStatus({"id":id}).subscribe();
    this.allCommands[indexOfCommand].status = true;
    
  }

  ngOnInit() {
    this.getAllCommand();
    
  }

}
class commandInfo {
    id:null;
    fullname:null;
    numero:null;
    address:null;
    city:null;
    country:null;
    created_at:null;
    status:boolean;
    total:null;
}
class command{
  id:null;
  idProduct:number;
  quantity:number;
}
