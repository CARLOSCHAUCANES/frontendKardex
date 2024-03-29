export class UserConst{
    static TITLE_MODALS = {
        registerUser:"Registro de Usuarios",
        updateUser:"Actualización de Usuario",
    }
    static  TITLE_NOTIFICATION =
    {
        login:'Login',
        registerUser:'Registro de Usuarios',
        updateUser:'Actualización de Usuarios'
    }
    static MESSAGE_NOTIFICATION_USER = {
        success:"Usuario registrado con éxito",
        error:"No fue posible el registro del usuario, intentalo mas tarde",
        warning:"Pueda que el registro no se haya realizado correctamente"
    }
    static ERROR_VALIDATION = {
        emailExist:'El correo electrónico ya se encuentra registrado',
        cedulaExist:'La cédula ya se encuentra registrada',
        invalidedEmail:'Correo electrónico inválido',
        minLengthPassword:'La contraseña mínimo debe contener 8 caracteres',
        passwordNotSame:'Las contraseñas no coinciden'
    }
    static FORM = 
        {
            name:"userformGroup",
            controls:[
                {control:"cedula",validators:['required']},
                {control:"name",validators:['required']},
                {control:"lastName",validators:['required']},
                {control:"email",validators:['required']},
                {control:"phone",validators:['required']},
                {control:"address",validators:['required']},
                {control:"password",validators:['required']},
                {control:"confirm",validators:['required']},
                {control:"profile",validators:['required']}
            ]
       }
    
}