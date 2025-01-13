// client-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Clients } from '../../models/clients';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from "../../components/notification/notification.component";

@Component({
  selector: 'app-company-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationComponent],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent {
  company: Clients = {id: '', nombre: '', apellido: '', genero: '', altura: 0, peso: 0, telefono: '', tipo_membresia: '' };
  id: string = '';
  showAlert: boolean = false;
  alertMessage: string = "";
  alertClass: string = "";

  constructor(private companyService: ClientsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      // Obtener los detalles de la empresa desde Firestore
      console.log(this.id);
      this.companyService.getCompany(this.id).subscribe({
        error: (error) => {
          this.alertMessage = `Error al cargar el cliente: ${error}`;
          this.alertClass = "danger";
          this.showAlert = true;
        },
        next: (company) => {
          if (company) {
            this.company = company;
          } else {
            this.alertMessage = `El cliente con id ${this.id} no existe`;
            this.alertClass = "danger";
            this.showAlert = true;
          }
        }
      });
    }
  }

  updateCompany() {
    if (this.id) {
      this.companyService.updateCompany(this.id, this.company).then(() => {
        this.alertMessage = `Cliente editado correctamente`;
        this.alertClass = "success";
        this.showAlert = true;
      }).catch((error) => {
        this.alertMessage = `Error al editar el cliente: ${error}`;
        this.alertClass = "danger";
        this.showAlert = true;
      });
    }
  }
}
