export class UserServise {
    static async login (email:string,password:string){
        const responce = await fetch('http://localhost:5000/api/login')
        const data = responce.status
    }

    static async registrate (email:string,password:string) {
        try{
            const response = await fetch('http://localhost:5000/api/registration',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password})
            })
            console.log(response)
        }catch(e){
            console.log('Ошибка регистрации')
        }
       
    }
}


 