import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() + title}}</h2> <!-->interpolation</-->
    <ul> <!-->angluar  For Directive</-->
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <img src="{{ imgUrl }}"/> <!-->interpolation</-->
    <img [src]="imgUrl"/> <!-->property binding</-->
    <table>
        <tr>
            <td [attr.colspan]="colSpan">table</td> <!-->ia html bot not DOM obj</-->
        </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive">save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'red'">saved</button>
    <button (click)="onSave()">toggle</button>
    <div (click)="onDivCLicked()">
        <button (click)="onSave($event)">togglevent</button>
    </div>
    <input  [value]="email" (keyup.enter)="enter()"/>
    <input  [(ngModel)]="email" (keyup.enter)="enter()"/>
    <p>{{ course.title | lowercase | uppercase }}</p>
    <p>{{ course.rating | number:'7.1-1' }}</p>
    <p>{{ course.price | currency:'AUD':true:'8.2-2'}}</p>
    <p>{{ course.subscribers }}</p>
    <p>{{ course.releaseDate | date:'shortDate' }}</p>
    `
})
export class CoursesComponent{
    title = "courses";
    courses;
    // courses = ["course1","course2","course3"];
    imgUrl= "https://internet.aut.ac.ir/static/img/aut-light.png";
    colSpan=2;
    isActive=true;
    email = "me@example.com";
    course = {
        title: "udemy course",
        rating: 33522.23343,
        price: 8999,
        subscribers: 69060,
        releaseDate: new Date(1397,4,7)
    }
    getTitle(){
        return this.title;
    }
    onSave($event?){
        $event.stopPropagation();
        console.log("button clicked",$event);
        this.isActive = ! this.isActive;
    }
    onDivClicked(){
        console.log("div clicked!")
    }
    enter(email){
        console.log("entered! :   "+this.email)
    }

    constructor(service: CoursesService) {
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

}