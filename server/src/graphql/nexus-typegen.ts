/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AdminUser: { // root type
    admin_user_id: number; // Int!
    created_at?: string | null; // String
    email: string; // String!
    full_name: string; // String!
    password: string; // String!
    status: boolean; // Boolean!
    updated_at?: string | null; // String
    uuid: string; // String!
  }
  Collection: { // root type
    code: string; // String!
    collection_id: number; // Int!
    created_at?: string | null; // String
    description?: string | null; // String
    name: string; // String!
    updated_at?: string | null; // String
    uuid: string; // String!
  }
  Customer: { // root type
    created_at?: string | null; // String
    customer_id: number; // Int!
    email: string; // String!
    full_name?: string | null; // String
    group_id?: number | null; // Int
    password: string; // String!
    status: number; // Int!
    updated_at?: string | null; // String
    uuid: string; // String!
  }
  CustomerAddress: { // root type
    address_1?: string | null; // String
    address_2?: string | null; // String
    city?: string | null; // String
    country: string; // String!
    created_at?: string | null; // String
    customer?: NexusGenRootTypes['AdminUser'] | null; // AdminUser
    customer_address_id: number; // Int!
    customer_id: number; // Int!
    full_name?: string | null; // String
    is_default?: number | null; // Int
    postcode?: string | null; // String
    province?: string | null; // String
    telephone?: string | null; // String
    updated_at?: string | null; // String
    uuid: string; // String!
  }
  CustomerGroup: { // root type
    created_at?: string | null; // String
    customer?: Array<NexusGenRootTypes['CustomerGroup'] | null> | null; // [CustomerGroup]
    customer_group_id: number; // Int!
    group_name: string; // String!
    updated_at?: string | null; // String
    uuid: string; // String!
  }
  Link: { // root type
    description: string; // String!
    id: number; // Int!
    imageUrl: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AdminUser: { // field return type
    admin_user_id: number; // Int!
    created_at: string | null; // String
    email: string; // String!
    full_name: string; // String!
    password: string; // String!
    status: boolean; // Boolean!
    updated_at: string | null; // String
    uuid: string; // String!
  }
  Collection: { // field return type
    code: string; // String!
    collection_id: number; // Int!
    created_at: string | null; // String
    description: string | null; // String
    name: string; // String!
    updated_at: string | null; // String
    uuid: string; // String!
  }
  Customer: { // field return type
    created_at: string | null; // String
    customer_address: Array<NexusGenRootTypes['CustomerAddress'] | null> | null; // [CustomerAddress]
    customer_group: NexusGenRootTypes['CustomerGroup'] | null; // CustomerGroup
    customer_id: number; // Int!
    email: string; // String!
    full_name: string | null; // String
    group_id: number | null; // Int
    password: string; // String!
    status: number; // Int!
    updated_at: string | null; // String
    uuid: string; // String!
  }
  CustomerAddress: { // field return type
    address_1: string | null; // String
    address_2: string | null; // String
    city: string | null; // String
    country: string; // String!
    created_at: string | null; // String
    customer: NexusGenRootTypes['AdminUser'] | null; // AdminUser
    customer_address_id: number; // Int!
    customer_id: number; // Int!
    full_name: string | null; // String
    is_default: number | null; // Int
    postcode: string | null; // String
    province: string | null; // String
    telephone: string | null; // String
    updated_at: string | null; // String
    uuid: string; // String!
  }
  CustomerGroup: { // field return type
    created_at: string | null; // String
    customer: Array<NexusGenRootTypes['CustomerGroup'] | null> | null; // [CustomerGroup]
    customer_group_id: number; // Int!
    group_name: string; // String!
    updated_at: string | null; // String
    uuid: string; // String!
  }
  Link: { // field return type
    description: string; // String!
    id: number; // Int!
    imageUrl: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    createCustomer: NexusGenRootTypes['Customer']; // Customer!
    deleteLink: NexusGenRootTypes['Link']; // Link!
    post: NexusGenRootTypes['Link']; // Link!
    updateCustomer: NexusGenRootTypes['Customer']; // Customer!
    updateLink: NexusGenRootTypes['Link']; // Link!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Link'][]; // [Link!]!
    getAdminById: NexusGenRootTypes['AdminUser']; // AdminUser!
    getCustomerByIdOrEmail: NexusGenRootTypes['Customer']; // Customer!
    listAdminUsers: NexusGenRootTypes['AdminUser'][]; // [AdminUser!]!
    listCollections: NexusGenRootTypes['Collection'][]; // [Collection!]!
    listCustomerAddresses: Array<NexusGenRootTypes['CustomerAddress'] | null> | null; // [CustomerAddress]
    listCustomerGroups: Array<NexusGenRootTypes['CustomerGroup'] | null>; // [CustomerGroup]!
    listCustomers: Array<NexusGenRootTypes['Customer'] | null>; // [Customer]!
  }
}

