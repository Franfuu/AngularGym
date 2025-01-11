import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, updateDoc, doc, docData, deleteDoc, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyCollection: CollectionReference;


  constructor(private firestore: Firestore) {
    this.companyCollection = collection(this.firestore, 'clients');
  }

  // Obtener todas las companys
  getCompanies(): Observable<Company[]> {
    return collectionData(this.companyCollection, { idField: 'id' }) as Observable<Company[]>;
  }

  // Obtener una company por ID
  getCompany(id: string): Observable<Company | undefined> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return docData(companyDocRef) as Observable<Company | undefined>;
  }

  // Agregar una nueva company
  addCompany(company: {
    tipo_membresia: string;
    altura: number;
    peso: number;
    apellido: string;
    genero: string;
    telefono: string;
    nombre: string
  }): Promise<void> {
    return addDoc(this.companyCollection, company) as unknown as Promise<void>;
  }

  // Actualizar una company existente
  updateCompany(id: string, company: Partial<Company>): Promise<void> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return updateDoc(companyDocRef, company) as Promise<void>;
  }

  // Eliminar una company
  deleteCompany(id: string | undefined): Promise<void> {
    const companyDocRef = doc(this.firestore, `clients/${id}`);
    return deleteDoc(companyDocRef) as Promise<void>;
  }
}
