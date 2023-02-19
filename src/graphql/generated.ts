// @ts-nocheck
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../utils/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export enum AuthProvider {
  ApiKey = 'apiKey',
  Iam = 'iam',
  Oidc = 'oidc',
  UserPools = 'userPools'
}

export type AuthRule = {
  allow: AuthStrategy;
  groupClaim?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupsField?: InputMaybe<Scalars['String']>;
  identityClaim?: InputMaybe<Scalars['String']>;
  operations?: InputMaybe<Array<InputMaybe<ModelOperation>>>;
  ownerField?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<AuthProvider>;
};

export enum AuthStrategy {
  Custom = 'custom',
  Groups = 'groups',
  Owner = 'owner',
  Private = 'private',
  Public = 'public'
}

export type CreateAccountInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type CreateUserInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  email: Scalars['AWSEmail'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type DeleteAccountInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type HttpHeader = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type ModelAccountConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAccountConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAccountConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAccountConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelAccountConnection = {
  __typename?: 'ModelAccountConnection';
  items: Array<Maybe<Account>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAccountFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAccountFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAccountFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAccountFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelMutation {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type ModelMutationMap = {
  create?: InputMaybe<Scalars['String']>;
  delete?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['String']>;
};

export enum ModelOperation {
  Create = 'create',
  Delete = 'delete',
  Read = 'read',
  Update = 'update'
}

export enum ModelQuery {
  Get = 'get',
  List = 'list'
}

export type ModelQueryMap = {
  get?: InputMaybe<Scalars['String']>;
  list?: InputMaybe<Scalars['String']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionAccountFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionAccountFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionAccountFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum ModelSubscriptionLevel {
  Off = 'off',
  On = 'on',
  Public = 'public'
}

export type ModelSubscriptionMap = {
  level?: InputMaybe<ModelSubscriptionLevel>;
  onCreate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onDelete?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onUpdate?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelSubscriptionUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelUserConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelUserConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<Maybe<User>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<Account>;
  createUser?: Maybe<User>;
  deleteAccount?: Maybe<Account>;
  deleteUser?: Maybe<User>;
  updateAccount?: Maybe<Account>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAccountArgs = {
  condition?: InputMaybe<ModelAccountConditionInput>;
  input: CreateAccountInput;
};


export type MutationCreateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: CreateUserInput;
};


export type MutationDeleteAccountArgs = {
  condition?: InputMaybe<ModelAccountConditionInput>;
  input: DeleteAccountInput;
};


export type MutationDeleteUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: DeleteUserInput;
};


export type MutationUpdateAccountArgs = {
  condition?: InputMaybe<ModelAccountConditionInput>;
  input: UpdateAccountInput;
};


export type MutationUpdateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: UpdateUserInput;
};

export enum PredictionsActions {
  ConvertTextToSpeech = 'convertTextToSpeech',
  IdentifyLabels = 'identifyLabels',
  IdentifyText = 'identifyText',
  TranslateText = 'translateText'
}

export type Query = {
  __typename?: 'Query';
  getAccount?: Maybe<Account>;
  getUser?: Maybe<User>;
  listAccounts?: Maybe<ModelAccountConnection>;
  listUsers?: Maybe<ModelUserConnection>;
};


export type QueryGetAccountArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryListAccountsArgs = {
  filter?: InputMaybe<ModelAccountFilterInput>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryListUsersArgs = {
  filter?: InputMaybe<ModelUserFilterInput>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type SearchableQueryMap = {
  search?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAccount?: Maybe<Account>;
  onCreateUser?: Maybe<User>;
  onDeleteAccount?: Maybe<Account>;
  onDeleteUser?: Maybe<User>;
  onUpdateAccount?: Maybe<Account>;
  onUpdateUser?: Maybe<User>;
};


export type SubscriptionOnCreateAccountArgs = {
  filter?: InputMaybe<ModelSubscriptionAccountFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnCreateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteAccountArgs = {
  filter?: InputMaybe<ModelSubscriptionAccountFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnDeleteUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateAccountArgs = {
  filter?: InputMaybe<ModelSubscriptionAccountFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};


export type SubscriptionOnUpdateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  owner?: InputMaybe<Scalars['String']>;
};

export type TimestampConfiguration = {
  createdAt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type UpdateAccountInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateUserInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  email?: InputMaybe<Scalars['AWSEmail']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['AWSEmail'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  owner?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export type AccountOverviewAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountOverviewAdminQuery = { __typename?: 'Query', listAccounts?: { __typename?: 'ModelAccountConnection', items: Array<{ __typename?: 'Account', id: string, createdAt: any, updatedAt: any, name?: string | null } | null> } | null };

export type UserOverviewAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type UserOverviewAdminQuery = { __typename?: 'Query', listUsers?: { __typename?: 'ModelUserConnection', items: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt: any, firstName: string, lastName: string, email: any } | null> } | null };


export const AccountOverviewAdminQueryDocument = `
    query AccountOverviewAdminQuery {
  listAccounts {
    items {
      id
      createdAt
      updatedAt
      name
    }
  }
}
    `;
export const useAccountOverviewAdminQuery = <
      TData = AccountOverviewAdminQuery,
      TError = unknown
    >(
      variables?: AccountOverviewAdminQueryVariables,
      options?: UseQueryOptions<AccountOverviewAdminQuery, TError, TData>
    ) =>
    useQuery<AccountOverviewAdminQuery, TError, TData>(
      variables === undefined ? ['AccountOverviewAdminQuery'] : ['AccountOverviewAdminQuery', variables],
      fetcher<AccountOverviewAdminQuery, AccountOverviewAdminQueryVariables>(AccountOverviewAdminQueryDocument, variables),
      options
    );
export const useInfiniteAccountOverviewAdminQuery = <
      TData = AccountOverviewAdminQuery,
      TError = unknown
    >(
      pageParamKey: keyof AccountOverviewAdminQueryVariables,
      variables?: AccountOverviewAdminQueryVariables,
      options?: UseInfiniteQueryOptions<AccountOverviewAdminQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<AccountOverviewAdminQuery, TError, TData>(
      variables === undefined ? ['AccountOverviewAdminQuery.infinite'] : ['AccountOverviewAdminQuery.infinite', variables],
      (metaData) => fetcher<AccountOverviewAdminQuery, AccountOverviewAdminQueryVariables>(AccountOverviewAdminQueryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};

export const UserOverviewAdminQueryDocument = `
    query UserOverviewAdminQuery {
  listUsers {
    items {
      id
      createdAt
      updatedAt
      firstName
      lastName
      email
    }
  }
}
    `;
export const useUserOverviewAdminQuery = <
      TData = UserOverviewAdminQuery,
      TError = unknown
    >(
      variables?: UserOverviewAdminQueryVariables,
      options?: UseQueryOptions<UserOverviewAdminQuery, TError, TData>
    ) =>
    useQuery<UserOverviewAdminQuery, TError, TData>(
      variables === undefined ? ['UserOverviewAdminQuery'] : ['UserOverviewAdminQuery', variables],
      fetcher<UserOverviewAdminQuery, UserOverviewAdminQueryVariables>(UserOverviewAdminQueryDocument, variables),
      options
    );
export const useInfiniteUserOverviewAdminQuery = <
      TData = UserOverviewAdminQuery,
      TError = unknown
    >(
      pageParamKey: keyof UserOverviewAdminQueryVariables,
      variables?: UserOverviewAdminQueryVariables,
      options?: UseInfiniteQueryOptions<UserOverviewAdminQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<UserOverviewAdminQuery, TError, TData>(
      variables === undefined ? ['UserOverviewAdminQuery.infinite'] : ['UserOverviewAdminQuery.infinite', variables],
      (metaData) => fetcher<UserOverviewAdminQuery, UserOverviewAdminQueryVariables>(UserOverviewAdminQueryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
