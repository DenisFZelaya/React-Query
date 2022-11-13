import { useQuery } from "react-query";

async function fetchUser() {
  console.info("Llamando fetchUser")
  const response = await fetch("https://reqres.in/api/users?page=2");

  if (!response.ok) {
    throw new Error("Error recuperando la lista de usuarios");
  }

  return response.json();
}

export default function useUsers() {
  return useQuery("USERS", fetchUser, {
    staleTime: 5000, // gaurdar cache
    notifyOnChangePropsExclusions: ["isStale"]

  });
}
