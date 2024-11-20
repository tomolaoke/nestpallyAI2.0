import Match from '../models/Match';

export async function getMatches() {
  return await Match.find();
}

export async function createUser(data) {
  const newUser = new Match(data);
  return await newMatch.save();
}
