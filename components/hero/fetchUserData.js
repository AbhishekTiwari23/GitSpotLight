export const fetchUserData = async (username) => {
    try {
      const response = await fetch(`/api/githubProfile?username=${username}`);
      if (!response.ok) {
        throw new Error("User not found");
        return null;

      }
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };
