export async function getAllCharacters(page, abortController) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
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
