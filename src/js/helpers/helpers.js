export const specialAttacks = ({ special }) => special.map(({
  id, name, icon, description = 'Описание недоступно',
}) => ({
  id, name, icon, description,
}));
