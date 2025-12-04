function signnup(userName){
    let users = ["Ayesha", "John", "Alex", "Sara"]


    if(users.includes(userName)){
        return "User Already Registered, Please Login";
    }
    else{
        users.push(userName)
        return "Signup Successful, Please Login"
    }
}

function login(userName, pwd){
    let users = ["Ayesha", "John", "Alex", "Sara"]
    const password = "Emp@123"

    if(user.includes(userName)){
        return "Successfull Login"
    }
    else if(pwd != password){
        return "Wrong Password"
    }
    else{
        return "No User Found. Please Signup"
    }
}


console.log(signnup("Ayesha"))
console.log(login("Ayesha", "Emp@123"))