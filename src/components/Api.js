import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '36043083-bbc675b79bda412dd952998c9',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  min_height: '180',
});

export async function apiFetch(searchQuery, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?${searchParams}&page=${page}&q=${searchQuery}`
    );
  return response;
}