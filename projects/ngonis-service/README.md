
# Ngonis Service Library for Angular

The **Ngonis Service Library** is an Angular module designed to simplify HTTP requests and API interactions within Angular applications. It provides a standardized service (`NgonisService`) for performing common HTTP operations such as GET, POST, PUT, DELETE, and handling errors.

## Features

- Easy integration into Angular applications.
- Encapsulates HTTP request logic and error handling.
- Supports dynamic configuration of API base URLs.
- Promotes code reusability and maintainability.

## Installation

Install the library via npm:

```bash
npm install ngonis-http-service
```

## Usage

### 1. Import Module

Import the `NgonisService` into your Angular application's root module (e.g., `AppModule`).

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DefaultServiceModule, BASE_URL_TOKEN } from 'default-service';
import { environment } from '../environments/environment'; // Adjust path as needed

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   NgonisServiceModule
  ],
  providers: [
    NgonisService,
    { provide: BASE_URL_TOKEN, useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Inject and Use `NgonisService`

Inject `NgonisService` into your components or services and use its methods to interact with your API.

```typescript
import { Component, OnInit } from '@angular/core';
import { NgonisService } from 'ngonis-service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  constructor(private nService: NgonisService<any>) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.nService.get<any[]>('your-url').subscribe(
      (data) => {
        console.log('Users:', data);
        // Handle data
      },
      (error) => {
        console.error('Error fetching users:', error);
        // Handle error
      }
    );
  }
}
```

### 3. Configuration

- **Base URL**: Define the base URL of your API in your environment configuration (`environment.ts` or `environment.prod.ts`).

```typescript
// environment.ts
export const environment = {
  production: false,
  baseUrl: 'https://api.example.com'
};
```

### 4. Methods Available

- `get(url: string)`: Perform a GET request to the specified URL.
- `post(url: string, body: any)`: Perform a POST request to the specified URL with the given body.
- `put(url: string, body: any)`: Perform a PUT request to the specified URL with the given body.
- `delete(url: string)`: Perform a DELETE request to the specified URL.
- `search(parameter: string)`: Perform a GET request with search parameters.

### Error Handling

Errors are handled internally in `NgonisService`. You can customize error handling by extending the service.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgonisService } from 'ngonis-service';

@Injectable({
  providedIn: 'root'
})
export class CustomService<T> extends NgonisService<T> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://custom-api.example.com');
  }

  // Override or extend methods as needed
}
```



### Notes:

- Replace `https://api.example.com` with your actual API base URL.
- Customize the error handling and methods in `NgonisService` as per your application's requirements.
