// /unidadsearch/pages/api/search.js

export default async function handler(req, res) {
  const { q, city, inProceedings, hasLawyer } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  if (!process.env.GOOGLE_API_KEY || !process.env.GOOGLE_CSE_ID) {
    console.error("Missing environment variables");
    return res.status(500).json({ error: 'Missing Google API credentials' });
  }

  // Prepend logic based on smart form input
  let contextKeywords = [];
  if (city) contextKeywords.push(city);
  if (inProceedings === 'Yes') contextKeywords.push('immigration court');
  if (hasLawyer === 'No') contextKeywords.push('legal aid no lawyer');

  const fullQuery = `${contextKeywords.join(' ')} ${q}`.trim();

  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CSE_ID}&q=${encodeURIComponent(fullQuery)}`;

  console.log("🔍 Final Search Query:", fullQuery);
  console.log("🔍 Google API URL:", apiUrl);
  console.log("🔐 API_KEY:", process.env.GOOGLE_API_KEY);
  console.log("🔐 CSE_ID:", process.env.GOOGLE_CSE_ID);

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Google API responded with status ${response.status}`);
    }

    const data = await response.json() || {};

    console.log("✅ Google API returned items:", data.items);

    const results = Array.isArray(data.items)
      ? data.items.map((item) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
          lastVerified: new Date().toLocaleDateString(),
        }))
      : [];

    res.status(200).json({ results });
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
}
