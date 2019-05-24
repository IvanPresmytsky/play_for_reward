const mapCategoriesToDescriptive = (categories, playerCatigories) => {
  const categoriesIds = playerCatigories.map(item => item.id);
  return categoriesIds.map(id => categories.find(category => category.id === id));
};

export default mapCategoriesToDescriptive;
