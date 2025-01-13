// client-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Clients } from '../../models/clients';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  companies!: Observable<Clients[]>;

  constructor(private companyService: ClientsService) {}

  ngOnInit(): void {
    this.companies = this.companyService.getCompanies();
  }

  deleteCompany(id: string | undefined): void {
    this.companyService.deleteCompany(id);
  }
}
