const collectionUrl = 'https://api.discogs.com/users/mixtapestretch/collection/folders/0/releases';

export const getCollection = async (page = 1, perPage = 50) => {
  const url = `${collectionUrl}?page=${page}&per_page=${perPage}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Oauth" +
          'oauth_consumer_key=' + process.env.REACT_APP_DISCOGS_CONSUMER_KEY +
          'oauth_signature=' + process.env.REACT_APP_DISCOGS_CONSUMER_SECRET,
        'User-Agent': 'Mixtape Stretch'
      }
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching collection:', error)
    throw error
  }
};

export const getSingleAlbum = async (id: number): Promise<any> => {
  const url = `https://api.discogs.com/releases/${id}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Oauth" +
          "oauth_consumer_key=" + process.env.REACT_APP_DISCOGS_CONSUMER_KEY +
          "oauth_signature=" + process.env.REACT_APP_DISCOGS_CONSUMER_SECRET,
        "User-Agent": "Mixtape Stretch",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching album details:", error);
    throw error;
  }
};