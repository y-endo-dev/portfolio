const GITHUB_API_URL = "https://api.github.com/users/";

export const fetchGitHubProfile = async (username: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    throw error;
  }
};
