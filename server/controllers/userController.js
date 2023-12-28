const UserProfile = require("./../model/UserProfileModel");

exports.createUser = async (req, res, next) => {
  try {
    // Extract user data from the request body
    const { profile_image, name, email, password } = req.body;

    // Use Sequelize to create a new user in the database
    const newUser = await UserProfile.create({
      profile_image,
      name,
      email,
      password,
    });

    res.status(201).json(newUser.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.fetchUserByEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    // Find the user based on the email address
    const user = await UserProfile.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      console.log("User found:", user.toJSON());
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
