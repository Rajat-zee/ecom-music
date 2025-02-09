function validateInfo(values){
    let error={};
    if(!values.username.trim()){
        error.username="Username required"
    }
    if(!values.email){
        error.email="Email required"

    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        error.email="Email address is invalid"
    }
    if(!values.password){
        error.password="Password is required"
    }
    else if(values.password.length<2){
        error.password="Password length too short needs to be 8 or more";
    }
    if(!values.mobno){
        error.mobno="Mobile number is required"
    }else if(values.mobno.length<10 || values.mobno.length>10){
        error.mobno="Mobile number should be of 10 digit";
    }
    return error;
}
export default validateInfo;