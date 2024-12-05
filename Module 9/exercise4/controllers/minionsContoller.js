"use strict";
const fetchData = require("../lib/dbConnect");
// finds all users in DB, then sends array as response
const getAllMinions = async (req, res) => {
  const url = "https://ffxivcollect.com/api/minions";
  const { data, error } = await fetchData(url);

  if (error) {
    return res.status(500).json({
      message: "Error fetching FF minions data",
      error: error.message,
    });
  }
  res.status(200).json(data);
};
// uses JSON from request body to create new user in DB
const getMinionsById = async (req, res) => {
  const { id } = req.params;
  const url = `https://ffxivcollect.com/api/minions/${id}`;
  const { data, error } = await fetchData(url);

  if (error) {
    return res
      .status(500)
      .json({ message: "Error fetching minion data by ID", error });
  }

  res.status(200).json(data);
};

module.exports = {
  getAllMinions,
  getMinionsById,
};
