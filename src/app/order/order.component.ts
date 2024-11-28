import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderServiceService } from '../order-service.service';
import { Order } from '../../order';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private orderService:OrderServiceService){}

  quantity=new FormControl("",[
    Validators.required,
    ])


    name=new FormControl("",[
      Validators.required,
      Validators.min(1)
      ])

      price=new FormControl("",[
        Validators.required,
        Validators.min(1)
        ])


        form=new FormGroup({
          name:this.name,
          quantity:this.quantity,
          price:this.price
      
        },);

   
  submit(){
    const order: Order = this.form.value as Order;
    console.log(order)
    this.orderService.addOrder(order).subscribe({
      next: (response) => {
        console.log(response); 
        if (response.link) {
          window.open(response.link, '_blank'); // Open in a new tab
        } else {
          console.error('No link found in response');
        }

    
      }}
      
  

  
  )

}}
