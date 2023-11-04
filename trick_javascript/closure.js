const SomeClass = () => {
  const self = {};

  //private attribute
  const lastname = "Test";

  // public attribute
  self.name = 'Developer user';

  // metodo can acess private data
  self.getLastName = () => lastname;

  //return out instance 

  return self;
}

const SomeDerivedClass = () => {
  const self = Someclass();

  self.sayHello = () => `Hello ${self.name} ${self.name} ${self.getLastName()}`

  return self;
}