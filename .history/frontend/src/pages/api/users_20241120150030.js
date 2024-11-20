import dbConnect from '../../utils/dbConnect'; // A helper to connect to MongoDB

export default async function handler(req, res) {
    await dbConnect(); // Ensure database is connected

    if (req.method === 'GET') {
        res.status(200).json({ message: 'GET Users works!' });
    } else if (req.method === 'POST') {
        // Add logic for creating a user
        res.status(201).json({ message: 'POST Users works!' });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
