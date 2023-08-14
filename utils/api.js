const callApi = async () => {
  const result = await fetch(
    'https://my-json-server.typicode.com/savayer/demo/posts'
  );
  return result.json();
};

export default callApi;
