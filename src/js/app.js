import { specialAttacks } from './helpers/helpers';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

const body = document.getElementsByTagName('body')[0];
const attacksListElement = document.createElement('ul');
const attacks = specialAttacks(character);

const attacksNodeElements = attacks.map((item) => {
  const node = document.createElement('li');
  const textNode = document.createTextNode(`${item.name} - ${item.description}`);
  node.appendChild(textNode);
  return node;
});
attacksNodeElements.forEach((node) => {
  attacksListElement.appendChild(node);
});

body.appendChild(attacksListElement);
