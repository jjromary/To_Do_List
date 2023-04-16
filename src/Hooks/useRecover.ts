export default function useRecover() {
  const recover = localStorage.getItem("keyTask");
  const recoverTasksToLocal = JSON.parse(recover!);

  return {
    recoverTasksToLocal,
  };
}
