function login(email,password){
    const data=fetch('https://linkinbio-hxpl.onrender.com/api/auth/login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });
    data.then((response)=>{
        if(!response.ok){
            throw new Error(`Login Failed:${response.status}`)
        }
        return response.json()
    })
    .then((data)=>{
          console.log("Login Successful:")
          console.log(data.data.token);
          console.log(data.data.user);
    })
    .catch(err=>{
        console.log(err)
    })
}


login("abhijitmishra3089@gmail.com","abhi3089@")