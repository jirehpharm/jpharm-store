import { gql } from "@apollo/client";

const Product = gql`
  query {
    products {
      items {
        name
        id
      }
    }
  }
`;
