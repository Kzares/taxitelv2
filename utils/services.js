import {request, gql} from "graphql-request";

const graphqlAPI = 'https://api-us-east-1.hygraph.com/v2/clch46cqa0wcu01tahcakczfx/master'
export const getProfile = async (slug) =>{
    const query = gql`
    query Drivers($slug : String!) {
      drivers(where: {slug: $slug}) {
        description
        id
        name
        slug
        carImage{
          url
        }
        profileImage{
          url
        }
      }
    }
`    
    const result = await request(graphqlAPI, query, {slug});
    
    return result
}
export const getPaths = async () => {
  const query = gql`
  query Drivers {
    drivers {
      slug
    }
  }
  `
  const result = await request(graphqlAPI, query)
  return result
}