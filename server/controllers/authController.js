const UserProfile = require("./../model/UserProfileModel");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    // Find the user by email
    const user = await UserProfile.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (isPasswordValid) {
      req.user = user;
      console.log("user login successful");
      res.status(200).json({
        status: "success",
        user,
      });
      next();
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
