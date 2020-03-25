const greetings = ['Hello', 'Salutations', 'Bonjour', 'Howdy', 'Wassssup', 'Hey'];
export default class GreetingService {
  getRandomGreeting(): string {
    const max = greetings.length-1;
    const rix = Math.ceil(Math.random() * max);
    return greetings[rix];
  }
}
