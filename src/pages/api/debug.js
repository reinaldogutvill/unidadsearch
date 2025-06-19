export default function handler(req, res) {
    res.status(200).json({
      apiKey: process.env.GOOGLE_API_KEY || 'not loaded',
      cseId: process.env.GOOGLE_CSE_ID || 'not loaded',
    });
  }
  