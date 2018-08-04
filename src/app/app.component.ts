import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assignee: null
  }

  canSave = true;

  viewMode = 'map';
  courseses = [];



  courses = [1, 2];
  
  
  title = 'app';

  post = {

    title: 'Title',
    isFavorite: true
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("favorite changed!", eventArgs);

  }
  onAdd(){
    this.courseses.push({id:4,name:'course4'});
  }
  onRemove(course){
    // let index = this.courseses.indexOf(course);
    // this.courseses.splice(index,1);
    course.name = 'REMOVED!';
  }
  loadCourses(){
    this.courseses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ];
  }
  trackCourses  (index, course){
    return course ? course.id : undefined;
  }

  styleChange(){
    this.canSave = !this.canSave;
  }
}
