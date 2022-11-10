import { UserForRegistrationDto } from 'src/app/interfaces/user/userForRegistrationDto.model'; 
import { RegistrationResponseDto } from 'src/app/interfaces/response/registrationResponseDto.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserForAuthenticationDto } from '../interfaces/user/userForAuthenticationDto.model';
import { AuthResponseDto } from '../interfaces/response/authResponseDto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    //return this.http.post<RegistrationResponseDto> (this.baseUrl + route, body);
  }

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
   // return this.http.post<AuthResponseDto>(this.baseUrl + route, body);
  }
}