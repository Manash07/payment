const Users = require("../model/users");

const userData = async (req, res) => {
  try {
    const users = await Users.find();

    if (users.length > 0) {
      const userData = users.map((user) => ({
        name: user.name,
        phoneNumber: user.phoneNumber,
        password: user.password,
        email: user.email,
        role:user.role,
      }));

      res.status(200).json({
        msg: "Users found",
        users: userData,
      });
    } else {
      res.status(404).json({ msg: "No users to show" });
    }
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ msg: "Failed to fetch data" });
  }
};

module.exports = { userData };
