import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  emailId : string = "livetechservice@gmail.com";
  usPhoneNo: string ="1111111111111";
  indiaPhoneno : string = "888888888809";
  topHeaderMenuOne : any[] = ['Vission & Mision','Team','Career','Best Places To Work','Life at Livetech' ];
  topHeaderMenuThree : any [] = ['Digital Marketing' ,'Content Marketing', 'Video Marketing', 'App Marketing','E-commerce Solutions']
  constructor(
   
  ) { 


  }
  
  ngOnInit(): void {
  }

}
