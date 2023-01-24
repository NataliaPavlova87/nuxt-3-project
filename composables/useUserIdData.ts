export const useUserIdData = async (id: number) => {
  const { data, error } = await useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
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
