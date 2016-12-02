export default class BugChallenge {
  //Do NOT change the top10Movies and top10Actors variables to fix your tests
  //believe me: the problem is in bug() functions, not in these arrays ;)
  top10Movies = [
    'AI',
    'Shawshank Redemption',
    'Godfather',
    'Pulp Fiction',
    'Fight club',
    'Forrest Gump',
    'Inception',
    'Goodfellas',
    'The Matrix',
    'Interstellar'
  ]
  top10Actors = [
    'Marlon Brando',
    'Jack Nickolson',
    'Robert De Niro',
    'Al Pacino',
    'Daniel Day-Lewis',
    'Duston Hoffman',
    'Tom Hanks',
    'Anthony Hopkins',
    'Paul Newman',
    'Denzel Washington'

  ]
  //------
  // Bugs

    bug1() {
      const people = [{
        name: 'Alice',
        age: 25
      }, {
        name: 'Bob',
        age: 27
      }, {
        name: 'Charlie',
        age: 40
      }];

      for (let person of people) {
        console.log(`${person.name} is ${person.age}`);
      }
    }
    //bug1 i  changed the for loop from  let preson in people  to  let preson of people

    bug2() {
      const array = [1, 2, 3, 4];
       array.reverse(); 

      for (let array of array) {
        console.log(array);
      }
    }
    //bug2 i used the fuction .reverse to revers the content of the arrray then i used then i chend the for loop 

    bug3() {
      const array = {};
      array[0] = 'a';
      array[1] = 'b';
      array[2] = 'c';

      let total = 0;


      
      for  (let key in array) {
        total += key;
      }

      console.log(total.length -1);
    }
    //bug 3  i changed the concole log to total.length -1 and 
    // and key in array

    bug4() {
      // We list all movies, except the top 3.
      let index = 3;
      for (index; index < this.top10Movies.length; index++) {
        console.log(`movie: ${this.top10Movies[index]}`);
      }
       index = 3;

      // We also list all actors, except the top 3.
     for (index; index < this.top10Actors.length; index++) {
        console.log(`actor: ${this.top10Actors[index]}`);
      }
    }
    //bug4 i chenged the var to let and after the  first loop i set index = 3  agine 

    bug5() {
      const defaultMethod = 'GET';
      const defaultUseCaching = false;

      function fetch(options) {
        const url = options.url;
        const method = options.method || defaultMethod;
        const useCaching = options.useCaching || defaultUseCaching;

        console.log(`fetch: ${method} ${url} (useCaching=${useCaching})`);
      }

      fetch({
        url: 'http://www.example.com',
        useCaching: false
      });
    }

     bug6() {
      function run(options) {
        if (options.script == undefined) {
          options.script = 'main.js';
        }
        
        console.log(`run: script=${options.script}`);
      }
 run({});

     
    }
    //bug6 i set options to undefined useing this {}
    

    bug7() {
      function run(options = {}) {
        if (options.stopOnError === undefined) {
          options.stopOnError = 'all';
        }

        console.log(`run: stopOnError=${options.stopOnError}`);
      }

      run();
      run({stopOnError: null});
    }
    //bug7 not working!!

    bug8() {
      for (let i = 0; i < 5; i++) {
        setTimeout( () => {
          console.log(i+1);
        }, 100*i);
      }
    }
    //bug8 i chenged the  var to let and function to =>

    bug9() {
      const cars = [{
        make: 'Volvo',
        type: 'S90'
      }, {
        make: 'BMW',
        type: 'i8'
      }, {
        make: 'BMW',
        type: 'M3'
      }, {
        make: 'Audi',
        type: 'A6'
      }];

      function findCars(make) {
        return cars.filter(car => car.make == make);
      }

      for (let bmw of findCars('BMW')) {
        console.log(`${bmw.make} ${bmw.type}`);
      }
    }
    //bug9 i have add  == to  the return :)

    bug10() {
      const command = 'printHelp';

      switch (command) {
        case 'printMath':
          console.log(`√9=${Math.sqrt(9)}`);
        case 'printHelp':
          console.log('Help');
          break;
        case 'quit':
          console.log('Quitting');
      }
    }
    //bug10 i have add 1 break after console.log help

    bug11() {
      class Game {
        constructor() {
         this.players = [];
        }

        addPlayers(names) {
          names.forEach( (name) => {
            this.players.push({name, points: 0});
          });
        }
      }

      const game = new Game();
      game.addPlayers(['Alice', 'Bob']);

      for (let player of game.players) {
        console.log(`Player ${player.name} has ${player.points} points`);
      }
    }
    //bug 11  changed the  function in names.forEach line to => 

    bug12() {
      let y = 5;

      function printVector() {
        let x = 6;
        let y = 7;

        console.log(`Printing vector at (${x}, ${y})`);
      }

      printVector();
      console.log(`y=${y}`);
    }
    //bug12  add let to y

    bug13() {
      let notInTop10 = (movieName) => {
        return this.top10Movies.indexOf(movieName)== -1 
      }
      console.log('Independence Day is ' + (notInTop10('Independence Day')?'not ':'') + 'in the top 10!');
      console.log('AI is ' + (notInTop10('AI')?'not ':'') + 'in the top 10!');
      console.log('Godfather is ' + (notInTop10('Godfather')?'not ':'') + 'in the top 10!');
      console.log('Inception is ' + (notInTop10('Inception')?'not ':'') + 'in the top 10!');
    }
    //bug13  changed the var to let and  removed the ! and add  == -1  *****(i have to do it agine  i did't understandet well********)
    bug14() {

      let isInFirstPlace = (movieName) => {
        return this.top10Movies[0] === movieName
      }
      console.log('AI is ' + (isInFirstPlace('AI')?'':'not ') + 'best movie ever')
      console.log('Godfather is ' + (isInFirstPlace('Godfather')?'':'not ') + 'best movie ever')
    }
    //bug14 changed  console log  place from the top to the botom
    bug15() {
      let getAlphabeticalFirst = ()=> {
        return this.top10Actors.sort()[0]
      }

      console.log(`The first actor when sorted alphabetically is ${getAlphabeticalFirst()}`)
    }
    //bug14 changed the function to => and var to let 
    bug16() {
      const ranking = this.top10Actors.indexOf('Al Pacino');
      // var thirdRankedActor = this.top10Actors['2'];
      console.log(`Al Pacino is ranked ${ranking + 1}`)
    }

}
//bug16  the nummber's can't be string  :P
