// connect.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'] // Correction de la faute de frappe ici
})
export class ConnectComponent implements OnInit {
  connectForm!: FormGroup;
  successConnect: boolean = false;
  errorConnect: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.connectForm = this.fb.group({
      adress: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]],
      pass: ['', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
    });
  }

  connect() {
  const { adress, pass } = this.connectForm.value;
  this.authService.connectMember(adress, pass).subscribe(
    () => {
      this.successConnect = true;
      this.connectForm.reset();
    },
    (error) => {
      this.successConnect = false;
      this.errorConnect = true;
    }
  );
}

  ngOnInit(): void {
  }
}
