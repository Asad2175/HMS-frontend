import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CropperComponent} from "angular-cropperjs";

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  profilePicCloseResult: string = '';
  basicDetails: FormGroup;
  isAdd = false;
  imageUrl: string = 'assets/images/others/placeholder.jpg';
  resultImage: any;

  // Plugin configuration
  config = {
    zoomable: false
  };

  constructor(private modalService: NgbModal,
              private fb: FormBuilder) {
    this.basicDetails = this.fb.group({
      profile_pic: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nic: ['', Validators.required],
      gender: ['', Validators.required],
      joining_date: ['', Validators.required],
      father_name: ['', Validators.required],
      father_nic: [''],
      phone_no: ['', Validators.required],
      employment: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      status: [true, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.profilePicCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  onSubmit = () => {
    this.isAdd = true;
    console.log('this', this.basicDetails.value);
  }

  closeModal(content: TemplateRef<any>): any {
    this.modalService.dismissAll(content);
  }
}
