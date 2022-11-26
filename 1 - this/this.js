// A palavra-chave this
let user = {
  name: 'Lima',
  age: 25, 
  email: 'lima@gmail.com',
  city: 'Espinho',
  blogPosts: ['Zé da coxinha', 'Do mil ao milhão em 30 minutos'],
  login: function() {
    console.log('Usuário logado');
  },
  logout: function() {
    console.log('Usuário deslogado')
  },
  logBlogPosts: function() {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => console.log(post))
  },
  hey() {
    console.log("Olá")
  }
}

// Nota: A function Declaration é a que está sendo usada aqui e não a Arrow. Se eu quiser que o this referencie o objeto no qual o método foi criado é necessário usar Function Declaration.

// A Arrow Function referencia o contexto global, no caso o Window Object, pois ela referencia no momento onde a invocação da  função é feita (linha 25 - contexto global.)

user.logBlogPosts()
user.hey()
console.log(this) // Nesse contexto o Window é referenciado.

// user.login()
// user.logout()