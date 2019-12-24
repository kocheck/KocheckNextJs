export default (req, res) => {
  const date = new Date().getFullYear();
  // .replace(/T/, ' ')
  // .replace(/\..+/, '');
  // made small adjustments to only return the date.

  res.json({ date });
};
