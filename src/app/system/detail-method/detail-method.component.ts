import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { DetailModel } from 'src/app/models/detail.model';
import detail from './../../../assets/detail/metodosExperto.json';

@Component({
  selector: 'app-detail-method',
  templateUrl: './detail-method.component.html',
  styleUrls: ['./detail-method.component.scss']
})
export class DetailMethodComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.arrayOfMethods = detail;
  }
  method: any;
  arrayOfMethods: DetailModel[] = [];

  ngOnInit(): void {
    window.scroll(0,0);
    this.method = this.route.snapshot.params.id;
    console.log(this.method);
    this.getMethod();
  }
  detailMethod: DetailModel;
  getMethod(){
  
    this.detailMethod = detail[this.method];
  }
  
  fnGoBack(){
    this.location.back();
  }

}
