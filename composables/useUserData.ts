export const useUserData = async () => {
  const { data, error } = await useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }

  return {
    data,
    error,
  };
};
