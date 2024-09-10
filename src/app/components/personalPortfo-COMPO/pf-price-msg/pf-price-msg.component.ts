import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetPersonalPFService } from 'src/app/services/personal-portfolio/get-personal-pf.service';

@Component({
  selector: 'app-pf-price-msg',
  templateUrl: './pf-price-msg.component.html',
  styleUrls: ['./pf-price-msg.component.css'],
  // styleUrl: './pf-price-msg.component.css',
  standalone: true,
  imports: [
    CommonModule
  ],
})
export class PfPriceMsgComponent implements OnInit {

  nf_data: any = [];
  nf_data_list: any=[]

  constructor(private serv: GetPersonalPFService) {}

  ngOnInit(): void {
    this.fetch_nf();
  }

  fetch_nf() {
    this.serv.getNetworkFactor().subscribe((res) => {
      this.nf_data = res;
      console.log('nf data is : ', this.nf_data);
      this.nf_data_list = res.data.list.Assets.list
      console.log('nf_list data is : ', this.nf_data_list);

    });
  }
}
