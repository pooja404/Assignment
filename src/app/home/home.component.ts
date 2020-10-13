import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  toggle : boolean =false;
  main :string ="col-md-10";
  side:string="col-md-2";
  ngOnInit(): void {
  }
  
    toggleClick() {
      console.log('button clicked',this.toggle);
      this.toggle =!this.toggle;
    if(this.toggle==false){
      console.log('false',this.toggle);
      this.main="col-md-10";
      this.side="col-md-2";
    }else{
    console.log('true',this.toggle);
    this.main="com-md-12";}
  }

}
