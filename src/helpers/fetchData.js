const fetchData = async (url, method, body = null) => {
  const response = await fetch(
    url,
    method
      ? {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      : null
  );

  if (!response.ok) {
    throw new Error(
      data?.message ||
        `Error performing ${method} request: ${response.statusText}`
    );
  }
  const data = await response.json();

  return data;
};

export default fetchData;
