import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(private routeid: ActivatedRoute,private api:ApiService){}
  data:any={}
  ngOnInit(){
    this.api.getproducts().subscribe((res:any)=>{
      let id=this.routeid.snapshot.paramMap.get('id')
      let response=res
      let product =response.filter((e:any)=>e.id==id)
      this.data=product[0]
    })
  }

}
