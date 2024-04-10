function validateForm(){
  
   
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let phone = document.getElementById('phone').value

    if(fname=="" || lname=="" || email==""|| city==""|| state==""||phone=="" )
    {
        alert("fields can not be empty")
        return false;
    }
    
    if(phone.length!=10)
    {
        alert("enter correct phone number")
        return false;
    }

 
    return true;
}

// function to show the data
 function showData(){

    let userList=[];
    if(localStorage.getItem('userList') == null){
        userList=[];
    }

    else{
        userList=JSON.parse(localStorage.getItem('userList'))
    }

   let html ='';

   userList.forEach(function (element , index){
      html += "<tr>";
      html += "<td>" + element.fname + "</td>";
      html += "<td>" + element.lname + "</td>";
      html += "<td>" + element.email + "</td>";
      html += "<td>" + element.phone + "</td>";
      html += "<td>" + element.city + "</td>";
      html += "<td>" + element.state + "</td>";
      html += '<td><div class="btn"><button onclick="deleteUser('+index+')">Delete</button><button id="update" onclick="updateData('+index+')">update</button></div></td>';
      html +="</tr >"
   });

   document.querySelector('#usertable').innerHTML=html;


 } 

 // loads all the data when document or page is loaded
 document.onload = showData();


// function to add the data 
function addData(){
  //if form is valiataed 
    if(validateForm()== true){
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;
        let phone = document.getElementById('phone').value;
       
        let userList=[];
        if(localStorage.getItem('userList') == null){
            userList=[];
        }
    
        else{
            userList=JSON.parse(localStorage.getItem('userList'))
        }

        userList.push({
            fname : fname,
            lname:lname,
            email:email,
            city:city,
            state:state,
            phone:phone
            
        })

        localStorage.setItem("userList",JSON.stringify(userList));

      
    }

}
    function deleteUser(index){
        let userList=[];

        if(localStorage.getItem('userList') == null){
            userList=[];
        }
    
        else{
            userList=JSON.parse(localStorage.getItem('userList'))
        }

      
    userList.splice(index,1);
    localStorage.setItem('userList', JSON.stringify(userList));
    showData();
}

