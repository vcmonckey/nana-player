export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "no url" });
  }

  try {
    const r = await fetch(url);
    const html = await r.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ html });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
