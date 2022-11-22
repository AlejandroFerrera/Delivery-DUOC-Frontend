import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Client } from 'src/app/models/client.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);
  password = new FormControl('', [Validators.required]);

  // init login form ,
  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario y/o contraseña son incorrectos.',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
        },
      ],
    });
    await alert.present();
  }

  login() {
    const email = this.email.value!;
    const password = this.password.value!;

    this.authService.login(email, password).subscribe((response: Client) => {
      console.log(email, password)
      if (this.authService.isLogedIn()) {
        const navigationExtras: NavigationExtras = {
          state: {
            id: response.id,
            nombre: response.nombre,
            apellido: response.apellido,
          },
        };

        this.router.navigate(['home/listing'], navigationExtras);
      } else {
        this.authService.logout();
        this.presentAlert();
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }

}
