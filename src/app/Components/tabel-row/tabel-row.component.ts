import { Component,OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-tabel-row',
  templateUrl: './tabel-row.component.html',
  styleUrls: ['./tabel-row.component.css']
})
export class TabelRowComponent implements OnInit{
  @Input() tabelrow:string[]=[]
  Tabelrow:string[]=[];
  ngOnInit(): void {

  }
  constructor(){}


}
