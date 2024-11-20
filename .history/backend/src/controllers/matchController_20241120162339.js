import User from '../models/Match';

export async function getUsers() {
  return await Match.find();
}

export async function createUser(data) {
  const newUser = new User(data);
  return await newUser.save();
}
