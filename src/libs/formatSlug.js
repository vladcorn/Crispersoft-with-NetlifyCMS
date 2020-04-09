module.exports.formatBlogSlug = (title, date) => {
  return title.toString().toLowerCase()
    .replace(/[^\w\s-]|^\s+|\s+$/gm, '')
    .replace(/\s+/gm, '-')
    .concat(`-${date.toString().replace(/\./g, '-')}`);
};
