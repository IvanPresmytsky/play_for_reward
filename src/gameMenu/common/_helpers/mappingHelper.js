export function getItemById(list, id) {
  return list.find(item => item.id === id);
}

export default getItemById;
