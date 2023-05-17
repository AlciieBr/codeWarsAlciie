function Administrator() {
     this.ban = function(users, banlist) {
       for (let i = 0; i < users.length; i++) {
         if (banlist.includes(users[i].name) || banlist.includes(users[i].id)) {
           users[i].status = "banned";
         }
       }
     }
     this.unban = function(users, unbanlist) {
          for (let i = 0; i < users.length; i++) {
               if (banlist.includes(users[i].name) || banlist.includes(users[i].id)) {
                 users[i].status = "active";
               }
             }
   }
}

   function User(id, name, status) {
     this.id = id;
     this.name = name;
     this.status = status;
   }
   
   const users = [
     new User("1", "Alciie", "active"),
     new User("2", "Ponhozinha", "active"),
     new User("3", "Palmito", "active"),
     new User("4", "João", "active"),
     new User("5", "Maria", "active")
   ];
   
   const banlist = ["Alciie", "Ponhozinha", "Palmito"];
   const palmito = new Administrator();
   
   // chamando a função ban() para banir usuários
   palmito.ban(users, banlist);
   
   // imprimindo os usuários para verificar se foram banidos
   console.log(users);

   // removendo o ban de alguns usuarios
   palmito.unban(users, ["Alciie", "Ponhozinha"])

      // imprimindo os usuários para verificar se foram banidos
      console.log(users);