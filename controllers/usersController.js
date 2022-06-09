const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json("Server Error")
  }
}

module.exports = {
  getSingleUser,
}
