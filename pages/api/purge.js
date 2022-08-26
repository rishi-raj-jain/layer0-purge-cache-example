import fetch from 'node-fetch'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // https://docs.layer0.co/guides/rest_api#body
    const { l0Token, deployToken, team, site, environment, paths } = req.body
    if (l0Token && l0Token.length > 0 && l0Token === process.env.CUSTOM_SECRET) {
      fetch('https://app.layer0.co/api/v1/clear-cache', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': deployToken,
        },
        body: JSON.stringify({
          team,
          site,
          environment,
          paths,
        }),
      })
    }
  }
}
