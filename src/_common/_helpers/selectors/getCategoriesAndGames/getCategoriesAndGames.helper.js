const getCategoriesAndGames = categories =>
  categories.reduce((total, current) => {
    total.push({
      id: current.id,
      isSwitchedOn: current.isSwitchedOn,
    });
    if (current.games && current.games.length) {
      current.games.forEach(item => total.push(item));
    }
    return total;
  }, []);

export default getCategoriesAndGames;
