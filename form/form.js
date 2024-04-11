function validateForm() {


    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let phone = document.getElementById('phone').value



    if (fname == "" || lname == "" || email == "" || city == "" || state == "" || phone == "") {
        alert("fields can not be empty")
        return false;
    }

    if (phone.length != 10) {
        alert("enter correct phone number")
        return false;
    }




    return true;
}

// function to show the data
function showData() {

    let userList = [];
    if (localStorage.getItem('userList') == null) {
        userList = [];
    }

    else {
        userList = JSON.parse(localStorage.getItem('userList'))
    }

    let html = '';

    userList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.lname + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += "<td>" + element.city + "</td>";
        html += "<td>" + element.state + "</td>";
        html += '<td><div class="btn"><button onclick="deleteUser(' + index + ')">Delete</button><button id="update" onclick="updateData(' + index + ')">update</button></div></td>';
        html += "</tr >"
    });

    document.querySelector('#usertable').innerHTML = html;


}

// loads all the data when document or page is loaded
document.onload = showData();


// function to add the data to local stroage 
function addData() {

    //if form is valiataed 
    if (validateForm() == true) {
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;
        let phone = document.getElementById('phone').value;

        let userList = [];
        if (localStorage.getItem('userList') == null) {
            userList = [];
        }

        else {
            userList = JSON.parse(localStorage.getItem('userList'))
        }

        userList.push({
            fname: fname,
            lname: lname,
            email: email,
            city: city,
            state: state,
            phone: phone

        })

        localStorage.setItem("userList", JSON.stringify(userList));


    }

}
function deleteUser(index) {
    let userList = [];

    if (localStorage.getItem('userList') == null) {
        userList = [];
    }

    else {
        userList = JSON.parse(localStorage.getItem('userList'))
    }


    userList.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(userList));
    showData();
}

function updateData(index) {

    document.getElementById("btn-submit").innerHTML = "Update"

    let userList = [];
    if (localStorage.getItem('userList') == null) {
        userList = [];
    }

    else {
        userList = JSON.parse(localStorage.getItem('userList'))
    }

    //     const data = userList[index]
    //    //const data = JSON.stringify(da)
    //     console.log(data.city)
    const fname = document.getElementById('fname')//=userList[index].fname;
    // document.getElementById('lname').valuel=userList[index].lname;
    // document.getElementById('email').valuel=userList[index].email;
    // document.getElementById('city').valuel=userList[index].city;
    // document.getElementById('phone').valuel=userList[index].phone;
    // document.getElementById('state').valuel=userList[index].state;
    console.log(userList)
    fname.value = "yyy"
    document.getElementById('btn-submit').onclick = function () {

        if (validateForm() == true) {


            // console.log( typeof document.getElementById("city").value)
            // console.log(typeof data.city)
            // console.log(document.getElementById("city").value)
            // console.log(data.city)
            // let c=document.getElementById("city").value;
            // let cc=data.city
            // console.log(cc.innerHTML=c)

            // data.fname=document.getElementById('fname').value
            // data.lname=document.getElementById('lname').value
            // data.email=document.getElementById('email').value
            // data.city=document.getElementById('city').value
            // data.phone=document.getElementById('phone').value
            // data.state=document.getElementById('state').value
            console.log(userList[index].fname)
            userList[index].fname = document.getElementById("fname").value;
            userList[index].lname = document.getElementById("lname").value;
            userList[index].email = document.getElementById("email").value;
            userList[index].city = document.getElementById("city").value;
            userList[index].state = document.getElementById("state").value;
            userList[index].phone = document.getElementById("phone").value;

            console.log(userList)
            localStorage.setItem('userList', JSON.stringify(userList));

            document.getElementById("btn-submit").innerHTML = "Submit"

            showData()

            // document.getElementById("fname").value="";
            // document.getElementById("lname").value="";
            // document.getElementById("email").value="";
            // document.getElementById("city").value="";
            // document.getElementById("state").value="";
            // document.getElementById("phone").value="";
        }
    }


}



