const axios = require("axios");

const getUserStats = async (user) => {
  const result = await axios.get(`https://codestats.net/api/users/${user}`);

  return result;
};

export default getUserStats;
