export function saveFavorite(name) {

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(name)) {

    favorites.push(name);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
}