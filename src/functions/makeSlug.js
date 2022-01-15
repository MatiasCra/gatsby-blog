//Made this a function in case I decide to change it
// or replace it with a slug in Contentful.

export const makeSlug = (title) => {
  return title.toLowerCase().replace(" ", "_");
};
