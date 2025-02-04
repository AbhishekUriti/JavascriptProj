function generatepassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowerchars="abcdefghijklmnopqrstuvwxyz";
    const upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+="

    let allowedchars="";
    let password="";
    allowedchars+=includeLowerCase?lowerchars:"";
    allowedchars+=includeUpperCase?upperchars:"";
    allowedchars+=includeNumbers?numbers:"";
    allowedchars+=includeSymbols?symbols:"";
    
    if(length<=0){
        return `(password length must be at least 1)`;
    }

    if(allowedchars.length===0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedchars.length)
        password+=allowedchars[randomIndex];
    }

    return password;
}

const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;

const password=generatepassword(passwordLength,includeLowerCase,
                                includeUpperCase,includeNumbers,
                                includeSymbols);

console.log(`Generate password: ${password}`)                                