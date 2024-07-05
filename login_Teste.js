class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok = null
    static callback_naook = null
    static configurar = {
        cor: "#048"
    }

    static login(callback_ok,callback_naook,configurar=null) {
        if(configurar != null){
            this.configurar = configurar
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naook=()=>{callback_naook()}

        let edepointer = "https://f1b07096-19cb-4533-831f-199527c4cd60-00-20dm1osefpnkz.janeway.replit.dev/";
        this.estilocss =
        ".fundoLogin{background-color: rgba(0, 0, 0, 0.75);width: 100%;height: 100vh;display: flex;justify-content: center;align-items: center;}"+
        ".baseLogin{background-color: #ffffffc0;height: 420px;width: 540px;padding: 60px;}"+
        ".corpologin{width: 420PX;padding-left: 15px;padding: 15px;height: 299px;border-radius: 10px;border:1px solid black;}"+
        ".elementosLogin{display: flex;flex-direction: column;gap: 13px;}"+
        ".campoLogin{display: flex;gap: 10px;padding: 5px;flex-direction: column;width: 390px;font-size: 20px;font-family: Arial, Helvetica, sans-serif;font-weight: 500;color: darkblue;}"+
        ".campoLogin input[type='text'], input[type='password']{height: 35PX;border: 1px solid #010210;background-color: rgba(5, 5, 5, 0.075);color: #fff;padding: 3px;text-transform: capitalize;}"+
        ".campoButtom{width: 100%;display: flex;align-items: center;justify-content: center;gap: 30px;padding: 30px;}"+
        `.campoButtom button {width: 100px;height: 50px;cursor: pointer;color: #fff;background-color: ${this.configurar.cor};border-radius: 15px;font-size: 15px;font-family: Arial, Helvetica, sans-serif;}`
        const style_estilos = document.createElement('style')
        style_estilos.setAttribute("rel","stylesheet")
        style_estilos.setAttribute("id","id_estiloLogin")
        style_estilos.setAttribute("type","text/css")
        style_estilos.innerHTML = this.estilocss
        document.head.appendChild(style_estilos)
        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        document.body.prepend(fundoLogin);
        const baseLogin = document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)
        const corpologin = document.createElement('div')
        corpologin.setAttribute("id","corpologin")
        corpologin.setAttribute("class","corpologin")
        baseLogin.appendChild(corpologin)
        const elementosLogin = document.createElement("div")
        elementosLogin.setAttribute("id","elementosLogin")
        elementosLogin.setAttribute("class","elementosLogin")
        corpologin.appendChild(elementosLogin)
        const campoLogin = document.createElement('div')
        campoLogin.setAttribute("id","campoLogin")
        campoLogin.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLogin)
        const label01 = document.createElement("label")
        label01.innerHTML = "Usarname:"
        campoLogin.appendChild(label01)
        const Formulario_nome = document.createElement("input")
        Formulario_nome.setAttribute("type","text")
        Formulario_nome.setAttribute("id","Formulario_nome")
        Formulario_nome.setAttribute("name","Formulario_nome")
        campoLogin.appendChild(Formulario_nome)
        const campoLogin02 = document.createElement('div')
        campoLogin02.setAttribute("id","campoLogin")
        campoLogin02.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLogin02)
        const label02 = document.createElement("label")
        label02.innerHTML = "Senha:"
        campoLogin02.appendChild(label02)
        const Formulario_senha = document.createElement("input")
        Formulario_senha.setAttribute("type","password")
        Formulario_senha.setAttribute("id","Formulario_senha")
        Formulario_senha.setAttribute("name","Formulario_senha")
        campoLogin02.appendChild(Formulario_senha)
        const campoLogin03 = document.createElement('div')
        campoLogin03.setAttribute("id","campoLogin")
        campoLogin03.setAttribute("class","campoLogin")
        elementosLogin.appendChild(campoLogin03)
        const campoButtom = document.createElement("div")
        campoButtom.setAttribute("class","campoButtom")
        campoLogin03.appendChild(campoButtom)
        const btn_login = document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML = "Login"
        campoButtom.appendChild(btn_login)

        btn_login.addEventListener("click",()=>{
           this.verficarLogin()
        })
        const btn_Cancelar = document.createElement("button")
        btn_Cancelar.setAttribute("id","btn_Cancelar")
        btn_Cancelar.innerHTML = "Cancelar"
        campoButtom.appendChild(btn_Cancelar)
        btn_Cancelar.addEventListener("click",()=>{
            this.fechar()
        })
    }
    static verficarLogin(){
        let mat = document.getElementById("Formulario_nome").value
        let pas = document.getElementById('Formulario_senha').value
        const edepointes = `https://f1b07096-19cb-4533-831f-199527c4cd60-00-20dm1osefpnkz.janeway.replit.dev/?matricula=${mat}&senha=${pas}`;

        fetch(edepointes)
        .then(res=>res.json())
        .then(res=>{
           if(res){
            this.logado=true
            this.matlogado = mat
            this.nomelogado = res.nome
            this.acessologado = res.acesso
            this.callback_ok()
            this.fechar()
           }else{
            this.logado= false
            this.matlogado = null
            this.nomelogado = null
            this.acessologado = null
            this.callback_naook()
           }
        })

        // if(mat=="123" && pas=="321"){
        //    return true;
        // }else {
        //     return false;
        // }

    }
    static fechar(){
      const fundoLogin = document.getElementById("fundoLogin")  
      fundoLogin.remove()
      const idfechar = document.getElementById('id_estiloLogin')
      idfechar.remove()
    }
}
