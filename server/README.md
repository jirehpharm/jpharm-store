# How to use Graphql under this project

Step 1 : Under src/graphql/types create a file and write the resolver functions

For Example: Refer src/graphql/types/customer.ts file It has with comments

Step 2 : In client side use useQuery to fetch the data and useMutation for CRUD operations.

For Example: Refer Login and Register components under client/src/pages