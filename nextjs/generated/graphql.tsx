import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as React from "react";
import * as Apollo from "@apollo/client";
import * as ApolloReactComponents from "@apollo/client/react/components";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamptz: string;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: "accounts";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["bigint"]>;
  id: Scalars["uuid"];
  id_token?: Maybe<Scalars["String"]>;
  oauth_token?: Maybe<Scalars["String"]>;
  oauth_token_secret?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
  refresh_token?: Maybe<Scalars["String"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars["uuid"];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: "accounts_aggregate";
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: "accounts_aggregate_fields";
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: "accounts_avg_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Int_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = "accounts_pkey",
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars["bigint"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["bigint"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  oauth_token?: InputMaybe<Scalars["String"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  providerAccountId?: InputMaybe<Scalars["String"]>;
  refresh_token?: InputMaybe<Scalars["String"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: "accounts_max_fields";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["uuid"]>;
  id_token?: Maybe<Scalars["String"]>;
  oauth_token?: Maybe<Scalars["String"]>;
  oauth_token_secret?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  providerAccountId?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: "accounts_min_fields";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["uuid"]>;
  id_token?: Maybe<Scalars["String"]>;
  oauth_token?: Maybe<Scalars["String"]>;
  oauth_token_secret?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  providerAccountId?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: "accounts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["bigint"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  oauth_token?: InputMaybe<Scalars["String"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  providerAccountId?: InputMaybe<Scalars["String"]>;
  refresh_token?: InputMaybe<Scalars["String"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: "accounts_stddev_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: "accounts_stddev_pop_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: "accounts_stddev_samp_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars["String"]>;
  expires_at?: InputMaybe<Scalars["bigint"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  id_token?: InputMaybe<Scalars["String"]>;
  oauth_token?: InputMaybe<Scalars["String"]>;
  oauth_token_secret?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  providerAccountId?: InputMaybe<Scalars["String"]>;
  refresh_token?: InputMaybe<Scalars["String"]>;
  refresh_token_expires_in?: InputMaybe<Scalars["Int"]>;
  scope?: InputMaybe<Scalars["String"]>;
  session_state?: InputMaybe<Scalars["String"]>;
  token_type?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: "accounts_sum_fields";
  expires_at?: Maybe<Scalars["bigint"]>;
  refresh_token_expires_in?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = "access_token",
  /** column name */
  ExpiresAt = "expires_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  OauthToken = "oauth_token",
  /** column name */
  OauthTokenSecret = "oauth_token_secret",
  /** column name */
  Provider = "provider",
  /** column name */
  ProviderAccountId = "providerAccountId",
  /** column name */
  RefreshToken = "refresh_token",
  /** column name */
  RefreshTokenExpiresIn = "refresh_token_expires_in",
  /** column name */
  Scope = "scope",
  /** column name */
  SessionState = "session_state",
  /** column name */
  TokenType = "token_type",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: "accounts_var_pop_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: "accounts_var_samp_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: "accounts_variance_fields";
  expires_at?: Maybe<Scalars["Float"]>;
  refresh_token_expires_in?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bigint"]>;
  _gt?: InputMaybe<Scalars["bigint"]>;
  _gte?: InputMaybe<Scalars["bigint"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["bigint"]>;
  _lte?: InputMaybe<Scalars["bigint"]>;
  _neq?: InputMaybe<Scalars["bigint"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "contacts" */
export type Contacts = {
  __typename?: "contacts";
  crm_id?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  metadata?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  /** An object relationship */
  org: Orgs;
  org_id: Scalars["uuid"];
};

/** columns and relationships of "contacts" */
export type ContactsMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "contacts" */
export type Contacts_Aggregate = {
  __typename?: "contacts_aggregate";
  aggregate?: Maybe<Contacts_Aggregate_Fields>;
  nodes: Array<Contacts>;
};

export type Contacts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contacts_Aggregate_Bool_Exp_Count>;
};

export type Contacts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contacts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Contacts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_Fields = {
  __typename?: "contacts_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Contacts_Max_Fields>;
  min?: Maybe<Contacts_Min_Fields>;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contacts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contacts" */
export type Contacts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contacts_Max_Order_By>;
  min?: InputMaybe<Contacts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Contacts_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "contacts" */
export type Contacts_Arr_Rel_Insert_Input = {
  data: Array<Contacts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export type Contacts_Bool_Exp = {
  _and?: InputMaybe<Array<Contacts_Bool_Exp>>;
  _not?: InputMaybe<Contacts_Bool_Exp>;
  _or?: InputMaybe<Array<Contacts_Bool_Exp>>;
  crm_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Orgs_Bool_Exp>;
  org_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contacts" */
export enum Contacts_Constraint {
  /** unique or primary key constraint on columns "id" */
  DonorsPkey = "donors_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Contacts_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Contacts_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Contacts_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "contacts" */
export type Contacts_Insert_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
  org?: InputMaybe<Orgs_Obj_Rel_Insert_Input>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Contacts_Max_Fields = {
  __typename?: "contacts_max_fields";
  crm_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  org_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "contacts" */
export type Contacts_Max_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contacts_Min_Fields = {
  __typename?: "contacts_min_fields";
  crm_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  org_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "contacts" */
export type Contacts_Min_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contacts" */
export type Contacts_Mutation_Response = {
  __typename?: "contacts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Contacts>;
};

/** on_conflict condition type for table "contacts" */
export type Contacts_On_Conflict = {
  constraint: Contacts_Constraint;
  update_columns?: Array<Contacts_Update_Column>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** Ordering options when selecting data from "contacts". */
export type Contacts_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org?: InputMaybe<Orgs_Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contacts */
export type Contacts_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Contacts_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "contacts" */
export enum Contacts_Select_Column {
  /** column name */
  CrmId = "crm_id",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
  /** column name */
  OrgId = "org_id",
}

/** input type for updating data in table "contacts" */
export type Contacts_Set_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "contacts" */
export type Contacts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contacts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contacts_Stream_Cursor_Value_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "contacts" */
export enum Contacts_Update_Column {
  /** column name */
  CrmId = "crm_id",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
  /** column name */
  OrgId = "org_id",
}

export type Contacts_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Contacts_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Contacts_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Contacts_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Contacts_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Contacts_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contacts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contacts_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "contacts" */
  delete_contacts?: Maybe<Contacts_Mutation_Response>;
  /** delete single row from the table: "contacts" */
  delete_contacts_by_pk?: Maybe<Contacts>;
  /** delete data from the table: "org_users" */
  delete_org_users?: Maybe<Org_Users_Mutation_Response>;
  /** delete single row from the table: "org_users" */
  delete_org_users_by_pk?: Maybe<Org_Users>;
  /** delete data from the table: "orgs" */
  delete_orgs?: Maybe<Orgs_Mutation_Response>;
  /** delete single row from the table: "orgs" */
  delete_orgs_by_pk?: Maybe<Orgs>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "contacts" */
  insert_contacts?: Maybe<Contacts_Mutation_Response>;
  /** insert a single row into the table: "contacts" */
  insert_contacts_one?: Maybe<Contacts>;
  /** insert data into the table: "org_users" */
  insert_org_users?: Maybe<Org_Users_Mutation_Response>;
  /** insert a single row into the table: "org_users" */
  insert_org_users_one?: Maybe<Org_Users>;
  /** insert data into the table: "orgs" */
  insert_orgs?: Maybe<Orgs_Mutation_Response>;
  /** insert a single row into the table: "orgs" */
  insert_orgs_one?: Maybe<Orgs>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  simulateSendEmail: Scalars["String"];
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "contacts" */
  update_contacts?: Maybe<Contacts_Mutation_Response>;
  /** update single row of the table: "contacts" */
  update_contacts_by_pk?: Maybe<Contacts>;
  /** update multiples rows of table: "contacts" */
  update_contacts_many?: Maybe<Array<Maybe<Contacts_Mutation_Response>>>;
  /** update data of the table: "org_users" */
  update_org_users?: Maybe<Org_Users_Mutation_Response>;
  /** update single row of the table: "org_users" */
  update_org_users_by_pk?: Maybe<Org_Users>;
  /** update multiples rows of table: "org_users" */
  update_org_users_many?: Maybe<Array<Maybe<Org_Users_Mutation_Response>>>;
  /** update data of the table: "orgs" */
  update_orgs?: Maybe<Orgs_Mutation_Response>;
  /** update single row of the table: "orgs" */
  update_orgs_by_pk?: Maybe<Orgs>;
  /** update multiples rows of table: "orgs" */
  update_orgs_many?: Maybe<Array<Maybe<Orgs_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_ContactsArgs = {
  where: Contacts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contacts_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Org_UsersArgs = {
  where: Org_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Org_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_OrgsArgs = {
  where: Orgs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orgs_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactsArgs = {
  objects: Array<Contacts_Insert_Input>;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contacts_OneArgs = {
  object: Contacts_Insert_Input;
  on_conflict?: InputMaybe<Contacts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_UsersArgs = {
  objects: Array<Org_Users_Insert_Input>;
  on_conflict?: InputMaybe<Org_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_Users_OneArgs = {
  object: Org_Users_Insert_Input;
  on_conflict?: InputMaybe<Org_Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrgsArgs = {
  objects: Array<Orgs_Insert_Input>;
  on_conflict?: InputMaybe<Orgs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orgs_OneArgs = {
  object: Orgs_Insert_Input;
  on_conflict?: InputMaybe<Orgs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootSimulateSendEmailArgs = {
  subject?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContactsArgs = {
  _append?: InputMaybe<Contacts_Append_Input>;
  _delete_at_path?: InputMaybe<Contacts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Contacts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Contacts_Delete_Key_Input>;
  _prepend?: InputMaybe<Contacts_Prepend_Input>;
  _set?: InputMaybe<Contacts_Set_Input>;
  where: Contacts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contacts_By_PkArgs = {
  _append?: InputMaybe<Contacts_Append_Input>;
  _delete_at_path?: InputMaybe<Contacts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Contacts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Contacts_Delete_Key_Input>;
  _prepend?: InputMaybe<Contacts_Prepend_Input>;
  _set?: InputMaybe<Contacts_Set_Input>;
  pk_columns: Contacts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contacts_ManyArgs = {
  updates: Array<Contacts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Org_UsersArgs = {
  _set?: InputMaybe<Org_Users_Set_Input>;
  where: Org_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Org_Users_By_PkArgs = {
  _set?: InputMaybe<Org_Users_Set_Input>;
  pk_columns: Org_Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Org_Users_ManyArgs = {
  updates: Array<Org_Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OrgsArgs = {
  _append?: InputMaybe<Orgs_Append_Input>;
  _delete_at_path?: InputMaybe<Orgs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orgs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orgs_Delete_Key_Input>;
  _prepend?: InputMaybe<Orgs_Prepend_Input>;
  _set?: InputMaybe<Orgs_Set_Input>;
  where: Orgs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orgs_By_PkArgs = {
  _append?: InputMaybe<Orgs_Append_Input>;
  _delete_at_path?: InputMaybe<Orgs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orgs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orgs_Delete_Key_Input>;
  _prepend?: InputMaybe<Orgs_Prepend_Input>;
  _set?: InputMaybe<Orgs_Set_Input>;
  pk_columns: Orgs_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Orgs_ManyArgs = {
  updates: Array<Orgs_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "org_users" */
export type Org_Users = {
  __typename?: "org_users";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id: Scalars["uuid"];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "org_users" */
export type Org_Users_Aggregate = {
  __typename?: "org_users_aggregate";
  aggregate?: Maybe<Org_Users_Aggregate_Fields>;
  nodes: Array<Org_Users>;
};

export type Org_Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Org_Users_Aggregate_Bool_Exp_Count>;
};

export type Org_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Org_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Org_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "org_users" */
export type Org_Users_Aggregate_Fields = {
  __typename?: "org_users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Org_Users_Max_Fields>;
  min?: Maybe<Org_Users_Min_Fields>;
};

/** aggregate fields of "org_users" */
export type Org_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "org_users" */
export type Org_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Org_Users_Max_Order_By>;
  min?: InputMaybe<Org_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "org_users" */
export type Org_Users_Arr_Rel_Insert_Input = {
  data: Array<Org_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Org_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "org_users". All fields are combined with a logical 'AND'. */
export type Org_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Org_Users_Bool_Exp>>;
  _not?: InputMaybe<Org_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Org_Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Orgs_Bool_Exp>;
  org_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_users" */
export enum Org_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgMembershipsPkey = "org_memberships_pkey",
}

/** input type for inserting data into table "org_users" */
export type Org_Users_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  org?: InputMaybe<Orgs_Obj_Rel_Insert_Input>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Org_Users_Max_Fields = {
  __typename?: "org_users_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  org_id?: Maybe<Scalars["uuid"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "org_users" */
export type Org_Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Users_Min_Fields = {
  __typename?: "org_users_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  org_id?: Maybe<Scalars["uuid"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "org_users" */
export type Org_Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "org_users" */
export type Org_Users_Mutation_Response = {
  __typename?: "org_users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Org_Users>;
};

/** on_conflict condition type for table "org_users" */
export type Org_Users_On_Conflict = {
  constraint: Org_Users_Constraint;
  update_columns?: Array<Org_Users_Update_Column>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "org_users". */
export type Org_Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  org?: InputMaybe<Orgs_Order_By>;
  org_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: org_users */
export type Org_Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "org_users" */
export enum Org_Users_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrgId = "org_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "org_users" */
export type Org_Users_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "org_users" */
export type Org_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Org_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "org_users" */
export enum Org_Users_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrgId = "org_id",
  /** column name */
  UserId = "user_id",
}

export type Org_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Org_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Org_Users_Bool_Exp;
};

/** columns and relationships of "orgs" */
export type Orgs = {
  __typename?: "orgs";
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  metadata?: Maybe<Scalars["jsonb"]>;
  name: Scalars["String"];
  /** An array relationship */
  users: Array<Org_Users>;
  /** An aggregate relationship */
  users_aggregate: Org_Users_Aggregate;
};

/** columns and relationships of "orgs" */
export type OrgsContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "orgs" */
export type OrgsUsersArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

/** aggregated selection of "orgs" */
export type Orgs_Aggregate = {
  __typename?: "orgs_aggregate";
  aggregate?: Maybe<Orgs_Aggregate_Fields>;
  nodes: Array<Orgs>;
};

/** aggregate fields of "orgs" */
export type Orgs_Aggregate_Fields = {
  __typename?: "orgs_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Orgs_Max_Fields>;
  min?: Maybe<Orgs_Min_Fields>;
};

/** aggregate fields of "orgs" */
export type Orgs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orgs_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Orgs_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
export type Orgs_Bool_Exp = {
  _and?: InputMaybe<Array<Orgs_Bool_Exp>>;
  _not?: InputMaybe<Orgs_Bool_Exp>;
  _or?: InputMaybe<Array<Orgs_Bool_Exp>>;
  contacts?: InputMaybe<Contacts_Bool_Exp>;
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Org_Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Org_Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "orgs" */
export enum Orgs_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgsPkey = "orgs_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Orgs_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Orgs_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Orgs_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "orgs" */
export type Orgs_Insert_Input = {
  contacts?: InputMaybe<Contacts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Org_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orgs_Max_Fields = {
  __typename?: "orgs_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Orgs_Min_Fields = {
  __typename?: "orgs_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "orgs" */
export type Orgs_Mutation_Response = {
  __typename?: "orgs_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Orgs>;
};

/** input type for inserting object relation for remote table "orgs" */
export type Orgs_Obj_Rel_Insert_Input = {
  data: Orgs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orgs_On_Conflict>;
};

/** on_conflict condition type for table "orgs" */
export type Orgs_On_Conflict = {
  constraint: Orgs_Constraint;
  update_columns?: Array<Orgs_Update_Column>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

/** Ordering options when selecting data from "orgs". */
export type Orgs_Order_By = {
  contacts_aggregate?: InputMaybe<Contacts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Org_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: orgs */
export type Orgs_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Orgs_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "orgs" */
export enum Orgs_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "orgs" */
export type Orgs_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "orgs" */
export type Orgs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orgs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orgs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "orgs" */
export enum Orgs_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
}

export type Orgs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Orgs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Orgs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Orgs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Orgs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Orgs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orgs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orgs_Bool_Exp;
};

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "org_users" */
  org_users: Array<Org_Users>;
  /** fetch aggregated fields from the table: "org_users" */
  org_users_aggregate: Org_Users_Aggregate;
  /** fetch data from the table: "org_users" using primary key columns */
  org_users_by_pk?: Maybe<Org_Users>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Query_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

export type Query_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

export type Query_RootContacts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootOrg_UsersArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

export type Query_RootOrg_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

export type Query_RootOrg_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootOrgsArgs = {
  distinct_on?: InputMaybe<Array<Orgs_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orgs_Order_By>>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

export type Query_RootOrgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orgs_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orgs_Order_By>>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

export type Query_RootOrgs_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  contacts: Array<Contacts>;
  /** An aggregate relationship */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table in a streaming manner: "contacts" */
  contacts_stream: Array<Contacts>;
  /** fetch data from the table: "org_users" */
  org_users: Array<Org_Users>;
  /** fetch aggregated fields from the table: "org_users" */
  org_users_aggregate: Org_Users_Aggregate;
  /** fetch data from the table: "org_users" using primary key columns */
  org_users_by_pk?: Maybe<Org_Users>;
  /** fetch data from the table in a streaming manner: "org_users" */
  org_users_stream: Array<Org_Users>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** fetch data from the table in a streaming manner: "orgs" */
  orgs_stream: Array<Orgs>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

export type Subscription_RootContactsArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

export type Subscription_RootContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contacts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Contacts_Order_By>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

export type Subscription_RootContacts_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootContacts_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Contacts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contacts_Bool_Exp>;
};

export type Subscription_RootOrg_UsersArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

export type Subscription_RootOrg_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

export type Subscription_RootOrg_Users_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootOrg_Users_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Org_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

export type Subscription_RootOrgsArgs = {
  distinct_on?: InputMaybe<Array<Orgs_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orgs_Order_By>>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

export type Subscription_RootOrgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orgs_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Orgs_Order_By>>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

export type Subscription_RootOrgs_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootOrgs_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Orgs_Stream_Cursor_Input>>;
  where?: InputMaybe<Orgs_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  is_admin: Scalars["Boolean"];
  metadata?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  /** An array relationship */
  orgs: Array<Org_Users>;
  /** An aggregate relationship */
  orgs_aggregate: Org_Users_Aggregate;
};

/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersOrgsArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersOrgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Users_Order_By>>;
  where?: InputMaybe<Org_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orgs?: InputMaybe<Org_Users_Bool_Exp>;
  orgs_aggregate?: InputMaybe<Org_Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
  orgs?: InputMaybe<Org_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orgs_aggregate?: InputMaybe<Org_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsAdmin = "is_admin",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsAdmin = "is_admin",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Name = "name",
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type ContactInfoQueryVariables = Exact<{
  contactID: Scalars["uuid"];
}>;

export type ContactInfoQuery = {
  __typename?: "query_root";
  contacts_by_pk?:
    | {
        __typename?: "contacts";
        id: any;
        name?: string | undefined;
        metadata?: any | undefined;
      }
    | undefined;
};

export type ContactTableQueryVariables = Exact<{
  userID: Scalars["uuid"];
}>;

export type ContactTableQuery = {
  __typename?: "query_root";
  users_by_pk?:
    | {
        __typename?: "users";
        orgs: Array<{
          __typename?: "org_users";
          org?:
            | {
                __typename?: "orgs";
                id: any;
                contacts: Array<{
                  __typename?: "contacts";
                  id: any;
                  name?: string | undefined;
                  metadata?: any | undefined;
                }>;
              }
            | undefined;
        }>;
      }
    | undefined;
};

export type CreateOrgMutationVariables = Exact<{
  name: Scalars["String"];
  metadata?: InputMaybe<Scalars["jsonb"]>;
}>;

export type CreateOrgMutation = {
  __typename?: "mutation_root";
  insert_orgs_one?: { __typename?: "orgs"; id: any } | undefined;
};

export type AddUserToOrgMutationVariables = Exact<{
  orgID: Scalars["uuid"];
  userID: Scalars["uuid"];
}>;

export type AddUserToOrgMutation = {
  __typename?: "mutation_root";
  insert_org_users_one?: { __typename?: "org_users"; id: any } | undefined;
};

export type AddContactsToOrgMutationVariables = Exact<{
  contacts: Array<Contacts_Insert_Input> | Contacts_Insert_Input;
}>;

export type AddContactsToOrgMutation = {
  __typename?: "mutation_root";
  insert_contacts?:
    | {
        __typename?: "contacts_mutation_response";
        returning: Array<{ __typename?: "contacts"; id: any }>;
      }
    | undefined;
};

export type OrgInfoQueryVariables = Exact<{
  userID: Scalars["uuid"];
}>;

export type OrgInfoQuery = {
  __typename?: "query_root";
  users_by_pk?:
    | {
        __typename?: "users";
        orgs: Array<{
          __typename?: "org_users";
          org?:
            | {
                __typename?: "orgs";
                id: any;
                name: string;
                metadata?: any | undefined;
              }
            | undefined;
        }>;
      }
    | undefined;
};

export type UserProfileModalQueryVariables = Exact<{
  userID: Scalars["uuid"];
}>;

export type UserProfileModalQuery = {
  __typename?: "query_root";
  users_by_pk?:
    | {
        __typename?: "users";
        id: any;
        name?: string | undefined;
        metadata?: any | undefined;
      }
    | undefined;
};

export type AppQueryVariables = Exact<{ [key: string]: never }>;

export type AppQuery = {
  __typename?: "query_root";
  orgs: Array<{ __typename?: "orgs"; id: any; name: string }>;
};

export const ContactInfoDocument = gql`
  query ContactInfo($contactID: uuid!) {
    contacts_by_pk(id: $contactID) {
      id
      name
      metadata
    }
  }
`;
export type ContactInfoComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ContactInfoQuery,
    ContactInfoQueryVariables
  >,
  "query"
> &
  (
    | { variables: ContactInfoQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const ContactInfoComponent = (props: ContactInfoComponentProps) => (
  <ApolloReactComponents.Query<ContactInfoQuery, ContactInfoQueryVariables>
    query={ContactInfoDocument}
    {...props}
  />
);

/**
 * __useContactInfoQuery__
 *
 * To run a query within a React component, call `useContactInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactInfoQuery({
 *   variables: {
 *      contactID: // value for 'contactID'
 *   },
 * });
 */
export function useContactInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    ContactInfoQuery,
    ContactInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactInfoQuery, ContactInfoQueryVariables>(
    ContactInfoDocument,
    options
  );
}
export function useContactInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactInfoQuery,
    ContactInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContactInfoQuery, ContactInfoQueryVariables>(
    ContactInfoDocument,
    options
  );
}
export type ContactInfoQueryHookResult = ReturnType<typeof useContactInfoQuery>;
export type ContactInfoLazyQueryHookResult = ReturnType<
  typeof useContactInfoLazyQuery
>;
export type ContactInfoQueryResult = Apollo.QueryResult<
  ContactInfoQuery,
  ContactInfoQueryVariables
>;
export const ContactTableDocument = gql`
  query ContactTable($userID: uuid!) {
    users_by_pk(id: $userID) {
      orgs(order_by: { created_at: desc }, limit: 1) {
        org {
          id
          contacts {
            id
            name
            metadata
          }
        }
      }
    }
  }
`;
export type ContactTableComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ContactTableQuery,
    ContactTableQueryVariables
  >,
  "query"
> &
  (
    | { variables: ContactTableQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const ContactTableComponent = (props: ContactTableComponentProps) => (
  <ApolloReactComponents.Query<ContactTableQuery, ContactTableQueryVariables>
    query={ContactTableDocument}
    {...props}
  />
);

/**
 * __useContactTableQuery__
 *
 * To run a query within a React component, call `useContactTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactTableQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useContactTableQuery(
  baseOptions: Apollo.QueryHookOptions<
    ContactTableQuery,
    ContactTableQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContactTableQuery, ContactTableQueryVariables>(
    ContactTableDocument,
    options
  );
}
export function useContactTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactTableQuery,
    ContactTableQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContactTableQuery, ContactTableQueryVariables>(
    ContactTableDocument,
    options
  );
}
export type ContactTableQueryHookResult = ReturnType<
  typeof useContactTableQuery
>;
export type ContactTableLazyQueryHookResult = ReturnType<
  typeof useContactTableLazyQuery
>;
export type ContactTableQueryResult = Apollo.QueryResult<
  ContactTableQuery,
  ContactTableQueryVariables
>;
export const CreateOrgDocument = gql`
  mutation CreateOrg($name: String!, $metadata: jsonb) {
    insert_orgs_one(object: { name: $name, metadata: $metadata }) {
      id
    }
  }
`;
export type CreateOrgMutationFn = Apollo.MutationFunction<
  CreateOrgMutation,
  CreateOrgMutationVariables
>;
export type CreateOrgComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateOrgMutation,
    CreateOrgMutationVariables
  >,
  "mutation"
>;

export const CreateOrgComponent = (props: CreateOrgComponentProps) => (
  <ApolloReactComponents.Mutation<CreateOrgMutation, CreateOrgMutationVariables>
    mutation={CreateOrgDocument}
    {...props}
  />
);

/**
 * __useCreateOrgMutation__
 *
 * To run a mutation, you first call `useCreateOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrgMutation, { data, loading, error }] = useCreateOrgMutation({
 *   variables: {
 *      name: // value for 'name'
 *      metadata: // value for 'metadata'
 *   },
 * });
 */
export function useCreateOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrgMutation,
    CreateOrgMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrgMutation, CreateOrgMutationVariables>(
    CreateOrgDocument,
    options
  );
}
export type CreateOrgMutationHookResult = ReturnType<
  typeof useCreateOrgMutation
>;
export type CreateOrgMutationResult = Apollo.MutationResult<CreateOrgMutation>;
export type CreateOrgMutationOptions = Apollo.BaseMutationOptions<
  CreateOrgMutation,
  CreateOrgMutationVariables
>;
export const AddUserToOrgDocument = gql`
  mutation AddUserToOrg($orgID: uuid!, $userID: uuid!) {
    insert_org_users_one(object: { org_id: $orgID, user_id: $userID }) {
      id
    }
  }
`;
export type AddUserToOrgMutationFn = Apollo.MutationFunction<
  AddUserToOrgMutation,
  AddUserToOrgMutationVariables
>;
export type AddUserToOrgComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddUserToOrgMutation,
    AddUserToOrgMutationVariables
  >,
  "mutation"
>;

export const AddUserToOrgComponent = (props: AddUserToOrgComponentProps) => (
  <ApolloReactComponents.Mutation<
    AddUserToOrgMutation,
    AddUserToOrgMutationVariables
  >
    mutation={AddUserToOrgDocument}
    {...props}
  />
);

/**
 * __useAddUserToOrgMutation__
 *
 * To run a mutation, you first call `useAddUserToOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserToOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserToOrgMutation, { data, loading, error }] = useAddUserToOrgMutation({
 *   variables: {
 *      orgID: // value for 'orgID'
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useAddUserToOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddUserToOrgMutation,
    AddUserToOrgMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddUserToOrgMutation,
    AddUserToOrgMutationVariables
  >(AddUserToOrgDocument, options);
}
export type AddUserToOrgMutationHookResult = ReturnType<
  typeof useAddUserToOrgMutation
>;
export type AddUserToOrgMutationResult =
  Apollo.MutationResult<AddUserToOrgMutation>;
export type AddUserToOrgMutationOptions = Apollo.BaseMutationOptions<
  AddUserToOrgMutation,
  AddUserToOrgMutationVariables
>;
export const AddContactsToOrgDocument = gql`
  mutation AddContactsToOrg($contacts: [contacts_insert_input!]!) {
    insert_contacts(objects: $contacts) {
      returning {
        id
      }
    }
  }
`;
export type AddContactsToOrgMutationFn = Apollo.MutationFunction<
  AddContactsToOrgMutation,
  AddContactsToOrgMutationVariables
>;
export type AddContactsToOrgComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddContactsToOrgMutation,
    AddContactsToOrgMutationVariables
  >,
  "mutation"
>;

export const AddContactsToOrgComponent = (
  props: AddContactsToOrgComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AddContactsToOrgMutation,
    AddContactsToOrgMutationVariables
  >
    mutation={AddContactsToOrgDocument}
    {...props}
  />
);

/**
 * __useAddContactsToOrgMutation__
 *
 * To run a mutation, you first call `useAddContactsToOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContactsToOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContactsToOrgMutation, { data, loading, error }] = useAddContactsToOrgMutation({
 *   variables: {
 *      contacts: // value for 'contacts'
 *   },
 * });
 */
export function useAddContactsToOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddContactsToOrgMutation,
    AddContactsToOrgMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddContactsToOrgMutation,
    AddContactsToOrgMutationVariables
  >(AddContactsToOrgDocument, options);
}
export type AddContactsToOrgMutationHookResult = ReturnType<
  typeof useAddContactsToOrgMutation
>;
export type AddContactsToOrgMutationResult =
  Apollo.MutationResult<AddContactsToOrgMutation>;
export type AddContactsToOrgMutationOptions = Apollo.BaseMutationOptions<
  AddContactsToOrgMutation,
  AddContactsToOrgMutationVariables
>;
export const OrgInfoDocument = gql`
  query OrgInfo($userID: uuid!) {
    users_by_pk(id: $userID) {
      orgs(order_by: { created_at: desc }, limit: 1) {
        org {
          id
          name
          metadata
        }
      }
    }
  }
`;
export type OrgInfoComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    OrgInfoQuery,
    OrgInfoQueryVariables
  >,
  "query"
> &
  ({ variables: OrgInfoQueryVariables; skip?: boolean } | { skip: boolean });

export const OrgInfoComponent = (props: OrgInfoComponentProps) => (
  <ApolloReactComponents.Query<OrgInfoQuery, OrgInfoQueryVariables>
    query={OrgInfoDocument}
    {...props}
  />
);

/**
 * __useOrgInfoQuery__
 *
 * To run a query within a React component, call `useOrgInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrgInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrgInfoQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useOrgInfoQuery(
  baseOptions: Apollo.QueryHookOptions<OrgInfoQuery, OrgInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<OrgInfoQuery, OrgInfoQueryVariables>(
    OrgInfoDocument,
    options
  );
}
export function useOrgInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrgInfoQuery, OrgInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<OrgInfoQuery, OrgInfoQueryVariables>(
    OrgInfoDocument,
    options
  );
}
export type OrgInfoQueryHookResult = ReturnType<typeof useOrgInfoQuery>;
export type OrgInfoLazyQueryHookResult = ReturnType<typeof useOrgInfoLazyQuery>;
export type OrgInfoQueryResult = Apollo.QueryResult<
  OrgInfoQuery,
  OrgInfoQueryVariables
>;
export const UserProfileModalDocument = gql`
  query UserProfileModal($userID: uuid!) {
    users_by_pk(id: $userID) {
      id
      name
      metadata
    }
  }
`;
export type UserProfileModalComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    UserProfileModalQuery,
    UserProfileModalQueryVariables
  >,
  "query"
> &
  (
    | { variables: UserProfileModalQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const UserProfileModalComponent = (
  props: UserProfileModalComponentProps
) => (
  <ApolloReactComponents.Query<
    UserProfileModalQuery,
    UserProfileModalQueryVariables
  >
    query={UserProfileModalDocument}
    {...props}
  />
);

/**
 * __useUserProfileModalQuery__
 *
 * To run a query within a React component, call `useUserProfileModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileModalQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useUserProfileModalQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserProfileModalQuery,
    UserProfileModalQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserProfileModalQuery, UserProfileModalQueryVariables>(
    UserProfileModalDocument,
    options
  );
}
export function useUserProfileModalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserProfileModalQuery,
    UserProfileModalQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserProfileModalQuery,
    UserProfileModalQueryVariables
  >(UserProfileModalDocument, options);
}
export type UserProfileModalQueryHookResult = ReturnType<
  typeof useUserProfileModalQuery
>;
export type UserProfileModalLazyQueryHookResult = ReturnType<
  typeof useUserProfileModalLazyQuery
>;
export type UserProfileModalQueryResult = Apollo.QueryResult<
  UserProfileModalQuery,
  UserProfileModalQueryVariables
>;
export const AppDocument = gql`
  query App {
    orgs {
      id
      name
    }
  }
`;
export type AppComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AppQuery, AppQueryVariables>,
  "query"
>;

export const AppComponent = (props: AppComponentProps) => (
  <ApolloReactComponents.Query<AppQuery, AppQueryVariables>
    query={AppDocument}
    {...props}
  />
);

/**
 * __useAppQuery__
 *
 * To run a query within a React component, call `useAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppQuery(
  baseOptions?: Apollo.QueryHookOptions<AppQuery, AppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AppQuery, AppQueryVariables>(AppDocument, options);
}
export function useAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AppQuery, AppQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AppQuery, AppQueryVariables>(AppDocument, options);
}
export type AppQueryHookResult = ReturnType<typeof useAppQuery>;
export type AppLazyQueryHookResult = ReturnType<typeof useAppLazyQuery>;
export type AppQueryResult = Apollo.QueryResult<AppQuery, AppQueryVariables>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  String_comparison_exp: String_Comparison_Exp;
  accounts: ResolverTypeWrapper<Accounts>;
  accounts_aggregate: ResolverTypeWrapper<Accounts_Aggregate>;
  accounts_aggregate_bool_exp: Accounts_Aggregate_Bool_Exp;
  accounts_aggregate_bool_exp_count: Accounts_Aggregate_Bool_Exp_Count;
  accounts_aggregate_fields: ResolverTypeWrapper<Accounts_Aggregate_Fields>;
  accounts_aggregate_order_by: Accounts_Aggregate_Order_By;
  accounts_arr_rel_insert_input: Accounts_Arr_Rel_Insert_Input;
  accounts_avg_fields: ResolverTypeWrapper<Accounts_Avg_Fields>;
  accounts_avg_order_by: Accounts_Avg_Order_By;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_constraint: Accounts_Constraint;
  accounts_inc_input: Accounts_Inc_Input;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: ResolverTypeWrapper<Accounts_Max_Fields>;
  accounts_max_order_by: Accounts_Max_Order_By;
  accounts_min_fields: ResolverTypeWrapper<Accounts_Min_Fields>;
  accounts_min_order_by: Accounts_Min_Order_By;
  accounts_mutation_response: ResolverTypeWrapper<Accounts_Mutation_Response>;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_select_column: Accounts_Select_Column;
  accounts_set_input: Accounts_Set_Input;
  accounts_stddev_fields: ResolverTypeWrapper<Accounts_Stddev_Fields>;
  accounts_stddev_order_by: Accounts_Stddev_Order_By;
  accounts_stddev_pop_fields: ResolverTypeWrapper<Accounts_Stddev_Pop_Fields>;
  accounts_stddev_pop_order_by: Accounts_Stddev_Pop_Order_By;
  accounts_stddev_samp_fields: ResolverTypeWrapper<Accounts_Stddev_Samp_Fields>;
  accounts_stddev_samp_order_by: Accounts_Stddev_Samp_Order_By;
  accounts_stream_cursor_input: Accounts_Stream_Cursor_Input;
  accounts_stream_cursor_value_input: Accounts_Stream_Cursor_Value_Input;
  accounts_sum_fields: ResolverTypeWrapper<Accounts_Sum_Fields>;
  accounts_sum_order_by: Accounts_Sum_Order_By;
  accounts_update_column: Accounts_Update_Column;
  accounts_updates: Accounts_Updates;
  accounts_var_pop_fields: ResolverTypeWrapper<Accounts_Var_Pop_Fields>;
  accounts_var_pop_order_by: Accounts_Var_Pop_Order_By;
  accounts_var_samp_fields: ResolverTypeWrapper<Accounts_Var_Samp_Fields>;
  accounts_var_samp_order_by: Accounts_Var_Samp_Order_By;
  accounts_variance_fields: ResolverTypeWrapper<Accounts_Variance_Fields>;
  accounts_variance_order_by: Accounts_Variance_Order_By;
  bigint: ResolverTypeWrapper<Scalars["bigint"]>;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  contacts: ResolverTypeWrapper<Contacts>;
  contacts_aggregate: ResolverTypeWrapper<Contacts_Aggregate>;
  contacts_aggregate_bool_exp: Contacts_Aggregate_Bool_Exp;
  contacts_aggregate_bool_exp_count: Contacts_Aggregate_Bool_Exp_Count;
  contacts_aggregate_fields: ResolverTypeWrapper<Contacts_Aggregate_Fields>;
  contacts_aggregate_order_by: Contacts_Aggregate_Order_By;
  contacts_append_input: Contacts_Append_Input;
  contacts_arr_rel_insert_input: Contacts_Arr_Rel_Insert_Input;
  contacts_bool_exp: Contacts_Bool_Exp;
  contacts_constraint: Contacts_Constraint;
  contacts_delete_at_path_input: Contacts_Delete_At_Path_Input;
  contacts_delete_elem_input: Contacts_Delete_Elem_Input;
  contacts_delete_key_input: Contacts_Delete_Key_Input;
  contacts_insert_input: Contacts_Insert_Input;
  contacts_max_fields: ResolverTypeWrapper<Contacts_Max_Fields>;
  contacts_max_order_by: Contacts_Max_Order_By;
  contacts_min_fields: ResolverTypeWrapper<Contacts_Min_Fields>;
  contacts_min_order_by: Contacts_Min_Order_By;
  contacts_mutation_response: ResolverTypeWrapper<Contacts_Mutation_Response>;
  contacts_on_conflict: Contacts_On_Conflict;
  contacts_order_by: Contacts_Order_By;
  contacts_pk_columns_input: Contacts_Pk_Columns_Input;
  contacts_prepend_input: Contacts_Prepend_Input;
  contacts_select_column: Contacts_Select_Column;
  contacts_set_input: Contacts_Set_Input;
  contacts_stream_cursor_input: Contacts_Stream_Cursor_Input;
  contacts_stream_cursor_value_input: Contacts_Stream_Cursor_Value_Input;
  contacts_update_column: Contacts_Update_Column;
  contacts_updates: Contacts_Updates;
  cursor_ordering: Cursor_Ordering;
  jsonb: ResolverTypeWrapper<Scalars["jsonb"]>;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  org_users: ResolverTypeWrapper<Org_Users>;
  org_users_aggregate: ResolverTypeWrapper<Org_Users_Aggregate>;
  org_users_aggregate_bool_exp: Org_Users_Aggregate_Bool_Exp;
  org_users_aggregate_bool_exp_count: Org_Users_Aggregate_Bool_Exp_Count;
  org_users_aggregate_fields: ResolverTypeWrapper<Org_Users_Aggregate_Fields>;
  org_users_aggregate_order_by: Org_Users_Aggregate_Order_By;
  org_users_arr_rel_insert_input: Org_Users_Arr_Rel_Insert_Input;
  org_users_bool_exp: Org_Users_Bool_Exp;
  org_users_constraint: Org_Users_Constraint;
  org_users_insert_input: Org_Users_Insert_Input;
  org_users_max_fields: ResolverTypeWrapper<Org_Users_Max_Fields>;
  org_users_max_order_by: Org_Users_Max_Order_By;
  org_users_min_fields: ResolverTypeWrapper<Org_Users_Min_Fields>;
  org_users_min_order_by: Org_Users_Min_Order_By;
  org_users_mutation_response: ResolverTypeWrapper<Org_Users_Mutation_Response>;
  org_users_on_conflict: Org_Users_On_Conflict;
  org_users_order_by: Org_Users_Order_By;
  org_users_pk_columns_input: Org_Users_Pk_Columns_Input;
  org_users_select_column: Org_Users_Select_Column;
  org_users_set_input: Org_Users_Set_Input;
  org_users_stream_cursor_input: Org_Users_Stream_Cursor_Input;
  org_users_stream_cursor_value_input: Org_Users_Stream_Cursor_Value_Input;
  org_users_update_column: Org_Users_Update_Column;
  org_users_updates: Org_Users_Updates;
  orgs: ResolverTypeWrapper<Orgs>;
  orgs_aggregate: ResolverTypeWrapper<Orgs_Aggregate>;
  orgs_aggregate_fields: ResolverTypeWrapper<Orgs_Aggregate_Fields>;
  orgs_append_input: Orgs_Append_Input;
  orgs_bool_exp: Orgs_Bool_Exp;
  orgs_constraint: Orgs_Constraint;
  orgs_delete_at_path_input: Orgs_Delete_At_Path_Input;
  orgs_delete_elem_input: Orgs_Delete_Elem_Input;
  orgs_delete_key_input: Orgs_Delete_Key_Input;
  orgs_insert_input: Orgs_Insert_Input;
  orgs_max_fields: ResolverTypeWrapper<Orgs_Max_Fields>;
  orgs_min_fields: ResolverTypeWrapper<Orgs_Min_Fields>;
  orgs_mutation_response: ResolverTypeWrapper<Orgs_Mutation_Response>;
  orgs_obj_rel_insert_input: Orgs_Obj_Rel_Insert_Input;
  orgs_on_conflict: Orgs_On_Conflict;
  orgs_order_by: Orgs_Order_By;
  orgs_pk_columns_input: Orgs_Pk_Columns_Input;
  orgs_prepend_input: Orgs_Prepend_Input;
  orgs_select_column: Orgs_Select_Column;
  orgs_set_input: Orgs_Set_Input;
  orgs_stream_cursor_input: Orgs_Stream_Cursor_Input;
  orgs_stream_cursor_value_input: Orgs_Stream_Cursor_Value_Input;
  orgs_update_column: Orgs_Update_Column;
  orgs_updates: Orgs_Updates;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_append_input: Users_Append_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_delete_at_path_input: Users_Delete_At_Path_Input;
  users_delete_elem_input: Users_Delete_Elem_Input;
  users_delete_key_input: Users_Delete_Key_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_prepend_input: Users_Prepend_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars["Float"];
  Int: Scalars["Int"];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars["String"];
  String_comparison_exp: String_Comparison_Exp;
  accounts: Accounts;
  accounts_aggregate: Accounts_Aggregate;
  accounts_aggregate_bool_exp: Accounts_Aggregate_Bool_Exp;
  accounts_aggregate_bool_exp_count: Accounts_Aggregate_Bool_Exp_Count;
  accounts_aggregate_fields: Accounts_Aggregate_Fields;
  accounts_aggregate_order_by: Accounts_Aggregate_Order_By;
  accounts_arr_rel_insert_input: Accounts_Arr_Rel_Insert_Input;
  accounts_avg_fields: Accounts_Avg_Fields;
  accounts_avg_order_by: Accounts_Avg_Order_By;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_inc_input: Accounts_Inc_Input;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: Accounts_Max_Fields;
  accounts_max_order_by: Accounts_Max_Order_By;
  accounts_min_fields: Accounts_Min_Fields;
  accounts_min_order_by: Accounts_Min_Order_By;
  accounts_mutation_response: Accounts_Mutation_Response;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_set_input: Accounts_Set_Input;
  accounts_stddev_fields: Accounts_Stddev_Fields;
  accounts_stddev_order_by: Accounts_Stddev_Order_By;
  accounts_stddev_pop_fields: Accounts_Stddev_Pop_Fields;
  accounts_stddev_pop_order_by: Accounts_Stddev_Pop_Order_By;
  accounts_stddev_samp_fields: Accounts_Stddev_Samp_Fields;
  accounts_stddev_samp_order_by: Accounts_Stddev_Samp_Order_By;
  accounts_stream_cursor_input: Accounts_Stream_Cursor_Input;
  accounts_stream_cursor_value_input: Accounts_Stream_Cursor_Value_Input;
  accounts_sum_fields: Accounts_Sum_Fields;
  accounts_sum_order_by: Accounts_Sum_Order_By;
  accounts_updates: Accounts_Updates;
  accounts_var_pop_fields: Accounts_Var_Pop_Fields;
  accounts_var_pop_order_by: Accounts_Var_Pop_Order_By;
  accounts_var_samp_fields: Accounts_Var_Samp_Fields;
  accounts_var_samp_order_by: Accounts_Var_Samp_Order_By;
  accounts_variance_fields: Accounts_Variance_Fields;
  accounts_variance_order_by: Accounts_Variance_Order_By;
  bigint: Scalars["bigint"];
  bigint_comparison_exp: Bigint_Comparison_Exp;
  contacts: Contacts;
  contacts_aggregate: Contacts_Aggregate;
  contacts_aggregate_bool_exp: Contacts_Aggregate_Bool_Exp;
  contacts_aggregate_bool_exp_count: Contacts_Aggregate_Bool_Exp_Count;
  contacts_aggregate_fields: Contacts_Aggregate_Fields;
  contacts_aggregate_order_by: Contacts_Aggregate_Order_By;
  contacts_append_input: Contacts_Append_Input;
  contacts_arr_rel_insert_input: Contacts_Arr_Rel_Insert_Input;
  contacts_bool_exp: Contacts_Bool_Exp;
  contacts_delete_at_path_input: Contacts_Delete_At_Path_Input;
  contacts_delete_elem_input: Contacts_Delete_Elem_Input;
  contacts_delete_key_input: Contacts_Delete_Key_Input;
  contacts_insert_input: Contacts_Insert_Input;
  contacts_max_fields: Contacts_Max_Fields;
  contacts_max_order_by: Contacts_Max_Order_By;
  contacts_min_fields: Contacts_Min_Fields;
  contacts_min_order_by: Contacts_Min_Order_By;
  contacts_mutation_response: Contacts_Mutation_Response;
  contacts_on_conflict: Contacts_On_Conflict;
  contacts_order_by: Contacts_Order_By;
  contacts_pk_columns_input: Contacts_Pk_Columns_Input;
  contacts_prepend_input: Contacts_Prepend_Input;
  contacts_set_input: Contacts_Set_Input;
  contacts_stream_cursor_input: Contacts_Stream_Cursor_Input;
  contacts_stream_cursor_value_input: Contacts_Stream_Cursor_Value_Input;
  contacts_updates: Contacts_Updates;
  jsonb: Scalars["jsonb"];
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: {};
  org_users: Org_Users;
  org_users_aggregate: Org_Users_Aggregate;
  org_users_aggregate_bool_exp: Org_Users_Aggregate_Bool_Exp;
  org_users_aggregate_bool_exp_count: Org_Users_Aggregate_Bool_Exp_Count;
  org_users_aggregate_fields: Org_Users_Aggregate_Fields;
  org_users_aggregate_order_by: Org_Users_Aggregate_Order_By;
  org_users_arr_rel_insert_input: Org_Users_Arr_Rel_Insert_Input;
  org_users_bool_exp: Org_Users_Bool_Exp;
  org_users_insert_input: Org_Users_Insert_Input;
  org_users_max_fields: Org_Users_Max_Fields;
  org_users_max_order_by: Org_Users_Max_Order_By;
  org_users_min_fields: Org_Users_Min_Fields;
  org_users_min_order_by: Org_Users_Min_Order_By;
  org_users_mutation_response: Org_Users_Mutation_Response;
  org_users_on_conflict: Org_Users_On_Conflict;
  org_users_order_by: Org_Users_Order_By;
  org_users_pk_columns_input: Org_Users_Pk_Columns_Input;
  org_users_set_input: Org_Users_Set_Input;
  org_users_stream_cursor_input: Org_Users_Stream_Cursor_Input;
  org_users_stream_cursor_value_input: Org_Users_Stream_Cursor_Value_Input;
  org_users_updates: Org_Users_Updates;
  orgs: Orgs;
  orgs_aggregate: Orgs_Aggregate;
  orgs_aggregate_fields: Orgs_Aggregate_Fields;
  orgs_append_input: Orgs_Append_Input;
  orgs_bool_exp: Orgs_Bool_Exp;
  orgs_delete_at_path_input: Orgs_Delete_At_Path_Input;
  orgs_delete_elem_input: Orgs_Delete_Elem_Input;
  orgs_delete_key_input: Orgs_Delete_Key_Input;
  orgs_insert_input: Orgs_Insert_Input;
  orgs_max_fields: Orgs_Max_Fields;
  orgs_min_fields: Orgs_Min_Fields;
  orgs_mutation_response: Orgs_Mutation_Response;
  orgs_obj_rel_insert_input: Orgs_Obj_Rel_Insert_Input;
  orgs_on_conflict: Orgs_On_Conflict;
  orgs_order_by: Orgs_Order_By;
  orgs_pk_columns_input: Orgs_Pk_Columns_Input;
  orgs_prepend_input: Orgs_Prepend_Input;
  orgs_set_input: Orgs_Set_Input;
  orgs_stream_cursor_input: Orgs_Stream_Cursor_Input;
  orgs_stream_cursor_value_input: Orgs_Stream_Cursor_Value_Input;
  orgs_updates: Orgs_Updates;
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars["timestamptz"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_append_input: Users_Append_Input;
  users_bool_exp: Users_Bool_Exp;
  users_delete_at_path_input: Users_Delete_At_Path_Input;
  users_delete_elem_input: Users_Delete_Elem_Input;
  users_delete_key_input: Users_Delete_Key_Input;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_prepend_input: Users_Prepend_Input;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_updates: Users_Updates;
  uuid: Scalars["uuid"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars["Boolean"];
  ttl?: Scalars["Int"];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts"] = ResolversParentTypes["accounts"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<
    Maybe<ResolversTypes["bigint"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  oauth_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  providerAccountId?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  scope?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  session_state?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate"] = ResolversParentTypes["accounts_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["accounts_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["accounts"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_aggregate_fields"] = ResolversParentTypes["accounts_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["accounts_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Accounts_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["accounts_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["accounts_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["accounts_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["accounts_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["accounts_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["accounts_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["accounts_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["accounts_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["accounts_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_avg_fields"] = ResolversParentTypes["accounts_avg_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_max_fields"] = ResolversParentTypes["accounts_max_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<
    Maybe<ResolversTypes["bigint"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  oauth_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  providerAccountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  scope?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  session_state?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_min_fields"] = ResolversParentTypes["accounts_min_fields"]
> = {
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<
    Maybe<ResolversTypes["bigint"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  oauth_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  providerAccountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  scope?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  session_state?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_mutation_response"] = ResolversParentTypes["accounts_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_stddev_fields"] = ResolversParentTypes["accounts_stddev_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_stddev_pop_fields"] = ResolversParentTypes["accounts_stddev_pop_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_stddev_samp_fields"] = ResolversParentTypes["accounts_stddev_samp_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_sum_fields"] = ResolversParentTypes["accounts_sum_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["bigint"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_var_pop_fields"] = ResolversParentTypes["accounts_var_pop_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_var_samp_fields"] = ResolversParentTypes["accounts_var_samp_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["accounts_variance_fields"] = ResolversParentTypes["accounts_variance_fields"]
> = {
  expires_at?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  refresh_token_expires_in?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["bigint"], any> {
  name: "bigint";
}

export type ContactsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts"] = ResolversParentTypes["contacts"]
> = {
  crm_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<ContactsMetadataArgs>
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  org?: Resolver<ResolversTypes["orgs"], ParentType, ContextType>;
  org_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contacts_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts_aggregate"] = ResolversParentTypes["contacts_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["contacts_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["contacts"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contacts_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts_aggregate_fields"] = ResolversParentTypes["contacts_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Contacts_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["contacts_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["contacts_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contacts_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts_max_fields"] = ResolversParentTypes["contacts_max_fields"]
> = {
  crm_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contacts_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts_min_fields"] = ResolversParentTypes["contacts_min_fields"]
> = {
  crm_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Contacts_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["contacts_mutation_response"] = ResolversParentTypes["contacts_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["contacts"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonbScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["jsonb"], any> {
  name: "jsonb";
}

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_AccountsArgs, "where">
  >;
  delete_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Accounts_By_PkArgs, "id">
  >;
  delete_contacts?: Resolver<
    Maybe<ResolversTypes["contacts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_ContactsArgs, "where">
  >;
  delete_contacts_by_pk?: Resolver<
    Maybe<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Contacts_By_PkArgs, "id">
  >;
  delete_org_users?: Resolver<
    Maybe<ResolversTypes["org_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Org_UsersArgs, "where">
  >;
  delete_org_users_by_pk?: Resolver<
    Maybe<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Org_Users_By_PkArgs, "id">
  >;
  delete_orgs?: Resolver<
    Maybe<ResolversTypes["orgs_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_OrgsArgs, "where">
  >;
  delete_orgs_by_pk?: Resolver<
    Maybe<ResolversTypes["orgs"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Orgs_By_PkArgs, "id">
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, "where">
  >;
  delete_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Users_By_PkArgs, "id">
  >;
  insert_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_AccountsArgs, "objects">
  >;
  insert_accounts_one?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Accounts_OneArgs, "object">
  >;
  insert_contacts?: Resolver<
    Maybe<ResolversTypes["contacts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_ContactsArgs, "objects">
  >;
  insert_contacts_one?: Resolver<
    Maybe<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Contacts_OneArgs, "object">
  >;
  insert_org_users?: Resolver<
    Maybe<ResolversTypes["org_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Org_UsersArgs, "objects">
  >;
  insert_org_users_one?: Resolver<
    Maybe<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Org_Users_OneArgs, "object">
  >;
  insert_orgs?: Resolver<
    Maybe<ResolversTypes["orgs_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_OrgsArgs, "objects">
  >;
  insert_orgs_one?: Resolver<
    Maybe<ResolversTypes["orgs"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Orgs_OneArgs, "object">
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, "objects">
  >;
  insert_users_one?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Users_OneArgs, "object">
  >;
  simulateSendEmail?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    Partial<Mutation_RootSimulateSendEmailArgs>
  >;
  update_accounts?: Resolver<
    Maybe<ResolversTypes["accounts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_AccountsArgs, "where">
  >;
  update_accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Accounts_By_PkArgs, "pk_columns">
  >;
  update_accounts_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["accounts_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Accounts_ManyArgs, "updates">
  >;
  update_contacts?: Resolver<
    Maybe<ResolversTypes["contacts_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_ContactsArgs, "where">
  >;
  update_contacts_by_pk?: Resolver<
    Maybe<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contacts_By_PkArgs, "pk_columns">
  >;
  update_contacts_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["contacts_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Contacts_ManyArgs, "updates">
  >;
  update_org_users?: Resolver<
    Maybe<ResolversTypes["org_users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_UsersArgs, "where">
  >;
  update_org_users_by_pk?: Resolver<
    Maybe<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_Users_By_PkArgs, "pk_columns">
  >;
  update_org_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["org_users_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_Users_ManyArgs, "updates">
  >;
  update_orgs?: Resolver<
    Maybe<ResolversTypes["orgs_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_OrgsArgs, "where">
  >;
  update_orgs_by_pk?: Resolver<
    Maybe<ResolversTypes["orgs"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Orgs_By_PkArgs, "pk_columns">
  >;
  update_orgs_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["orgs_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Orgs_ManyArgs, "updates">
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, "where">
  >;
  update_users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_By_PkArgs, "pk_columns">
  >;
  update_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["users_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Users_ManyArgs, "updates">
  >;
};

export type Org_UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users"] = ResolversParentTypes["org_users"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes["orgs"]>, ParentType, ContextType>;
  org_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users_aggregate"] = ResolversParentTypes["org_users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["org_users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["org_users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users_aggregate_fields"] = ResolversParentTypes["org_users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Org_Users_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["org_users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["org_users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users_max_fields"] = ResolversParentTypes["org_users_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users_min_fields"] = ResolversParentTypes["org_users_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_users_mutation_response"] = ResolversParentTypes["org_users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["org_users"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs"] = ResolversParentTypes["orgs"]
> = {
  contacts?: Resolver<
    Array<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    Partial<OrgsContactsArgs>
  >;
  contacts_aggregate?: Resolver<
    ResolversTypes["contacts_aggregate"],
    ParentType,
    ContextType,
    Partial<OrgsContacts_AggregateArgs>
  >;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<OrgsMetadataArgs>
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  users?: Resolver<
    Array<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    Partial<OrgsUsersArgs>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["org_users_aggregate"],
    ParentType,
    ContextType,
    Partial<OrgsUsers_AggregateArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_aggregate"] = ResolversParentTypes["orgs_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["orgs_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["orgs"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_aggregate_fields"] = ResolversParentTypes["orgs_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Orgs_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["orgs_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["orgs_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_max_fields"] = ResolversParentTypes["orgs_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_min_fields"] = ResolversParentTypes["orgs_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_mutation_response"] = ResolversParentTypes["orgs_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["orgs"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  accounts?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    Partial<Query_RootAccountsArgs>
  >;
  accounts_aggregate?: Resolver<
    ResolversTypes["accounts_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootAccounts_AggregateArgs>
  >;
  accounts_by_pk?: Resolver<
    Maybe<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootAccounts_By_PkArgs, "id">
  >;
  contacts?: Resolver<
    Array<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    Partial<Query_RootContactsArgs>
  >;
  contacts_aggregate?: Resolver<
    ResolversTypes["contacts_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootContacts_AggregateArgs>
  >;
  contacts_by_pk?: Resolver<
    Maybe<ResolversTypes["contacts"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootContacts_By_PkArgs, "id">
  >;
  org_users?: Resolver<
    Array<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    Partial<Query_RootOrg_UsersArgs>
  >;
  org_users_aggregate?: Resolver<
    ResolversTypes["org_users_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootOrg_Users_AggregateArgs>
  >;
  org_users_by_pk?: Resolver<
    Maybe<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootOrg_Users_By_PkArgs, "id">
  >;
  orgs?: Resolver<
    Array<ResolversTypes["orgs"]>,
    ParentType,
    ContextType,
    Partial<Query_RootOrgsArgs>
  >;
  orgs_aggregate?: Resolver<
    ResolversTypes["orgs_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootOrgs_AggregateArgs>
  >;
  orgs_by_pk?: Resolver<
    Maybe<ResolversTypes["orgs"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootOrgs_By_PkArgs, "id">
  >;
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    Partial<Query_RootUsersArgs>
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootUsers_AggregateArgs>
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, "id">
  >;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  accounts?: SubscriptionResolver<
    Array<ResolversTypes["accounts"]>,
    "accounts",
    ParentType,
    ContextType,
    Partial<Subscription_RootAccountsArgs>
  >;
  accounts_aggregate?: SubscriptionResolver<
    ResolversTypes["accounts_aggregate"],
    "accounts_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootAccounts_AggregateArgs>
  >;
  accounts_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["accounts"]>,
    "accounts_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_By_PkArgs, "id">
  >;
  accounts_stream?: SubscriptionResolver<
    Array<ResolversTypes["accounts"]>,
    "accounts_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootAccounts_StreamArgs, "batch_size" | "cursor">
  >;
  contacts?: SubscriptionResolver<
    Array<ResolversTypes["contacts"]>,
    "contacts",
    ParentType,
    ContextType,
    Partial<Subscription_RootContactsArgs>
  >;
  contacts_aggregate?: SubscriptionResolver<
    ResolversTypes["contacts_aggregate"],
    "contacts_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootContacts_AggregateArgs>
  >;
  contacts_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["contacts"]>,
    "contacts_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContacts_By_PkArgs, "id">
  >;
  contacts_stream?: SubscriptionResolver<
    Array<ResolversTypes["contacts"]>,
    "contacts_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootContacts_StreamArgs, "batch_size" | "cursor">
  >;
  org_users?: SubscriptionResolver<
    Array<ResolversTypes["org_users"]>,
    "org_users",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrg_UsersArgs>
  >;
  org_users_aggregate?: SubscriptionResolver<
    ResolversTypes["org_users_aggregate"],
    "org_users_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrg_Users_AggregateArgs>
  >;
  org_users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["org_users"]>,
    "org_users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootOrg_Users_By_PkArgs, "id">
  >;
  org_users_stream?: SubscriptionResolver<
    Array<ResolversTypes["org_users"]>,
    "org_users_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootOrg_Users_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  orgs?: SubscriptionResolver<
    Array<ResolversTypes["orgs"]>,
    "orgs",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrgsArgs>
  >;
  orgs_aggregate?: SubscriptionResolver<
    ResolversTypes["orgs_aggregate"],
    "orgs_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrgs_AggregateArgs>
  >;
  orgs_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["orgs"]>,
    "orgs_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootOrgs_By_PkArgs, "id">
  >;
  orgs_stream?: SubscriptionResolver<
    Array<ResolversTypes["orgs"]>,
    "orgs_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootOrgs_StreamArgs, "batch_size" | "cursor">
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users",
    ParentType,
    ContextType,
    Partial<Subscription_RootUsersArgs>
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes["users_aggregate"],
    "users_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootUsers_AggregateArgs>
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["users"]>,
    "users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, "id">
  >;
  users_stream?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_StreamArgs, "batch_size" | "cursor">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users"] = ResolversParentTypes["users"]
> = {
  accounts?: Resolver<
    Array<ResolversTypes["accounts"]>,
    ParentType,
    ContextType,
    Partial<UsersAccountsArgs>
  >;
  accounts_aggregate?: Resolver<
    ResolversTypes["accounts_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersAccounts_AggregateArgs>
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  is_admin?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<UsersMetadataArgs>
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  orgs?: Resolver<
    Array<ResolversTypes["org_users"]>,
    ParentType,
    ContextType,
    Partial<UsersOrgsArgs>
  >;
  orgs_aggregate?: Resolver<
    ResolversTypes["org_users_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersOrgs_AggregateArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate"] = ResolversParentTypes["users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate_fields"] = ResolversParentTypes["users_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Users_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["users_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_max_fields"] = ResolversParentTypes["users_max_fields"]
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_min_fields"] = ResolversParentTypes["users_min_fields"]
> = {
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_mutation_response"] = ResolversParentTypes["users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["uuid"], any> {
  name: "uuid";
}

export type Resolvers<ContextType = any> = {
  accounts?: AccountsResolvers<ContextType>;
  accounts_aggregate?: Accounts_AggregateResolvers<ContextType>;
  accounts_aggregate_fields?: Accounts_Aggregate_FieldsResolvers<ContextType>;
  accounts_avg_fields?: Accounts_Avg_FieldsResolvers<ContextType>;
  accounts_max_fields?: Accounts_Max_FieldsResolvers<ContextType>;
  accounts_min_fields?: Accounts_Min_FieldsResolvers<ContextType>;
  accounts_mutation_response?: Accounts_Mutation_ResponseResolvers<ContextType>;
  accounts_stddev_fields?: Accounts_Stddev_FieldsResolvers<ContextType>;
  accounts_stddev_pop_fields?: Accounts_Stddev_Pop_FieldsResolvers<ContextType>;
  accounts_stddev_samp_fields?: Accounts_Stddev_Samp_FieldsResolvers<ContextType>;
  accounts_sum_fields?: Accounts_Sum_FieldsResolvers<ContextType>;
  accounts_var_pop_fields?: Accounts_Var_Pop_FieldsResolvers<ContextType>;
  accounts_var_samp_fields?: Accounts_Var_Samp_FieldsResolvers<ContextType>;
  accounts_variance_fields?: Accounts_Variance_FieldsResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  contacts?: ContactsResolvers<ContextType>;
  contacts_aggregate?: Contacts_AggregateResolvers<ContextType>;
  contacts_aggregate_fields?: Contacts_Aggregate_FieldsResolvers<ContextType>;
  contacts_max_fields?: Contacts_Max_FieldsResolvers<ContextType>;
  contacts_min_fields?: Contacts_Min_FieldsResolvers<ContextType>;
  contacts_mutation_response?: Contacts_Mutation_ResponseResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  org_users?: Org_UsersResolvers<ContextType>;
  org_users_aggregate?: Org_Users_AggregateResolvers<ContextType>;
  org_users_aggregate_fields?: Org_Users_Aggregate_FieldsResolvers<ContextType>;
  org_users_max_fields?: Org_Users_Max_FieldsResolvers<ContextType>;
  org_users_min_fields?: Org_Users_Min_FieldsResolvers<ContextType>;
  org_users_mutation_response?: Org_Users_Mutation_ResponseResolvers<ContextType>;
  orgs?: OrgsResolvers<ContextType>;
  orgs_aggregate?: Orgs_AggregateResolvers<ContextType>;
  orgs_aggregate_fields?: Orgs_Aggregate_FieldsResolvers<ContextType>;
  orgs_max_fields?: Orgs_Max_FieldsResolvers<ContextType>;
  orgs_min_fields?: Orgs_Min_FieldsResolvers<ContextType>;
  orgs_mutation_response?: Orgs_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
