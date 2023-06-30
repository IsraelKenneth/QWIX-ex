import { client } from './sanity';

const sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedResturants = async () => {
    return sanityQuery(`
*[_type == "featured"] {
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
      type->{
        name
      }
    
  }
}`);
}

export const getCategories = async () => {
    return sanityQuery(`
        *[_type == 'category']
    `);
}

export const getFeaturedResturantById = async (id) => {
    return sanityQuery(`
        *[_type == "featured" && _id == $id] {
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
      type->{
        name
      }
    
  }
}[0]
    `, { id })
}