export interface NexusGenFieldTypeNames {
  AdminUser: { // field return type name
    admin_user_id: 'Int'
    created_at: 'String'
    email: 'String'
    full_name: 'String'
    password: 'String'
    status: 'Boolean'
    updated_at: 'String'
    uuid: 'String'
  }
  Collection: { // field return type name
    code: 'String'
    collection_id: 'Int'
    created_at: 'String'
    description: 'String'
    name: 'String'
    updated_at: 'String'
    uuid: 'String'
  }
  Customer: { // field return type name
    created_at: 'String'
    customer_address: 'CustomerAddress'
    customer_group: 'CustomerGroup'
    customer_id: 'Int'
    email: 'String'
    full_name: 'String'
    group_id: 'Int'
    password: 'String'
    status: 'Int'
    updated_at: 'String'
    uuid: 'String'
  }
  CustomerAddress: { // field return type name
    address_1: 'String'
    address_2: 'String'
    city: 'String'
    country: 'String'
    created_at: 'String'
    customer: 'AdminUser'
    customer_address_id: 'Int'
    customer_id: 'Int'
    full_name: 'String'
    is_default: 'Int'
    postcode: 'String'
    province: 'String'
    telephone: 'String'
    updated_at: 'String'
    uuid: 'String'
  }
  CustomerGroup: { // field return type name
    created_at: 'String'
    customer: 'CustomerGroup'
    customer_group_id: 'Int'
    group_name: 'String'
    updated_at: 'String'
    uuid: 'String'
  }
  Link: { // field return type name
    description: 'String'
    id: 'Int'
    imageUrl: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    createCustomer: 'Customer'
    deleteLink: 'Link'
    post: 'Link'
    updateCustomer: 'Customer'
    updateLink: 'Link'
  }
  Query: { // field return type name
    feed: 'Link'
    getAdminById: 'AdminUser'
    getCustomerByIdOrEmail: 'Customer'
    listAdminUsers: 'AdminUser'
    listCollections: 'Collection'
    listCustomerAddresses: 'CustomerAddress'
    listCustomerGroups: 'CustomerGroup'
    listCustomers: 'Customer'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createCustomer: { // args
      email: string; // String!
      fullName: string; // String!
      password: string; // String!
    }
    deleteLink: { // args
      id: number; // Int!
    }
    post: { // args
      description: string; // String!
      imageUrl: string; // String!
      url: string; // String!
    }
    updateCustomer: { // args
      customerId: number; // Int!
      email: string; // String!
      fullName: string; // String!
      password: string; // String!
    }
    updateLink: { // args
      description: string; // String!
      id: number; // Int!
      imageUrl: string; // String!
      url: string; // String!
    }
  }
  Query: {
    getAdminById: { // args
      id: number; // Int!
    }
    getCustomerByIdOrEmail: { // args
      customerId?: number | null; // Int
      email?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}