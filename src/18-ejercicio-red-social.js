/*
Requerimientos:

1. El usuario debe poder ingresar su usuario y contrasena.
2. El sistema debe ser capaz de validar si el usuario y constrasena ingresados por el usuario existen en la base de datos.
3. Si el usuario y contrasena son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contrasena son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.
*/


function login(usuario, contrasena) {
    isUsuario = usersDatabase.some(user => user.username === usuario);
    isContrasena = usersDatabase.some(user => user.password === contrasena);
    
    if(
        !isUsuario && !isContrasena || isUsuario && !isContrasena || !isUsuario && isContrasena ) {
        console.log("No existe usuario o contrasena ingresado");
    } else {
        timeLineFind = usersTimeline.find(timeline => timeline.username.toLocaleLowerCase() === usuario)
        console.log(`Accesso correcto ${usuario}, tu timeLine es ${timeLineFind.timeline}`);
    }
}
 
const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
];
  
const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
];

login("sofia", "567")