import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registraation-request.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

	public registrationForm: any 

	public passwordFieldType: string = 'password';

	get nameField (): FormControl {
		return this.registrationForm.get( 'name' ) as FormControl;
	}

	get emailField (): FormControl {
		return this.registrationForm.get( 'email' ) as FormControl;
	}

	get passwordField (): FormControl {
		return this.registrationForm.get( 'password' ) as FormControl;
	}

	get favouriteHexCodeValue (): string {
		return this.registrationForm.get ( 'favouriteHexCode' ).value;
	}

	constructor() { 
   }


	ngOnInit(): void {
		this.generateRegistrationForm();
	}


	public generateRegistrationForm (): void {
		this.registrationForm =
			new FormGroup( {
				name: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							UniversalValidators.noEmptyString
						]
					}
				),
				email: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							EmailValidators.normal
						]
					}
				),
				password: new FormControl(
					'',
					{
						validators: [
							Validators.required,
							UniversalValidators.noWhitespace
						]
					}
				),
				favouriteHexCode: new FormControl( '' )
			});
	}

	public submitRegistrationForm (): void {
		if ( this.registrationForm.valid ) {
			const registrationRequest: RegistrationRequestModel = {
				...this.registrationForm.value
			};

			
			console.log( { registrationRequest } );
		}
	}

	public togglePasswordVisible (): void {
		this.passwordFieldType =
			this.passwordFieldType === 'text'
				? 'password'
				: 'text';
	}

}