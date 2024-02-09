import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private snack:MatSnackBar) { }

  public user = {
    userName :'',
    password :'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.userName == '' || this.user.userName == null ){
      // alert('User Name is required !!!');
      this.snack.open('User Name is required !!!','OK',{
        duration:3000,
        // verticalPosition:'top',
      });
      return;
    }
    //add User
    this.userService.addUser(this.user).subscribe(
      (data: any)=>{
        // console.log(data);
        // alert("Success");
        // this.snack.open("Success",'',{
        //   duration:3000,
        //   // verticalPosition:'top',
        // });
        swal.fire('Success','user id registered'+data.id,'success');
      },
      (error)=>{
        console.log(error);
        // alert("Something went wrong");
        // this.snack.open("Something went wrong",'',{
        //   duration:3000,
        // });
        swal.fire('error','Something went wrong','error');
      }

    );
  }

}
