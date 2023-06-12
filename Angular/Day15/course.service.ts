export class CourseService{
    private course:string[]=['Core java','Html','Css','javascript','Typescript','Angular 12','AWS','docker','Jenkings'];

    getCourse(){
        return this.course;
    }
}