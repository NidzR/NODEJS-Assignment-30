//30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
let employee: string[] =["admin", "Rizwan Akhtar", "Ahsen Rizwan", "Nida Rizwan", "Rumaisa Rizwan"];
for(let i=0; i<employee.length; i++){
    if(employee[i] == "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${employee[i]}`)
    }
}