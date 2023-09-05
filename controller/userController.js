const User = require("../models/userModel");

//add a new user teacher/pupil
const newUser = async (req, res) => {

  console.log('in newUser');
  let myUser = new User({
    userName: req.body.userName,
    password: req.body.password,
    phone: req.body.phone,
    mail: req.body.mail,
    gender: req.body.gender,
    status: req.body.status,
  });
  try {
    await myUser.save();
    res.send(myUser);
  } catch (error) {
    //cnsole
    res.send("Cannot save new user: " + error.message);
  }
};
const findUserByName = async (req, res) => {
  let isUser = await User.findOne({ mail: req.body.mail, password: req.body.password })
    if(isUser) {
      res.status(200).json({ user: isUser });
    }
      else res.status(400).send("my error");
  }


const findUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.Id);
    res.json({ getUserById: user });
  } catch (error) {
    res.send("Cannot save user: " + error.message);
  }
};


const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.json({ getAllusers: users });
    })
    .catch((err) => {
      res.send(" no users: " + err.message);
    });
};

const updateById = (req, res) => {
  User.findByIdAndUpdate(req.params.Id, { name: req.body.UserName })
    .then((user) => {
      res.json({ updateById: user });
    })
    .catch((err) => {
      res.send("cannot find user: " + err.message);
    });
};

const updateOne = (req, res) => {
  User.findOneAndUpdate(
    { name: req.params.UserName },
    { password: req.body.Password }
  )
    .then((user) => {
      res.json({ updateOne: user });
    })
    .catch((err) => {
      res.send("cannot find user: " + err.message);
    });
};
const deleteUserById = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.Id);
    res.send("user deleted" + user);
  } catch {
    res.send("cannot find this user");
  }
};

const deleteOne = (req, res) => {
  User.findOneAndDelete({ name: req.body.UserName })
    .then((user) => {
      res.json({ success: user });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  newUser,
  findUserById,
  getAllUsers,
  updateById,
  findUserByName,
  updateOne,
  deleteUserById,
  deleteOne,
};
