
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = 'https://api-eu-west-2.hygraph.com/v2/cl68ktta6d4p801t588qs7xt4/master';
const bToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTkyNzYwMDQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w2OGt0dGE2ZDRwODAxdDU4OHFzN3h0NC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjE0OWNkMjctNjAyNC00NGI5LThkZmQtZDJkZTJkMjNlMDIxIiwianRpIjoiY2w2OWUzYXRoY3lncjAxdWs3dndqZGo3NSJ9.cH0dAk8Vwmg9T74mFyk-9NuSB8gkxYEOUSz9eITUsIZO0ORNW0OomTvLf5PiEQBPbcy1IXBiP6proApn4ypQUZaN7-aroOy6iNsYSZS-T7OI0pb-qIB5Pwmn6A4t731GS51qVQ7zoFw0pBb_bmkqj6zfzsbMJKiaAyp5htc2mDA7yzHP7aU9PJLcm1vJA0D1ChLnh_1tked9BPgVG4BXu3nKx-AxI031DFv6WUQAOCYE8wvASSb_uYReRovcSEnN7_LJhvdd8HPBrBfnJtvirzH969Is62zvGAfqaZkxDtuiAwjuh1swdtZ50oc0xKPswCmrdLZgSfe2xuXFi5MwkMogJbBz5H4U5igQBQb6T-slrxw4N8GsUn-RBeHkq1XmsaRus_HoVM1WSY1JXhMGd8z2orYdYKtIgPm6V9WfRCIMXErqge2bwWmydf_EuUGlfz8dEGx2drpQfuHnSSO5JRbA7IGBSYIfPi7JAKIezb4Tj0fN3oxA7YvbLOJ4HH6iQDcFvTMm4Kd9BjUH4jn5XFxQwLXSVa2ShYMajbIn9WjXaqiJlP6GjoDOO3XekLV2kJI_p4XG7MknRezjfDF8YLirHW7tOc0fVr-ZMp4timNcFxrK7LSIbbgo4qRY3n_k_hOb67E0exGT5oVC6fEopkpVlMKlqyxJkORRGRbgSjI'

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${bToken}`,
    },
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}