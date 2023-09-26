class  ValidarForm {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
        //metodos
        eventos() {
            this.formulario.addEventListener('submit', e => {
              this.handleSubmit(e);
            });
        }

        handleSubmit(e){
            //segura pagina
            e.preventDefault();
            //campos validação
            const camposValidos = this.camposSaoValidos();
            const senhasValidas = this.senhasSaoValidas();

            if(camposValidos && senhasValidas){
                alert('Formulario enviado.');
                this.formulario.submit();
            }
        }

        // parte dos campo
        camposSaoValidos(){
            let valid = true;

            //remove msg 
            for(let errorText of this.formulario.querySelectorAll('.error-campos')){
                errorText.removeAttribute()
            }
            //
            for(let campo of this.formulario.querySelectorAll('.validar')){
                const label = campo.previousElementSibling.innerText;
                //Campos 
                if(!campo.vlue){
                    this.criaError(campo, `${label}Campo não pode estar vazio!`)
                }
                //campo do CPF
                if(campo.classList.contains('cpf')){
                    if(!this.validaCPF(campo)) valid =false;
                }

                //campo usuario
                if(campo.classList.contains('usuario')){
                    if(!this.validaUser(campo)) valid=false;
                }
            }
            return valid;
        }
        //senhas validas:

        senhasSaoValidas(){
            let valid = true;

            const senha = this.formulario.querySelector('.senha');
            const repetirSenha = this.formulario.querySelector('.repetir-senha');

            //se senha ser =/diferente de  repetir senha
            if(senha.value !== repetirSenha.value){
                valid = false;
                this.criaError(senha, 'Campo senha e repetir senha precisa ser iguais.')
                this.criaError(repetirSenha, 'Campo senha e repetir senha precisar se iguais!favor conferir.')
            }

            //se senha for menor que 6 ou maior que 12
            if(senha.value.length < 6 || senha.value.length > 12 ){
                valid = false;
                this.criaError(senha,'senha precisa estar entre 6 e 12 caracteres.')
                }
                return valid;
        }
        //Validar CPF campo
        validaCPF(campo){
            const cpf = new validaCPF(campo.value);

            if(!cpf.valida()){
                this.criaError(campo,'CPF inválido');
                return false;
            }
            return false;
        }

        //validação de usuarios
        validaUser(campo){
            const users = campo.value;
            let valid =true;
            //validar quantidade de caracteres e 
            if(users.length < 3 || users.length > 12){
                this.criaError(campo,'Usuário precisa ter entre 3 e 12 caracteres')
            }
            //validar de caracteres
            if(!users.match(/^[a-zA-z0-9]+$/g)){
                this.criaError(campo,'Nome de usuário precisa conter apenas letras e/ou números.')
                valid = false;
            }
            return valid;
        }

        //mensagem de erro
        criaError(campo,msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-campos');
            campo.insertAdjacentElement('afterend',div);
        }
}

const valida = new ValidarForm();