import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.scss']
})
export class RentDetailsComponent implements OnInit {
  rentDetails: FormGroup;
  isAdd = false;
  constructor(private fb : FormBuilder) {
    this.rentDetails = this.fb.group({
      is_advance: [false, Validators.required],
      advance_amount: [0, Validators.required],
      monthly_rent: [0, Validators.required],
    });
  }
  advanceToggle = () => {
    if (!this.rentDetails.get('is_advance')?.value) {
      this.rentDetails.get('advance_amount')?.setValue(0);
    }
  }
  onSubmit = () => {
    this.isAdd = true;
    console.log('this.', this.rentDetails.value);
  }
  ngOnInit(): void {
  }

}
