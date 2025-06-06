# README - Aplicatie SaaS Multi-Tenant cu Dashboard Personalizat

## 🧭 Viziune Generală

Această aplicație permite companiilor (tenants) să gestioneze date proprii (ex: stocuri) și să creeze dashboard-uri
dinamice cu widget-uri configurabile (grafice, tabele etc). Fiecare companie are utilizatori proprii, date proprii și
configurări personalizate.

## 🛠️ Tehnologii Utilizate

* **Frontend:** Next.js + TypeScript + Tailwind CSS
* **Backend:** Next.js API Routes / Server Actions
* **Baza de date:** PostgreSQL + Prisma ORM
* **Autentificare:** NextAuth.js (JWT)
* **Stocare flexibilă:** Coloane JSON
* **Hosting:** Vercel (frontend), Railway/Render (backend + DB)

## 🧱 Arhitectură Modulară

### 🏢 Tenant Management

* Creare companie (UUID, nume, configurări specifice)
* Stocare planuri tarifare și formConfig

### 👤 User Management

* Roluri: ADMIN, AGENT
* Asociere la tenant prin `tenant_id`
* Validări de autentificare și acces

### 📊 Dataset Management

* Upload fișiere Excel/CSV convertite în JSON
* Schema + date stocate ca JSON

### 📈 Dashboard & Widgets

* Dashboard pe tenant
* Widget-uri configurabile (tip, poziție, filtre, calcule)

## 🗂️ Structura Codului

```
/src
  /models         // Interfețe TypeScript
  /services       // Clase cu logica de business
  /components
    /widgets      // Componente pt grafice, tabele
    /dashboard    // Layout dashboard
  /pages
    /api          // Rute API Next.js
    /dashboard    // Dashboard vizual
  /lib            // Funcții helper
```

## 📦 Exemple de Modele TypeScript

```ts
export interface Tenant {
	id: string;
	name: string;
	createdAt: Date;
	settings: object;
	formConfig: object;
	plan: string;
}

export interface Dataset {
	id: string;
	name: string;
	tenantId: string;
	schema: object;
	rows: any[];
	uploadedAt: Date;
}

export interface Widget {
	id: string;
	dashboardId: string;
	type: 'bar_chart' | 'pie_chart' | 'table';
	config: object;
	position: { x: number; y: number; width: number; height: number };
}
```

## 🔐 Autentificare și Acces

* NextAuth.js cu JWT customizat
* Middleware pentru protejarea rutelor
* Token conține `tenantId`, `role`

## 🎯 Funcționalități Cheie

### Pentru ADMIN:

* Gestionare utilizatori
* Upload date stoc (CSV/Excel)
* Creare și configurare dashboard

### Pentru AGENT:

* Vizualizare dashboard
* Introducere comenzi (cu permisiuni)

## ⚙️ Scalabilitate și Flexibilitate

* Structură JSON pentru flexibilitate
* TenantId pentru izolare multi-tenant
* Arhitectură modulară ușor extensibilă

## 🗓️ Roadmap de Implementare

1. Setup proiect și modele TypeScript
2. Autentificare + protecție rută
3. CRUD Tenants + Users
4. Upload Dataset (Excel → JSON)
5. Vizualizare tabelară
6. Dashboard UI + componente
7. Configurare dinamică widget
8. Drag & drop + poziționare
9. Persistență dashboard
10. Testare + UI polish
11. MVP + lansare


