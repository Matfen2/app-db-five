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
      adress: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  connect() {
    const { adress, pass } = this.connectForm.value; // Utilisation des valeurs du formulaire
    this.authService.connectMember(adress, pass).subscribe(() => {
      if (this.connectForm.valid) {
        this.successConnect = true;
        this.connectForm.reset();
      } else {
        this.successConnect = false;
        this.errorConnect = true;
      }
    });
  }

  ngOnInit(): void {
  }
}
