const axios = require("axios");
const rules = require("../../config/rules");

const API_URL =
  "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";

const fetchApplicationData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching application data:", error.message);
    throw error;
  }
};

const evaluateChecklist = (data) => {
  return rules.map((rule) => ({
    name: rule.name,
    description: rule.description,
    status: rule.evaluate(data) ? "Passed" : "Failed",
  }));
};

module.exports = {
  fetchApplicationData,
  evaluateChecklist,
};
