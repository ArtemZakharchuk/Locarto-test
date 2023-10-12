export async function getAllCharacters(page, showOnlyLiveCharacters, abortController) {
  const statusQuery = showOnlyLiveCharacters ? "&status=alive" : "";
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}${statusQuery}`, {
      signal: abortController?.signal,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
