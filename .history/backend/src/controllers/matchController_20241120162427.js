import User from '../models/Match';

export async function getMatch() {
  return await Match.find();
}

export async function createUser(data) {
  const newUser = new Match(data);
  return await newMatch.save();
}
