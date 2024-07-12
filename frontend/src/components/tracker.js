import axios from "axios";

const tracker = async (endpoint) => {
  try {
    await axios.post("/track", { endpoint });
    console.log(`Page visit tracked: ${endpoint}`);
  } catch (error) {
    console.error("Error tracking page visit:", error);
  }
};

export default tracker;
