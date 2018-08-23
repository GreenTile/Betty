import { ErrorHandler } from "@angular/core";

export class appErrorHandler implements ErrorHandler{
    handleError(error){
        alert('an unexpected error occurred');
        // console.log('error occured');
        console.log(error);
    }

}