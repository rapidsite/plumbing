// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge',
}

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
