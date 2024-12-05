const fetch = "node-fetch";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

module.exports = fetchData;
