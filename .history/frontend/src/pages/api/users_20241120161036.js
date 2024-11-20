import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
    await dbConnect(); // Connect to the database

    if (req.method === 'GET') {
        // Example: Fetch all users
        res.status(200).json({ message: 'GET Users works!' });
    } else if (req.method === 'POST') {
        // Example: Create a new user
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // Simulate saving user to the database
        res.status(201).json({ message: 'POST Users works!', data: { name, email } });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
