import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as React from "react";
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

/** columns and relationships of "blocks" */
export type Blocks = {
  __typename?: "blocks";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  document?: Maybe<Documents>;
  document_id: Scalars["uuid"];
  generated_at?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  guidance: Array<Guidance>;
  /** An aggregate relationship */
  guidance_aggregate: Guidance_Aggregate;
  id: Scalars["uuid"];
  index?: Maybe<Scalars["Int"]>;
  is_locked: Scalars["Boolean"];
  is_manual_overwrite: Scalars["Boolean"];
  is_visible: Scalars["Boolean"];
  metadata?: Maybe<Scalars["jsonb"]>;
  output?: Maybe<Scalars["String"]>;
  prompt?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "blocks" */
export type BlocksGuidanceArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksGuidance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

/** columns and relationships of "blocks" */
export type BlocksMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "blocks" */
export type Blocks_Aggregate = {
  __typename?: "blocks_aggregate";
  aggregate?: Maybe<Blocks_Aggregate_Fields>;
  nodes: Array<Blocks>;
};

export type Blocks_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Blocks_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Blocks_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Blocks_Aggregate_Bool_Exp_Count>;
};

export type Blocks_Aggregate_Bool_Exp_Bool_And = {
  arguments: Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Blocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Blocks_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Blocks_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Blocks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Blocks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_Fields = {
  __typename?: "blocks_aggregate_fields";
  avg?: Maybe<Blocks_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Blocks_Max_Fields>;
  min?: Maybe<Blocks_Min_Fields>;
  stddev?: Maybe<Blocks_Stddev_Fields>;
  stddev_pop?: Maybe<Blocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blocks_Stddev_Samp_Fields>;
  sum?: Maybe<Blocks_Sum_Fields>;
  var_pop?: Maybe<Blocks_Var_Pop_Fields>;
  var_samp?: Maybe<Blocks_Var_Samp_Fields>;
  variance?: Maybe<Blocks_Variance_Fields>;
};

/** aggregate fields of "blocks" */
export type Blocks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blocks_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "blocks" */
export type Blocks_Aggregate_Order_By = {
  avg?: InputMaybe<Blocks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Blocks_Max_Order_By>;
  min?: InputMaybe<Blocks_Min_Order_By>;
  stddev?: InputMaybe<Blocks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Blocks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Blocks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Blocks_Sum_Order_By>;
  var_pop?: InputMaybe<Blocks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Blocks_Var_Samp_Order_By>;
  variance?: InputMaybe<Blocks_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Blocks_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "blocks" */
export type Blocks_Arr_Rel_Insert_Input = {
  data: Array<Blocks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Blocks_Avg_Fields = {
  __typename?: "blocks_avg_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "blocks" */
export type Blocks_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export type Blocks_Bool_Exp = {
  _and?: InputMaybe<Array<Blocks_Bool_Exp>>;
  _not?: InputMaybe<Blocks_Bool_Exp>;
  _or?: InputMaybe<Array<Blocks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  document?: InputMaybe<Documents_Bool_Exp>;
  document_id?: InputMaybe<Uuid_Comparison_Exp>;
  generated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  guidance?: InputMaybe<Guidance_Bool_Exp>;
  guidance_aggregate?: InputMaybe<Guidance_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  is_locked?: InputMaybe<Boolean_Comparison_Exp>;
  is_manual_overwrite?: InputMaybe<Boolean_Comparison_Exp>;
  is_visible?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  output?: InputMaybe<String_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "blocks" */
export enum Blocks_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlocksPkey = "blocks_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Blocks_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Blocks_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Blocks_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]>;
};

/** input type for incrementing numeric columns in table "blocks" */
export type Blocks_Inc_Input = {
  index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "blocks" */
export type Blocks_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  document?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  document_id?: InputMaybe<Scalars["uuid"]>;
  generated_at?: InputMaybe<Scalars["timestamptz"]>;
  guidance?: InputMaybe<Guidance_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]>;
  index?: InputMaybe<Scalars["Int"]>;
  is_locked?: InputMaybe<Scalars["Boolean"]>;
  is_manual_overwrite?: InputMaybe<Scalars["Boolean"]>;
  is_visible?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  output?: InputMaybe<Scalars["String"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Blocks_Max_Fields = {
  __typename?: "blocks_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  document_id?: Maybe<Scalars["uuid"]>;
  generated_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  index?: Maybe<Scalars["Int"]>;
  output?: Maybe<Scalars["String"]>;
  prompt?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "blocks" */
export type Blocks_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  document_id?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Blocks_Min_Fields = {
  __typename?: "blocks_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  document_id?: Maybe<Scalars["uuid"]>;
  generated_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  index?: Maybe<Scalars["Int"]>;
  output?: Maybe<Scalars["String"]>;
  prompt?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "blocks" */
export type Blocks_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  document_id?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "blocks" */
export type Blocks_Mutation_Response = {
  __typename?: "blocks_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Blocks>;
};

/** input type for inserting object relation for remote table "blocks" */
export type Blocks_Obj_Rel_Insert_Input = {
  data: Blocks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** on_conflict condition type for table "blocks" */
export type Blocks_On_Conflict = {
  constraint: Blocks_Constraint;
  update_columns?: Array<Blocks_Update_Column>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** Ordering options when selecting data from "blocks". */
export type Blocks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  document?: InputMaybe<Documents_Order_By>;
  document_id?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  guidance_aggregate?: InputMaybe<Guidance_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  is_locked?: InputMaybe<Order_By>;
  is_manual_overwrite?: InputMaybe<Order_By>;
  is_visible?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blocks */
export type Blocks_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Blocks_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "blocks" */
export enum Blocks_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DocumentId = "document_id",
  /** column name */
  GeneratedAt = "generated_at",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  IsLocked = "is_locked",
  /** column name */
  IsManualOverwrite = "is_manual_overwrite",
  /** column name */
  IsVisible = "is_visible",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Output = "output",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
}

/** select "blocks_aggregate_bool_exp_bool_and_arguments_columns" columns of table "blocks" */
export enum Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsLocked = "is_locked",
  /** column name */
  IsManualOverwrite = "is_manual_overwrite",
  /** column name */
  IsVisible = "is_visible",
}

/** select "blocks_aggregate_bool_exp_bool_or_arguments_columns" columns of table "blocks" */
export enum Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsLocked = "is_locked",
  /** column name */
  IsManualOverwrite = "is_manual_overwrite",
  /** column name */
  IsVisible = "is_visible",
}

/** input type for updating data in table "blocks" */
export type Blocks_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  document_id?: InputMaybe<Scalars["uuid"]>;
  generated_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  index?: InputMaybe<Scalars["Int"]>;
  is_locked?: InputMaybe<Scalars["Boolean"]>;
  is_manual_overwrite?: InputMaybe<Scalars["Boolean"]>;
  is_visible?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  output?: InputMaybe<Scalars["String"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Blocks_Stddev_Fields = {
  __typename?: "blocks_stddev_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "blocks" */
export type Blocks_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Blocks_Stddev_Pop_Fields = {
  __typename?: "blocks_stddev_pop_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "blocks" */
export type Blocks_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Blocks_Stddev_Samp_Fields = {
  __typename?: "blocks_stddev_samp_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "blocks" */
export type Blocks_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "blocks" */
export type Blocks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blocks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blocks_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  document_id?: InputMaybe<Scalars["uuid"]>;
  generated_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  index?: InputMaybe<Scalars["Int"]>;
  is_locked?: InputMaybe<Scalars["Boolean"]>;
  is_manual_overwrite?: InputMaybe<Scalars["Boolean"]>;
  is_visible?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  output?: InputMaybe<Scalars["String"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Blocks_Sum_Fields = {
  __typename?: "blocks_sum_fields";
  index?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "blocks" */
export type Blocks_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** update columns of table "blocks" */
export enum Blocks_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DocumentId = "document_id",
  /** column name */
  GeneratedAt = "generated_at",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  IsLocked = "is_locked",
  /** column name */
  IsManualOverwrite = "is_manual_overwrite",
  /** column name */
  IsVisible = "is_visible",
  /** column name */
  Metadata = "metadata",
  /** column name */
  Output = "output",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Status = "status",
  /** column name */
  Type = "type",
}

export type Blocks_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Blocks_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Blocks_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Blocks_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Blocks_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blocks_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Blocks_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blocks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blocks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Blocks_Var_Pop_Fields = {
  __typename?: "blocks_var_pop_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "blocks" */
export type Blocks_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Blocks_Var_Samp_Fields = {
  __typename?: "blocks_var_samp_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "blocks" */
export type Blocks_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Blocks_Variance_Fields = {
  __typename?: "blocks_variance_fields";
  index?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "blocks" */
export type Blocks_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "documents" */
export type Documents = {
  __typename?: "documents";
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  created_at: Scalars["timestamptz"];
  /** An array relationship */
  guidance: Array<Guidance>;
  /** An aggregate relationship */
  guidance_aggregate: Guidance_Aggregate;
  id: Scalars["uuid"];
  is_public: Scalars["Boolean"];
  metadata?: Maybe<Scalars["jsonb"]>;
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id: Scalars["uuid"];
  prompt: Scalars["String"];
  summary?: Maybe<Scalars["String"]>;
  template: Scalars["jsonb"];
  title?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "documents" */
export type DocumentsBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** columns and relationships of "documents" */
export type DocumentsBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

/** columns and relationships of "documents" */
export type DocumentsGuidanceArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

/** columns and relationships of "documents" */
export type DocumentsGuidance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

/** columns and relationships of "documents" */
export type DocumentsMetadataArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "documents" */
export type DocumentsTemplateArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "documents" */
export type Documents_Aggregate = {
  __typename?: "documents_aggregate";
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

export type Documents_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Documents_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Documents_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Documents_Aggregate_Bool_Exp_Count>;
};

export type Documents_Aggregate_Bool_Exp_Bool_And = {
  arguments: Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Documents_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Documents_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Documents_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Documents_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Documents_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_Fields = {
  __typename?: "documents_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
};

/** aggregate fields of "documents" */
export type Documents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Documents_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "documents" */
export type Documents_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Documents_Max_Order_By>;
  min?: InputMaybe<Documents_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Documents_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "documents" */
export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** Boolean expression to filter rows from the table "documents". All fields are combined with a logical 'AND'. */
export type Documents_Bool_Exp = {
  _and?: InputMaybe<Array<Documents_Bool_Exp>>;
  _not?: InputMaybe<Documents_Bool_Exp>;
  _or?: InputMaybe<Array<Documents_Bool_Exp>>;
  blocks?: InputMaybe<Blocks_Bool_Exp>;
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  guidance?: InputMaybe<Guidance_Bool_Exp>;
  guidance_aggregate?: InputMaybe<Guidance_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_public?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  template?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "documents" */
export enum Documents_Constraint {
  /** unique or primary key constraint on columns "id" */
  DocumentsPkey = "documents_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Documents_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]>>;
  template?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Documents_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]>;
  template?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Documents_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "documents" */
export type Documents_Insert_Input = {
  blocks?: InputMaybe<Blocks_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  guidance?: InputMaybe<Guidance_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_public?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Documents_Max_Fields = {
  __typename?: "documents_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  owner_id?: Maybe<Scalars["uuid"]>;
  prompt?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "documents" */
export type Documents_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Documents_Min_Fields = {
  __typename?: "documents_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  owner_id?: Maybe<Scalars["uuid"]>;
  prompt?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "documents" */
export type Documents_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "documents" */
export type Documents_Mutation_Response = {
  __typename?: "documents_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Documents>;
};

/** input type for inserting object relation for remote table "documents" */
export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** on_conflict condition type for table "documents" */
export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns?: Array<Documents_Update_Column>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** Ordering options when selecting data from "documents". */
export type Documents_Order_By = {
  blocks_aggregate?: InputMaybe<Blocks_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  guidance_aggregate?: InputMaybe<Guidance_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_public?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  template?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: documents */
export type Documents_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Documents_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "documents" */
export enum Documents_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsPublic = "is_public",
  /** column name */
  Metadata = "metadata",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Summary = "summary",
  /** column name */
  Template = "template",
  /** column name */
  Title = "title",
}

/** select "documents_aggregate_bool_exp_bool_and_arguments_columns" columns of table "documents" */
export enum Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPublic = "is_public",
}

/** select "documents_aggregate_bool_exp_bool_or_arguments_columns" columns of table "documents" */
export enum Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPublic = "is_public",
}

/** input type for updating data in table "documents" */
export type Documents_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_public?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  owner_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "documents" */
export type Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Documents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Documents_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_public?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Scalars["jsonb"]>;
  owner_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "documents" */
export enum Documents_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsPublic = "is_public",
  /** column name */
  Metadata = "metadata",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Summary = "summary",
  /** column name */
  Template = "template",
  /** column name */
  Title = "title",
}

export type Documents_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Documents_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Documents_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Documents_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Documents_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Documents_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Documents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Documents_Bool_Exp;
};

/** columns and relationships of "guidance" */
export type Guidance = {
  __typename?: "guidance";
  /** An object relationship */
  block?: Maybe<Blocks>;
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  document?: Maybe<Documents>;
  id: Scalars["uuid"];
  is_enabled: Scalars["Boolean"];
  parent_id: Scalars["uuid"];
  prompt: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "guidance" */
export type Guidance_Aggregate = {
  __typename?: "guidance_aggregate";
  aggregate?: Maybe<Guidance_Aggregate_Fields>;
  nodes: Array<Guidance>;
};

export type Guidance_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Guidance_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Guidance_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Guidance_Aggregate_Bool_Exp_Count>;
};

export type Guidance_Aggregate_Bool_Exp_Bool_And = {
  arguments: Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Guidance_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Guidance_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Guidance_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Guidance_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Guidance_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Guidance_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "guidance" */
export type Guidance_Aggregate_Fields = {
  __typename?: "guidance_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Guidance_Max_Fields>;
  min?: Maybe<Guidance_Min_Fields>;
};

/** aggregate fields of "guidance" */
export type Guidance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Guidance_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "guidance" */
export type Guidance_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Guidance_Max_Order_By>;
  min?: InputMaybe<Guidance_Min_Order_By>;
};

/** input type for inserting array relation for remote table "guidance" */
export type Guidance_Arr_Rel_Insert_Input = {
  data: Array<Guidance_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Guidance_On_Conflict>;
};

/** Boolean expression to filter rows from the table "guidance". All fields are combined with a logical 'AND'. */
export type Guidance_Bool_Exp = {
  _and?: InputMaybe<Array<Guidance_Bool_Exp>>;
  _not?: InputMaybe<Guidance_Bool_Exp>;
  _or?: InputMaybe<Array<Guidance_Bool_Exp>>;
  block?: InputMaybe<Blocks_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  document?: InputMaybe<Documents_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_enabled?: InputMaybe<Boolean_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "guidance" */
export enum Guidance_Constraint {
  /** unique or primary key constraint on columns "id" */
  GuidancePkey = "guidance_pkey",
}

/** input type for inserting data into table "guidance" */
export type Guidance_Insert_Input = {
  block?: InputMaybe<Blocks_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  document?: InputMaybe<Documents_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_enabled?: InputMaybe<Scalars["Boolean"]>;
  parent_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Guidance_Max_Fields = {
  __typename?: "guidance_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  parent_id?: Maybe<Scalars["uuid"]>;
  prompt?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "guidance" */
export type Guidance_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Guidance_Min_Fields = {
  __typename?: "guidance_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  parent_id?: Maybe<Scalars["uuid"]>;
  prompt?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "guidance" */
export type Guidance_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "guidance" */
export type Guidance_Mutation_Response = {
  __typename?: "guidance_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Guidance>;
};

/** on_conflict condition type for table "guidance" */
export type Guidance_On_Conflict = {
  constraint: Guidance_Constraint;
  update_columns?: Array<Guidance_Update_Column>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

/** Ordering options when selecting data from "guidance". */
export type Guidance_Order_By = {
  block?: InputMaybe<Blocks_Order_By>;
  created_at?: InputMaybe<Order_By>;
  document?: InputMaybe<Documents_Order_By>;
  id?: InputMaybe<Order_By>;
  is_enabled?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: guidance */
export type Guidance_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "guidance" */
export enum Guidance_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsEnabled = "is_enabled",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Type = "type",
}

/** select "guidance_aggregate_bool_exp_bool_and_arguments_columns" columns of table "guidance" */
export enum Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsEnabled = "is_enabled",
}

/** select "guidance_aggregate_bool_exp_bool_or_arguments_columns" columns of table "guidance" */
export enum Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsEnabled = "is_enabled",
}

/** input type for updating data in table "guidance" */
export type Guidance_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_enabled?: InputMaybe<Scalars["Boolean"]>;
  parent_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "guidance" */
export type Guidance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Guidance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Guidance_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  is_enabled?: InputMaybe<Scalars["Boolean"]>;
  parent_id?: InputMaybe<Scalars["uuid"]>;
  prompt?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "guidance" */
export enum Guidance_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsEnabled = "is_enabled",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Prompt = "prompt",
  /** column name */
  Type = "type",
}

export type Guidance_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Guidance_Set_Input>;
  /** filter the rows which have to be updated */
  where: Guidance_Bool_Exp;
};

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
  /** delete data from the table: "blocks" */
  delete_blocks?: Maybe<Blocks_Mutation_Response>;
  /** delete single row from the table: "blocks" */
  delete_blocks_by_pk?: Maybe<Blocks>;
  /** delete data from the table: "documents" */
  delete_documents?: Maybe<Documents_Mutation_Response>;
  /** delete single row from the table: "documents" */
  delete_documents_by_pk?: Maybe<Documents>;
  /** delete data from the table: "guidance" */
  delete_guidance?: Maybe<Guidance_Mutation_Response>;
  /** delete single row from the table: "guidance" */
  delete_guidance_by_pk?: Maybe<Guidance>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "blocks" */
  insert_blocks?: Maybe<Blocks_Mutation_Response>;
  /** insert a single row into the table: "blocks" */
  insert_blocks_one?: Maybe<Blocks>;
  /** insert data into the table: "documents" */
  insert_documents?: Maybe<Documents_Mutation_Response>;
  /** insert a single row into the table: "documents" */
  insert_documents_one?: Maybe<Documents>;
  /** insert data into the table: "guidance" */
  insert_guidance?: Maybe<Guidance_Mutation_Response>;
  /** insert a single row into the table: "guidance" */
  insert_guidance_one?: Maybe<Guidance>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "blocks" */
  update_blocks?: Maybe<Blocks_Mutation_Response>;
  /** update single row of the table: "blocks" */
  update_blocks_by_pk?: Maybe<Blocks>;
  /** update multiples rows of table: "blocks" */
  update_blocks_many?: Maybe<Array<Maybe<Blocks_Mutation_Response>>>;
  /** update data of the table: "documents" */
  update_documents?: Maybe<Documents_Mutation_Response>;
  /** update single row of the table: "documents" */
  update_documents_by_pk?: Maybe<Documents>;
  /** update multiples rows of table: "documents" */
  update_documents_many?: Maybe<Array<Maybe<Documents_Mutation_Response>>>;
  /** update data of the table: "guidance" */
  update_guidance?: Maybe<Guidance_Mutation_Response>;
  /** update single row of the table: "guidance" */
  update_guidance_by_pk?: Maybe<Guidance>;
  /** update multiples rows of table: "guidance" */
  update_guidance_many?: Maybe<Array<Maybe<Guidance_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<
    Array<Maybe<Verification_Tokens_Mutation_Response>>
  >;
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
export type Mutation_RootDelete_BlocksArgs = {
  where: Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Blocks_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_GuidanceArgs = {
  where: Guidance_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Guidance_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
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
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars["String"];
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
export type Mutation_RootInsert_BlocksArgs = {
  objects: Array<Blocks_Insert_Input>;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Blocks_OneArgs = {
  object: Blocks_Insert_Input;
  on_conflict?: InputMaybe<Blocks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: InputMaybe<Documents_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GuidanceArgs = {
  objects: Array<Guidance_Insert_Input>;
  on_conflict?: InputMaybe<Guidance_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Guidance_OneArgs = {
  object: Guidance_Insert_Input;
  on_conflict?: InputMaybe<Guidance_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
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
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
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
export type Mutation_RootUpdate_BlocksArgs = {
  _append?: InputMaybe<Blocks_Append_Input>;
  _delete_at_path?: InputMaybe<Blocks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Blocks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Blocks_Delete_Key_Input>;
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _prepend?: InputMaybe<Blocks_Prepend_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  where: Blocks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Blocks_By_PkArgs = {
  _append?: InputMaybe<Blocks_Append_Input>;
  _delete_at_path?: InputMaybe<Blocks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Blocks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Blocks_Delete_Key_Input>;
  _inc?: InputMaybe<Blocks_Inc_Input>;
  _prepend?: InputMaybe<Blocks_Prepend_Input>;
  _set?: InputMaybe<Blocks_Set_Input>;
  pk_columns: Blocks_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Blocks_ManyArgs = {
  updates: Array<Blocks_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DocumentsArgs = {
  _append?: InputMaybe<Documents_Append_Input>;
  _delete_at_path?: InputMaybe<Documents_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Documents_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Documents_Delete_Key_Input>;
  _prepend?: InputMaybe<Documents_Prepend_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _append?: InputMaybe<Documents_Append_Input>;
  _delete_at_path?: InputMaybe<Documents_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Documents_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Documents_Delete_Key_Input>;
  _prepend?: InputMaybe<Documents_Prepend_Input>;
  _set?: InputMaybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Documents_ManyArgs = {
  updates: Array<Documents_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_GuidanceArgs = {
  _set?: InputMaybe<Guidance_Set_Input>;
  where: Guidance_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Guidance_By_PkArgs = {
  _set?: InputMaybe<Guidance_Set_Input>;
  pk_columns: Guidance_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Guidance_ManyArgs = {
  updates: Array<Guidance_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
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

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** An array relationship */
  guidance: Array<Guidance>;
  /** An aggregate relationship */
  guidance_aggregate: Guidance_Aggregate;
  /** fetch data from the table: "guidance" using primary key columns */
  guidance_by_pk?: Maybe<Guidance>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
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

export type Query_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Query_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Query_RootBlocks_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

export type Query_RootDocuments_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGuidanceArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

export type Query_RootGuidance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

export type Query_RootGuidance_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Query_RootSessions_By_PkArgs = {
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

export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: "sessions";
  expires?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  sessionToken: Scalars["String"];
  /** An object relationship */
  user?: Maybe<Users>;
  userId: Scalars["uuid"];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: "sessions_aggregate";
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: "sessions_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = "sessions_pkey",
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  sessionToken?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: "sessions_max_fields";
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  sessionToken?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: "sessions_min_fields";
  expires?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  sessionToken?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: "sessions_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  sessionToken?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  sessionToken?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Id = "id",
  /** column name */
  SessionToken = "sessionToken",
  /** column name */
  UserId = "userId",
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
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
  blocks: Array<Blocks>;
  /** An aggregate relationship */
  blocks_aggregate: Blocks_Aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<Blocks>;
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: Array<Blocks>;
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  /** fetch data from the table: "documents" using primary key columns */
  documents_by_pk?: Maybe<Documents>;
  /** fetch data from the table in a streaming manner: "documents" */
  documents_stream: Array<Documents>;
  /** An array relationship */
  guidance: Array<Guidance>;
  /** An aggregate relationship */
  guidance_aggregate: Guidance_Aggregate;
  /** fetch data from the table: "guidance" using primary key columns */
  guidance_by_pk?: Maybe<Guidance>;
  /** fetch data from the table in a streaming manner: "guidance" */
  guidance_stream: Array<Guidance>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
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

export type Subscription_RootBlocksArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blocks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Blocks_Order_By>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootBlocks_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootBlocks_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Blocks_Stream_Cursor_Input>>;
  where?: InputMaybe<Blocks_Bool_Exp>;
};

export type Subscription_RootDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDocuments_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Documents_Stream_Cursor_Input>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

export type Subscription_RootGuidanceArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

export type Subscription_RootGuidance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guidance_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Guidance_Order_By>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

export type Subscription_RootGuidance_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootGuidance_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Guidance_Stream_Cursor_Input>>;
  where?: InputMaybe<Guidance_Bool_Exp>;
};

export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
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

export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars["String"];
};

export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
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
  /** An array relationship */
  documents: Array<Documents>;
  /** An aggregate relationship */
  documents_aggregate: Documents_Aggregate;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
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
export type UsersDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Documents_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Documents_Order_By>>;
  where?: InputMaybe<Documents_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
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

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  documents?: InputMaybe<Documents_Bool_Exp>;
  documents_aggregate?: InputMaybe<Documents_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  documents?: InputMaybe<Documents_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
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
  documents_aggregate?: InputMaybe<Documents_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"];
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
  Name = "name",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
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
  Name = "name",
}

export type Users_Updates = {
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

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: "verification_tokens";
  expires?: Maybe<Scalars["timestamptz"]>;
  identifier: Scalars["String"];
  token: Scalars["String"];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: "verification_tokens_aggregate";
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: "verification_tokens_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = "verification_tokens_pkey",
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  identifier?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: "verification_tokens_max_fields";
  expires?: Maybe<Scalars["timestamptz"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: "verification_tokens_min_fields";
  expires?: Maybe<Scalars["timestamptz"]>;
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: "verification_tokens_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars["String"];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  identifier?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars["timestamptz"]>;
  identifier?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = "expires",
  /** column name */
  Identifier = "identifier",
  /** column name */
  Token = "token",
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

export type AddBlockMutationVariables = Exact<{
  prompt: Scalars["String"];
  documentID: Scalars["uuid"];
  index: Scalars["Int"];
  type?: InputMaybe<Scalars["String"]>;
  is_manual_overwrite?: InputMaybe<Scalars["Boolean"]>;
  output?: InputMaybe<Scalars["String"]>;
}>;

export type AddBlockMutation = {
  __typename?: "mutation_root";
  insert_blocks?:
    | {
        __typename?: "blocks_mutation_response";
        returning: Array<{ __typename?: "blocks"; id: any }>;
      }
    | undefined;
};

export type AddDocumentMutationVariables = Exact<{
  ownerID: Scalars["uuid"];
  prompt?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["jsonb"]>;
}>;

export type AddDocumentMutation = {
  __typename?: "mutation_root";
  insert_documents_one?:
    | {
        __typename?: "documents";
        id: any;
        blocks: Array<{
          __typename?: "blocks";
          id: any;
          prompt?: string | undefined;
        }>;
      }
    | undefined;
};

export type AddGuidanceMutationVariables = Exact<{
  prompt: Scalars["String"];
  parentID: Scalars["uuid"];
}>;

export type AddGuidanceMutation = {
  __typename?: "mutation_root";
  insert_guidance_one?: { __typename?: "guidance"; id: any } | undefined;
};

export type AddGuidanceDisabledMutationVariables = Exact<{
  guidance: Array<Guidance_Insert_Input> | Guidance_Insert_Input;
}>;

export type AddGuidanceDisabledMutation = {
  __typename?: "mutation_root";
  insert_guidance?:
    | { __typename?: "guidance_mutation_response"; affected_rows: number }
    | undefined;
};

export type BlockPostRegenerateMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  updatedOutput: Scalars["String"];
  generationTS: Scalars["timestamptz"];
  status: Scalars["String"];
}>;

export type BlockPostRegenerateMutation = {
  __typename?: "mutation_root";
  update_blocks?:
    | {
        __typename?: "blocks_mutation_response";
        affected_rows: number;
        returning: Array<{ __typename?: "blocks"; id: any }>;
      }
    | undefined;
};

export type BlockPreRegenerateMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  generatedAt: Scalars["timestamptz"];
}>;

export type BlockPreRegenerateMutation = {
  __typename?: "mutation_root";
  update_blocks_by_pk?:
    | {
        __typename?: "blocks";
        id: any;
        status?: string | undefined;
        prompt?: string | undefined;
        type?: string | undefined;
        guidance: Array<{
          __typename?: "guidance";
          id: any;
          prompt: string;
          type?: string | undefined;
        }>;
        document?:
          | {
              __typename?: "documents";
              id: any;
              prompt: string;
              title?: string | undefined;
              template: any;
              guidance: Array<{
                __typename?: "guidance";
                id: any;
                prompt: string;
                type?: string | undefined;
              }>;
              blocks: Array<{
                __typename?: "blocks";
                id: any;
                prompt?: string | undefined;
                output?: string | undefined;
                created_at: string;
                type?: string | undefined;
              }>;
            }
          | undefined;
      }
    | undefined;
};

export type BlockSetStatusMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  status: Scalars["String"];
}>;

export type BlockSetStatusMutation = {
  __typename?: "mutation_root";
  update_blocks_by_pk?: { __typename?: "blocks"; id: any } | undefined;
};

export type DeleteBlockMutationVariables = Exact<{
  blockID: Scalars["uuid"];
}>;

export type DeleteBlockMutation = {
  __typename?: "mutation_root";
  delete_blocks_by_pk?: { __typename?: "blocks"; id: any } | undefined;
};

export type DeleteDocumentMutationVariables = Exact<{
  documentID: Scalars["uuid"];
}>;

export type DeleteDocumentMutation = {
  __typename?: "mutation_root";
  delete_documents_by_pk?: { __typename?: "documents"; id: any } | undefined;
};

export type DeleteGuidanceMutationVariables = Exact<{
  guidanceID: Scalars["uuid"];
}>;

export type DeleteGuidanceMutation = {
  __typename?: "mutation_root";
  delete_guidance_by_pk?: { __typename?: "guidance"; id: any } | undefined;
};

export type GetBlockSubscriptionVariables = Exact<{
  blockID: Scalars["uuid"];
}>;

export type GetBlockSubscription = {
  __typename?: "subscription_root";
  blocks_by_pk?:
    | {
        __typename?: "blocks";
        id: any;
        prompt?: string | undefined;
        created_at: string;
        output?: string | undefined;
        is_manual_overwrite: boolean;
        status?: string | undefined;
        type?: string | undefined;
        isLocked: boolean;
        document?: { __typename?: "documents"; id: any } | undefined;
        guidance: Array<{
          __typename?: "guidance";
          id: any;
          prompt: string;
          is_enabled: boolean;
          type?: string | undefined;
          created_at: string;
        }>;
      }
    | undefined;
};

export type GetBlockPromptQueryVariables = Exact<{
  blockID: Scalars["uuid"];
}>;

export type GetBlockPromptQuery = {
  __typename?: "query_root";
  blocks_by_pk?:
    | {
        __typename?: "blocks";
        id: any;
        prompt?: string | undefined;
        document?:
          | { __typename?: "documents"; id: any; prompt: string }
          | undefined;
      }
    | undefined;
};

export type GetDocumentSingleQueryVariables = Exact<{
  documentID: Scalars["uuid"];
}>;

export type GetDocumentSingleQuery = {
  __typename?: "query_root";
  documents_by_pk?:
    | {
        __typename?: "documents";
        id: any;
        prompt: string;
        title?: string | undefined;
        is_public: boolean;
        summary?: string | undefined;
        template: any;
        guidance: Array<{
          __typename?: "guidance";
          id: any;
          is_enabled: boolean;
          prompt: string;
          type?: string | undefined;
        }>;
        blocks: Array<{
          __typename?: "blocks";
          id: any;
          prompt?: string | undefined;
          created_at: string;
          output?: string | undefined;
          metadata?: any | undefined;
          status?: string | undefined;
          index?: number | undefined;
          type?: string | undefined;
          guidance_aggregate: {
            __typename?: "guidance_aggregate";
            aggregate?:
              | { __typename?: "guidance_aggregate_fields"; count: number }
              | undefined;
          };
        }>;
      }
    | undefined;
};

export type GetDocumentSubscriptionVariables = Exact<{
  documentID: Scalars["uuid"];
}>;

export type GetDocumentSubscription = {
  __typename?: "subscription_root";
  document?:
    | {
        __typename?: "documents";
        id: any;
        prompt: string;
        title?: string | undefined;
        is_public: boolean;
        template: any;
        metadata?: any | undefined;
        summary?: string | undefined;
        guidance: Array<{
          __typename?: "guidance";
          id: any;
          is_enabled: boolean;
          prompt: string;
          type?: string | undefined;
        }>;
        blocks: Array<{
          __typename?: "blocks";
          id: any;
          prompt?: string | undefined;
          created_at: string;
          output?: string | undefined;
          metadata?: any | undefined;
          status?: string | undefined;
          index?: number | undefined;
          type?: string | undefined;
          is_manual_overwrite: boolean;
          guidance_aggregate: {
            __typename?: "guidance_aggregate";
            aggregate?:
              | { __typename?: "guidance_aggregate_fields"; count: number }
              | undefined;
          };
        }>;
      }
    | undefined;
};

export type GetDocumentVisibilityQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetDocumentVisibilityQuery = {
  __typename?: "query_root";
  documents_by_pk?:
    | { __typename?: "documents"; is_public: boolean }
    | undefined;
};

export type GetDocumentsQueryVariables = Exact<{
  ownerID: Scalars["uuid"];
}>;

export type GetDocumentsQuery = {
  __typename?: "query_root";
  users_by_pk?:
    | {
        __typename?: "users";
        id: any;
        name?: string | undefined;
        email?: string | undefined;
        documents: Array<{
          __typename?: "documents";
          id: any;
          prompt: string;
          created_at: string;
          is_public: boolean;
          title?: string | undefined;
          summary?: string | undefined;
          guidance: Array<{
            __typename?: "guidance";
            id: any;
            is_enabled: boolean;
            prompt: string;
          }>;
          blocks_aggregate: {
            __typename?: "blocks_aggregate";
            aggregate?:
              | { __typename?: "blocks_aggregate_fields"; count: number }
              | undefined;
          };
        }>;
      }
    | undefined;
};

export type ToggleEnabledMutationVariables = Exact<{
  guidanceID: Scalars["uuid"];
  state?: InputMaybe<Scalars["Boolean"]>;
}>;

export type ToggleEnabledMutation = {
  __typename?: "mutation_root";
  update_guidance_by_pk?: { __typename?: "guidance"; id: any } | undefined;
};

export type ToggleOverwriteMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  isOverwrite?: InputMaybe<Scalars["Boolean"]>;
}>;

export type ToggleOverwriteMutation = {
  __typename?: "mutation_root";
  update_blocks_by_pk?: { __typename?: "blocks"; id: any } | undefined;
};

export type UpdateBlockMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  updatedPrompt: Scalars["String"];
}>;

export type UpdateBlockMutation = {
  __typename?: "mutation_root";
  update_blocks?:
    | { __typename?: "blocks_mutation_response"; affected_rows: number }
    | undefined;
};

export type UpdateBlockIndexMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  index: Scalars["Int"];
}>;

export type UpdateBlockIndexMutation = {
  __typename?: "mutation_root";
  update_blocks?:
    | { __typename?: "blocks_mutation_response"; affected_rows: number }
    | undefined;
};

export type UpdateBlockIndexManyMutationVariables = Exact<{
  updates: Array<Blocks_Updates> | Blocks_Updates;
}>;

export type UpdateBlockIndexManyMutation = {
  __typename?: "mutation_root";
  update_blocks_many?:
    | Array<
        | { __typename?: "blocks_mutation_response"; affected_rows: number }
        | undefined
      >
    | undefined;
};

export type UpdateBlockLengthMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  newLength: Scalars["String"];
}>;

export type UpdateBlockLengthMutation = {
  __typename?: "mutation_root";
  delete_guidance?:
    | { __typename?: "guidance_mutation_response"; affected_rows: number }
    | undefined;
  insert_guidance?:
    | { __typename?: "guidance_mutation_response"; affected_rows: number }
    | undefined;
};

export type UpdateBlockOutputMutationVariables = Exact<{
  blockID: Scalars["uuid"];
  updatedOutput: Scalars["String"];
}>;

export type UpdateBlockOutputMutation = {
  __typename?: "mutation_root";
  update_blocks?:
    | { __typename?: "blocks_mutation_response"; affected_rows: number }
    | undefined;
};

export type UpdateDocumentMutationVariables = Exact<{
  documentID: Scalars["uuid"];
  prompt: Scalars["String"];
  title: Scalars["String"];
}>;

export type UpdateDocumentMutation = {
  __typename?: "mutation_root";
  update_documents_by_pk?:
    | {
        __typename?: "documents";
        id: any;
        prompt: string;
        title?: string | undefined;
      }
    | undefined;
};

export type UpdateDocumentSummaryMutationVariables = Exact<{
  documentID: Scalars["uuid"];
  summary: Scalars["String"];
}>;

export type UpdateDocumentSummaryMutation = {
  __typename?: "mutation_root";
  update_documents_by_pk?:
    | {
        __typename?: "documents";
        id: any;
        prompt: string;
        title?: string | undefined;
        summary?: string | undefined;
      }
    | undefined;
};

export type UpdateDocumentVisibilityMutationVariables = Exact<{
  documentID: Scalars["uuid"];
  visible: Scalars["Boolean"];
}>;

export type UpdateDocumentVisibilityMutation = {
  __typename?: "mutation_root";
  update_documents_by_pk?: { __typename?: "documents"; id: any } | undefined;
};

export type UpdateGuidanceMutationVariables = Exact<{
  guidanceID: Scalars["uuid"];
  prompt: Scalars["String"];
}>;

export type UpdateGuidanceMutation = {
  __typename?: "mutation_root";
  update_guidance_by_pk?:
    | { __typename?: "guidance"; id: any; prompt: string }
    | undefined;
};

export type UpdateSuggestionsMutationVariables = Exact<{
  documentID: Scalars["uuid"];
  suggestions?: InputMaybe<Scalars["jsonb"]>;
}>;

export type UpdateSuggestionsMutation = {
  __typename?: "mutation_root";
  update_documents_by_pk?: { __typename?: "documents"; id: any } | undefined;
};

export const AddBlockDocument = gql`
  mutation AddBlock(
    $prompt: String!
    $documentID: uuid!
    $index: Int!
    $type: String
    $is_manual_overwrite: Boolean
    $output: String
  ) {
    insert_blocks(
      objects: {
        prompt: $prompt
        document_id: $documentID
        index: $index
        type: $type
        is_manual_overwrite: $is_manual_overwrite
        output: $output
      }
    ) {
      returning {
        id
      }
    }
  }
`;
export type AddBlockMutationFn = Apollo.MutationFunction<
  AddBlockMutation,
  AddBlockMutationVariables
>;
export type AddBlockComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddBlockMutation,
    AddBlockMutationVariables
  >,
  "mutation"
>;

export const AddBlockComponent = (props: AddBlockComponentProps) => (
  <ApolloReactComponents.Mutation<AddBlockMutation, AddBlockMutationVariables>
    mutation={AddBlockDocument}
    {...props}
  />
);

/**
 * __useAddBlockMutation__
 *
 * To run a mutation, you first call `useAddBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlockMutation, { data, loading, error }] = useAddBlockMutation({
 *   variables: {
 *      prompt: // value for 'prompt'
 *      documentID: // value for 'documentID'
 *      index: // value for 'index'
 *      type: // value for 'type'
 *      is_manual_overwrite: // value for 'is_manual_overwrite'
 *      output: // value for 'output'
 *   },
 * });
 */
export function useAddBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddBlockMutation,
    AddBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddBlockMutation, AddBlockMutationVariables>(
    AddBlockDocument,
    options
  );
}
export type AddBlockMutationHookResult = ReturnType<typeof useAddBlockMutation>;
export type AddBlockMutationResult = Apollo.MutationResult<AddBlockMutation>;
export type AddBlockMutationOptions = Apollo.BaseMutationOptions<
  AddBlockMutation,
  AddBlockMutationVariables
>;
export const AddDocumentDocument = gql`
  mutation AddDocument(
    $ownerID: uuid!
    $prompt: String
    $title: String
    $template: jsonb
  ) {
    insert_documents_one(
      object: {
        prompt: $prompt
        owner_id: $ownerID
        title: $title
        template: $template
      }
    ) {
      id
      blocks {
        id
        prompt
      }
    }
  }
`;
export type AddDocumentMutationFn = Apollo.MutationFunction<
  AddDocumentMutation,
  AddDocumentMutationVariables
>;
export type AddDocumentComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddDocumentMutation,
    AddDocumentMutationVariables
  >,
  "mutation"
>;

export const AddDocumentComponent = (props: AddDocumentComponentProps) => (
  <ApolloReactComponents.Mutation<
    AddDocumentMutation,
    AddDocumentMutationVariables
  >
    mutation={AddDocumentDocument}
    {...props}
  />
);

/**
 * __useAddDocumentMutation__
 *
 * To run a mutation, you first call `useAddDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocumentMutation, { data, loading, error }] = useAddDocumentMutation({
 *   variables: {
 *      ownerID: // value for 'ownerID'
 *      prompt: // value for 'prompt'
 *      title: // value for 'title'
 *      template: // value for 'template'
 *   },
 * });
 */
export function useAddDocumentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddDocumentMutation,
    AddDocumentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddDocumentMutation, AddDocumentMutationVariables>(
    AddDocumentDocument,
    options
  );
}
export type AddDocumentMutationHookResult = ReturnType<
  typeof useAddDocumentMutation
>;
export type AddDocumentMutationResult =
  Apollo.MutationResult<AddDocumentMutation>;
export type AddDocumentMutationOptions = Apollo.BaseMutationOptions<
  AddDocumentMutation,
  AddDocumentMutationVariables
>;
export const AddGuidanceDocument = gql`
  mutation AddGuidance($prompt: String!, $parentID: uuid!) {
    insert_guidance_one(object: { prompt: $prompt, parent_id: $parentID }) {
      id
    }
  }
`;
export type AddGuidanceMutationFn = Apollo.MutationFunction<
  AddGuidanceMutation,
  AddGuidanceMutationVariables
>;
export type AddGuidanceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddGuidanceMutation,
    AddGuidanceMutationVariables
  >,
  "mutation"
>;

export const AddGuidanceComponent = (props: AddGuidanceComponentProps) => (
  <ApolloReactComponents.Mutation<
    AddGuidanceMutation,
    AddGuidanceMutationVariables
  >
    mutation={AddGuidanceDocument}
    {...props}
  />
);

/**
 * __useAddGuidanceMutation__
 *
 * To run a mutation, you first call `useAddGuidanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGuidanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGuidanceMutation, { data, loading, error }] = useAddGuidanceMutation({
 *   variables: {
 *      prompt: // value for 'prompt'
 *      parentID: // value for 'parentID'
 *   },
 * });
 */
export function useAddGuidanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddGuidanceMutation,
    AddGuidanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddGuidanceMutation, AddGuidanceMutationVariables>(
    AddGuidanceDocument,
    options
  );
}
export type AddGuidanceMutationHookResult = ReturnType<
  typeof useAddGuidanceMutation
>;
export type AddGuidanceMutationResult =
  Apollo.MutationResult<AddGuidanceMutation>;
export type AddGuidanceMutationOptions = Apollo.BaseMutationOptions<
  AddGuidanceMutation,
  AddGuidanceMutationVariables
>;
export const AddGuidanceDisabledDocument = gql`
  mutation AddGuidanceDisabled($guidance: [guidance_insert_input!]!) {
    insert_guidance(objects: $guidance) {
      affected_rows
    }
  }
`;
export type AddGuidanceDisabledMutationFn = Apollo.MutationFunction<
  AddGuidanceDisabledMutation,
  AddGuidanceDisabledMutationVariables
>;
export type AddGuidanceDisabledComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddGuidanceDisabledMutation,
    AddGuidanceDisabledMutationVariables
  >,
  "mutation"
>;

export const AddGuidanceDisabledComponent = (
  props: AddGuidanceDisabledComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AddGuidanceDisabledMutation,
    AddGuidanceDisabledMutationVariables
  >
    mutation={AddGuidanceDisabledDocument}
    {...props}
  />
);

/**
 * __useAddGuidanceDisabledMutation__
 *
 * To run a mutation, you first call `useAddGuidanceDisabledMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGuidanceDisabledMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGuidanceDisabledMutation, { data, loading, error }] = useAddGuidanceDisabledMutation({
 *   variables: {
 *      guidance: // value for 'guidance'
 *   },
 * });
 */
export function useAddGuidanceDisabledMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddGuidanceDisabledMutation,
    AddGuidanceDisabledMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddGuidanceDisabledMutation,
    AddGuidanceDisabledMutationVariables
  >(AddGuidanceDisabledDocument, options);
}
export type AddGuidanceDisabledMutationHookResult = ReturnType<
  typeof useAddGuidanceDisabledMutation
>;
export type AddGuidanceDisabledMutationResult =
  Apollo.MutationResult<AddGuidanceDisabledMutation>;
export type AddGuidanceDisabledMutationOptions = Apollo.BaseMutationOptions<
  AddGuidanceDisabledMutation,
  AddGuidanceDisabledMutationVariables
>;
export const BlockPostRegenerateDocument = gql`
  mutation BlockPostRegenerate(
    $blockID: uuid!
    $updatedOutput: String!
    $generationTS: timestamptz!
    $status: String!
  ) {
    update_blocks(
      where: {
        id: { _eq: $blockID }
        generated_at: { _eq: $generationTS }
        status: { _eq: "GENERATING" }
      }
      _set: {
        status: $status
        output: $updatedOutput
        generated_at: $generationTS
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
export type BlockPostRegenerateMutationFn = Apollo.MutationFunction<
  BlockPostRegenerateMutation,
  BlockPostRegenerateMutationVariables
>;
export type BlockPostRegenerateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    BlockPostRegenerateMutation,
    BlockPostRegenerateMutationVariables
  >,
  "mutation"
>;

export const BlockPostRegenerateComponent = (
  props: BlockPostRegenerateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    BlockPostRegenerateMutation,
    BlockPostRegenerateMutationVariables
  >
    mutation={BlockPostRegenerateDocument}
    {...props}
  />
);

/**
 * __useBlockPostRegenerateMutation__
 *
 * To run a mutation, you first call `useBlockPostRegenerateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockPostRegenerateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockPostRegenerateMutation, { data, loading, error }] = useBlockPostRegenerateMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      updatedOutput: // value for 'updatedOutput'
 *      generationTS: // value for 'generationTS'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useBlockPostRegenerateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BlockPostRegenerateMutation,
    BlockPostRegenerateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BlockPostRegenerateMutation,
    BlockPostRegenerateMutationVariables
  >(BlockPostRegenerateDocument, options);
}
export type BlockPostRegenerateMutationHookResult = ReturnType<
  typeof useBlockPostRegenerateMutation
>;
export type BlockPostRegenerateMutationResult =
  Apollo.MutationResult<BlockPostRegenerateMutation>;
export type BlockPostRegenerateMutationOptions = Apollo.BaseMutationOptions<
  BlockPostRegenerateMutation,
  BlockPostRegenerateMutationVariables
>;
export const BlockPreRegenerateDocument = gql`
  mutation BlockPreRegenerate($blockID: uuid!, $generatedAt: timestamptz!) {
    update_blocks_by_pk(
      pk_columns: { id: $blockID }
      _set: { status: "GENERATING", generated_at: $generatedAt, output: null }
    ) {
      id
      status
      prompt
      type
      guidance(where: { is_enabled: { _eq: true } }) {
        id
        prompt
        type
      }
      document {
        id
        prompt
        title
        template
        guidance(where: { is_enabled: { _eq: true } }) {
          id
          prompt
          type
        }
        blocks {
          id
          prompt
          output
          created_at
          type
        }
      }
    }
  }
`;
export type BlockPreRegenerateMutationFn = Apollo.MutationFunction<
  BlockPreRegenerateMutation,
  BlockPreRegenerateMutationVariables
>;
export type BlockPreRegenerateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    BlockPreRegenerateMutation,
    BlockPreRegenerateMutationVariables
  >,
  "mutation"
>;

export const BlockPreRegenerateComponent = (
  props: BlockPreRegenerateComponentProps
) => (
  <ApolloReactComponents.Mutation<
    BlockPreRegenerateMutation,
    BlockPreRegenerateMutationVariables
  >
    mutation={BlockPreRegenerateDocument}
    {...props}
  />
);

/**
 * __useBlockPreRegenerateMutation__
 *
 * To run a mutation, you first call `useBlockPreRegenerateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockPreRegenerateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockPreRegenerateMutation, { data, loading, error }] = useBlockPreRegenerateMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      generatedAt: // value for 'generatedAt'
 *   },
 * });
 */
export function useBlockPreRegenerateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BlockPreRegenerateMutation,
    BlockPreRegenerateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BlockPreRegenerateMutation,
    BlockPreRegenerateMutationVariables
  >(BlockPreRegenerateDocument, options);
}
export type BlockPreRegenerateMutationHookResult = ReturnType<
  typeof useBlockPreRegenerateMutation
>;
export type BlockPreRegenerateMutationResult =
  Apollo.MutationResult<BlockPreRegenerateMutation>;
export type BlockPreRegenerateMutationOptions = Apollo.BaseMutationOptions<
  BlockPreRegenerateMutation,
  BlockPreRegenerateMutationVariables
>;
export const BlockSetStatusDocument = gql`
  mutation BlockSetStatus($blockID: uuid!, $status: String!) {
    update_blocks_by_pk(
      pk_columns: { id: $blockID }
      _set: { status: $status }
    ) {
      id
    }
  }
`;
export type BlockSetStatusMutationFn = Apollo.MutationFunction<
  BlockSetStatusMutation,
  BlockSetStatusMutationVariables
>;
export type BlockSetStatusComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    BlockSetStatusMutation,
    BlockSetStatusMutationVariables
  >,
  "mutation"
>;

export const BlockSetStatusComponent = (
  props: BlockSetStatusComponentProps
) => (
  <ApolloReactComponents.Mutation<
    BlockSetStatusMutation,
    BlockSetStatusMutationVariables
  >
    mutation={BlockSetStatusDocument}
    {...props}
  />
);

/**
 * __useBlockSetStatusMutation__
 *
 * To run a mutation, you first call `useBlockSetStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBlockSetStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [blockSetStatusMutation, { data, loading, error }] = useBlockSetStatusMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useBlockSetStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BlockSetStatusMutation,
    BlockSetStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BlockSetStatusMutation,
    BlockSetStatusMutationVariables
  >(BlockSetStatusDocument, options);
}
export type BlockSetStatusMutationHookResult = ReturnType<
  typeof useBlockSetStatusMutation
>;
export type BlockSetStatusMutationResult =
  Apollo.MutationResult<BlockSetStatusMutation>;
export type BlockSetStatusMutationOptions = Apollo.BaseMutationOptions<
  BlockSetStatusMutation,
  BlockSetStatusMutationVariables
>;
export const DeleteBlockDocument = gql`
  mutation DeleteBlock($blockID: uuid!) {
    delete_blocks_by_pk(id: $blockID) {
      id
    }
  }
`;
export type DeleteBlockMutationFn = Apollo.MutationFunction<
  DeleteBlockMutation,
  DeleteBlockMutationVariables
>;
export type DeleteBlockComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteBlockMutation,
    DeleteBlockMutationVariables
  >,
  "mutation"
>;

export const DeleteBlockComponent = (props: DeleteBlockComponentProps) => (
  <ApolloReactComponents.Mutation<
    DeleteBlockMutation,
    DeleteBlockMutationVariables
  >
    mutation={DeleteBlockDocument}
    {...props}
  />
);

/**
 * __useDeleteBlockMutation__
 *
 * To run a mutation, you first call `useDeleteBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlockMutation, { data, loading, error }] = useDeleteBlockMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *   },
 * });
 */
export function useDeleteBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBlockMutation,
    DeleteBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBlockMutation, DeleteBlockMutationVariables>(
    DeleteBlockDocument,
    options
  );
}
export type DeleteBlockMutationHookResult = ReturnType<
  typeof useDeleteBlockMutation
>;
export type DeleteBlockMutationResult =
  Apollo.MutationResult<DeleteBlockMutation>;
export type DeleteBlockMutationOptions = Apollo.BaseMutationOptions<
  DeleteBlockMutation,
  DeleteBlockMutationVariables
>;
export const DeleteDocumentDocument = gql`
  mutation DeleteDocument($documentID: uuid!) {
    delete_documents_by_pk(id: $documentID) {
      id
    }
  }
`;
export type DeleteDocumentMutationFn = Apollo.MutationFunction<
  DeleteDocumentMutation,
  DeleteDocumentMutationVariables
>;
export type DeleteDocumentComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteDocumentMutation,
    DeleteDocumentMutationVariables
  >,
  "mutation"
>;

export const DeleteDocumentComponent = (
  props: DeleteDocumentComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteDocumentMutation,
    DeleteDocumentMutationVariables
  >
    mutation={DeleteDocumentDocument}
    {...props}
  />
);

/**
 * __useDeleteDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentMutation, { data, loading, error }] = useDeleteDocumentMutation({
 *   variables: {
 *      documentID: // value for 'documentID'
 *   },
 * });
 */
export function useDeleteDocumentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDocumentMutation,
    DeleteDocumentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteDocumentMutation,
    DeleteDocumentMutationVariables
  >(DeleteDocumentDocument, options);
}
export type DeleteDocumentMutationHookResult = ReturnType<
  typeof useDeleteDocumentMutation
>;
export type DeleteDocumentMutationResult =
  Apollo.MutationResult<DeleteDocumentMutation>;
export type DeleteDocumentMutationOptions = Apollo.BaseMutationOptions<
  DeleteDocumentMutation,
  DeleteDocumentMutationVariables
>;
export const DeleteGuidanceDocument = gql`
  mutation DeleteGuidance($guidanceID: uuid!) {
    delete_guidance_by_pk(id: $guidanceID) {
      id
    }
  }
`;
export type DeleteGuidanceMutationFn = Apollo.MutationFunction<
  DeleteGuidanceMutation,
  DeleteGuidanceMutationVariables
>;
export type DeleteGuidanceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteGuidanceMutation,
    DeleteGuidanceMutationVariables
  >,
  "mutation"
>;

export const DeleteGuidanceComponent = (
  props: DeleteGuidanceComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeleteGuidanceMutation,
    DeleteGuidanceMutationVariables
  >
    mutation={DeleteGuidanceDocument}
    {...props}
  />
);

/**
 * __useDeleteGuidanceMutation__
 *
 * To run a mutation, you first call `useDeleteGuidanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuidanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuidanceMutation, { data, loading, error }] = useDeleteGuidanceMutation({
 *   variables: {
 *      guidanceID: // value for 'guidanceID'
 *   },
 * });
 */
export function useDeleteGuidanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteGuidanceMutation,
    DeleteGuidanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteGuidanceMutation,
    DeleteGuidanceMutationVariables
  >(DeleteGuidanceDocument, options);
}
export type DeleteGuidanceMutationHookResult = ReturnType<
  typeof useDeleteGuidanceMutation
>;
export type DeleteGuidanceMutationResult =
  Apollo.MutationResult<DeleteGuidanceMutation>;
export type DeleteGuidanceMutationOptions = Apollo.BaseMutationOptions<
  DeleteGuidanceMutation,
  DeleteGuidanceMutationVariables
>;
export const GetBlockDocument = gql`
  subscription GetBlock($blockID: uuid!) {
    blocks_by_pk(id: $blockID) {
      id
      prompt
      created_at
      output
      isLocked: is_manual_overwrite
      is_manual_overwrite
      status
      type
      document {
        id
      }
      guidance(order_by: { created_at: asc, prompt: asc }) {
        id
        prompt
        is_enabled
        type
        created_at
      }
    }
  }
`;
export type GetBlockComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    GetBlockSubscription,
    GetBlockSubscriptionVariables
  >,
  "subscription"
>;

export const GetBlockComponent = (props: GetBlockComponentProps) => (
  <ApolloReactComponents.Subscription<
    GetBlockSubscription,
    GetBlockSubscriptionVariables
  >
    subscription={GetBlockDocument}
    {...props}
  />
);

/**
 * __useGetBlockSubscription__
 *
 * To run a query within a React component, call `useGetBlockSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockSubscription({
 *   variables: {
 *      blockID: // value for 'blockID'
 *   },
 * });
 */
export function useGetBlockSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    GetBlockSubscription,
    GetBlockSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetBlockSubscription,
    GetBlockSubscriptionVariables
  >(GetBlockDocument, options);
}
export type GetBlockSubscriptionHookResult = ReturnType<
  typeof useGetBlockSubscription
>;
export type GetBlockSubscriptionResult =
  Apollo.SubscriptionResult<GetBlockSubscription>;
export const GetBlockPromptDocument = gql`
  query GetBlockPrompt($blockID: uuid!) {
    blocks_by_pk(id: $blockID) {
      id
      prompt
      document {
        id
        prompt
      }
    }
  }
`;
export type GetBlockPromptComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetBlockPromptQuery,
    GetBlockPromptQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetBlockPromptQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetBlockPromptComponent = (
  props: GetBlockPromptComponentProps
) => (
  <ApolloReactComponents.Query<
    GetBlockPromptQuery,
    GetBlockPromptQueryVariables
  >
    query={GetBlockPromptDocument}
    {...props}
  />
);

/**
 * __useGetBlockPromptQuery__
 *
 * To run a query within a React component, call `useGetBlockPromptQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlockPromptQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlockPromptQuery({
 *   variables: {
 *      blockID: // value for 'blockID'
 *   },
 * });
 */
export function useGetBlockPromptQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBlockPromptQuery,
    GetBlockPromptQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBlockPromptQuery, GetBlockPromptQueryVariables>(
    GetBlockPromptDocument,
    options
  );
}
export function useGetBlockPromptLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBlockPromptQuery,
    GetBlockPromptQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBlockPromptQuery, GetBlockPromptQueryVariables>(
    GetBlockPromptDocument,
    options
  );
}
export type GetBlockPromptQueryHookResult = ReturnType<
  typeof useGetBlockPromptQuery
>;
export type GetBlockPromptLazyQueryHookResult = ReturnType<
  typeof useGetBlockPromptLazyQuery
>;
export type GetBlockPromptQueryResult = Apollo.QueryResult<
  GetBlockPromptQuery,
  GetBlockPromptQueryVariables
>;
export const GetDocumentSingleDocument = gql`
  query GetDocumentSingle($documentID: uuid!) {
    documents_by_pk(id: $documentID) {
      id
      prompt
      title
      is_public
      summary
      template
      guidance {
        id
        is_enabled
        prompt
        type
      }
      blocks(order_by: { created_at: asc }) {
        id
        prompt
        created_at
        output
        metadata
        status
        index
        type
        guidance_aggregate(where: { is_enabled: { _eq: true } }) {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
export type GetDocumentSingleComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetDocumentSingleQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetDocumentSingleComponent = (
  props: GetDocumentSingleComponentProps
) => (
  <ApolloReactComponents.Query<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >
    query={GetDocumentSingleDocument}
    {...props}
  />
);

/**
 * __useGetDocumentSingleQuery__
 *
 * To run a query within a React component, call `useGetDocumentSingleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentSingleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentSingleQuery({
 *   variables: {
 *      documentID: // value for 'documentID'
 *   },
 * });
 */
export function useGetDocumentSingleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >(GetDocumentSingleDocument, options);
}
export function useGetDocumentSingleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDocumentSingleQuery,
    GetDocumentSingleQueryVariables
  >(GetDocumentSingleDocument, options);
}
export type GetDocumentSingleQueryHookResult = ReturnType<
  typeof useGetDocumentSingleQuery
>;
export type GetDocumentSingleLazyQueryHookResult = ReturnType<
  typeof useGetDocumentSingleLazyQuery
>;
export type GetDocumentSingleQueryResult = Apollo.QueryResult<
  GetDocumentSingleQuery,
  GetDocumentSingleQueryVariables
>;
export const GetDocumentDocument = gql`
  subscription GetDocument($documentID: uuid!) {
    document: documents_by_pk(id: $documentID) {
      id
      prompt
      title
      is_public
      template
      metadata
      summary
      guidance(order_by: { created_at: asc, prompt: asc }) {
        id
        is_enabled
        prompt
        type
      }
      blocks(order_by: { index: asc, created_at: desc }) {
        id
        prompt
        created_at
        output
        metadata
        status
        index
        type
        is_manual_overwrite
        guidance_aggregate(
          where: { is_enabled: { _eq: true }, type: { _eq: "CUSTOM" } }
        ) {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
export type GetDocumentComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    GetDocumentSubscription,
    GetDocumentSubscriptionVariables
  >,
  "subscription"
>;

export const GetDocumentComponent = (props: GetDocumentComponentProps) => (
  <ApolloReactComponents.Subscription<
    GetDocumentSubscription,
    GetDocumentSubscriptionVariables
  >
    subscription={GetDocumentDocument}
    {...props}
  />
);

/**
 * __useGetDocumentSubscription__
 *
 * To run a query within a React component, call `useGetDocumentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentSubscription({
 *   variables: {
 *      documentID: // value for 'documentID'
 *   },
 * });
 */
export function useGetDocumentSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    GetDocumentSubscription,
    GetDocumentSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetDocumentSubscription,
    GetDocumentSubscriptionVariables
  >(GetDocumentDocument, options);
}
export type GetDocumentSubscriptionHookResult = ReturnType<
  typeof useGetDocumentSubscription
>;
export type GetDocumentSubscriptionResult =
  Apollo.SubscriptionResult<GetDocumentSubscription>;
export const GetDocumentVisibilityDocument = gql`
  query GetDocumentVisibility($id: uuid!) {
    documents_by_pk(id: $id) {
      is_public
    }
  }
`;
export type GetDocumentVisibilityComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetDocumentVisibilityQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetDocumentVisibilityComponent = (
  props: GetDocumentVisibilityComponentProps
) => (
  <ApolloReactComponents.Query<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >
    query={GetDocumentVisibilityDocument}
    {...props}
  />
);

/**
 * __useGetDocumentVisibilityQuery__
 *
 * To run a query within a React component, call `useGetDocumentVisibilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentVisibilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentVisibilityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDocumentVisibilityQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >(GetDocumentVisibilityDocument, options);
}
export function useGetDocumentVisibilityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDocumentVisibilityQuery,
    GetDocumentVisibilityQueryVariables
  >(GetDocumentVisibilityDocument, options);
}
export type GetDocumentVisibilityQueryHookResult = ReturnType<
  typeof useGetDocumentVisibilityQuery
>;
export type GetDocumentVisibilityLazyQueryHookResult = ReturnType<
  typeof useGetDocumentVisibilityLazyQuery
>;
export type GetDocumentVisibilityQueryResult = Apollo.QueryResult<
  GetDocumentVisibilityQuery,
  GetDocumentVisibilityQueryVariables
>;
export const GetDocumentsDocument = gql`
  query GetDocuments($ownerID: uuid!) {
    users_by_pk(id: $ownerID) {
      id
      name
      email
      documents(order_by: { created_at: desc }) {
        id
        prompt
        created_at
        is_public
        title
        summary
        guidance {
          id
          is_enabled
          prompt
        }
        blocks_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
export type GetDocumentsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetDocumentsQuery,
    GetDocumentsQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetDocumentsQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetDocumentsComponent = (props: GetDocumentsComponentProps) => (
  <ApolloReactComponents.Query<GetDocumentsQuery, GetDocumentsQueryVariables>
    query={GetDocumentsDocument}
    {...props}
  />
);

/**
 * __useGetDocumentsQuery__
 *
 * To run a query within a React component, call `useGetDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentsQuery({
 *   variables: {
 *      ownerID: // value for 'ownerID'
 *   },
 * });
 */
export function useGetDocumentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDocumentsQuery,
    GetDocumentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(
    GetDocumentsDocument,
    options
  );
}
export function useGetDocumentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDocumentsQuery,
    GetDocumentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(
    GetDocumentsDocument,
    options
  );
}
export type GetDocumentsQueryHookResult = ReturnType<
  typeof useGetDocumentsQuery
>;
export type GetDocumentsLazyQueryHookResult = ReturnType<
  typeof useGetDocumentsLazyQuery
>;
export type GetDocumentsQueryResult = Apollo.QueryResult<
  GetDocumentsQuery,
  GetDocumentsQueryVariables
>;
export const ToggleEnabledDocument = gql`
  mutation ToggleEnabled($guidanceID: uuid!, $state: Boolean) {
    update_guidance_by_pk(
      pk_columns: { id: $guidanceID }
      _set: { is_enabled: $state }
    ) {
      id
    }
  }
`;
export type ToggleEnabledMutationFn = Apollo.MutationFunction<
  ToggleEnabledMutation,
  ToggleEnabledMutationVariables
>;
export type ToggleEnabledComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ToggleEnabledMutation,
    ToggleEnabledMutationVariables
  >,
  "mutation"
>;

export const ToggleEnabledComponent = (props: ToggleEnabledComponentProps) => (
  <ApolloReactComponents.Mutation<
    ToggleEnabledMutation,
    ToggleEnabledMutationVariables
  >
    mutation={ToggleEnabledDocument}
    {...props}
  />
);

/**
 * __useToggleEnabledMutation__
 *
 * To run a mutation, you first call `useToggleEnabledMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleEnabledMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleEnabledMutation, { data, loading, error }] = useToggleEnabledMutation({
 *   variables: {
 *      guidanceID: // value for 'guidanceID'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useToggleEnabledMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleEnabledMutation,
    ToggleEnabledMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ToggleEnabledMutation,
    ToggleEnabledMutationVariables
  >(ToggleEnabledDocument, options);
}
export type ToggleEnabledMutationHookResult = ReturnType<
  typeof useToggleEnabledMutation
>;
export type ToggleEnabledMutationResult =
  Apollo.MutationResult<ToggleEnabledMutation>;
export type ToggleEnabledMutationOptions = Apollo.BaseMutationOptions<
  ToggleEnabledMutation,
  ToggleEnabledMutationVariables
>;
export const ToggleOverwriteDocument = gql`
  mutation ToggleOverwrite($blockID: uuid!, $isOverwrite: Boolean) {
    update_blocks_by_pk(
      pk_columns: { id: $blockID }
      _set: { is_manual_overwrite: $isOverwrite }
    ) {
      id
    }
  }
`;
export type ToggleOverwriteMutationFn = Apollo.MutationFunction<
  ToggleOverwriteMutation,
  ToggleOverwriteMutationVariables
>;
export type ToggleOverwriteComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ToggleOverwriteMutation,
    ToggleOverwriteMutationVariables
  >,
  "mutation"
>;

export const ToggleOverwriteComponent = (
  props: ToggleOverwriteComponentProps
) => (
  <ApolloReactComponents.Mutation<
    ToggleOverwriteMutation,
    ToggleOverwriteMutationVariables
  >
    mutation={ToggleOverwriteDocument}
    {...props}
  />
);

/**
 * __useToggleOverwriteMutation__
 *
 * To run a mutation, you first call `useToggleOverwriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleOverwriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleOverwriteMutation, { data, loading, error }] = useToggleOverwriteMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      isOverwrite: // value for 'isOverwrite'
 *   },
 * });
 */
export function useToggleOverwriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleOverwriteMutation,
    ToggleOverwriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ToggleOverwriteMutation,
    ToggleOverwriteMutationVariables
  >(ToggleOverwriteDocument, options);
}
export type ToggleOverwriteMutationHookResult = ReturnType<
  typeof useToggleOverwriteMutation
>;
export type ToggleOverwriteMutationResult =
  Apollo.MutationResult<ToggleOverwriteMutation>;
export type ToggleOverwriteMutationOptions = Apollo.BaseMutationOptions<
  ToggleOverwriteMutation,
  ToggleOverwriteMutationVariables
>;
export const UpdateBlockDocument = gql`
  mutation UpdateBlock($blockID: uuid!, $updatedPrompt: String!) {
    update_blocks(
      where: { id: { _eq: $blockID } }
      _set: { prompt: $updatedPrompt }
    ) {
      affected_rows
    }
  }
`;
export type UpdateBlockMutationFn = Apollo.MutationFunction<
  UpdateBlockMutation,
  UpdateBlockMutationVariables
>;
export type UpdateBlockComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateBlockMutation,
    UpdateBlockMutationVariables
  >,
  "mutation"
>;

export const UpdateBlockComponent = (props: UpdateBlockComponentProps) => (
  <ApolloReactComponents.Mutation<
    UpdateBlockMutation,
    UpdateBlockMutationVariables
  >
    mutation={UpdateBlockDocument}
    {...props}
  />
);

/**
 * __useUpdateBlockMutation__
 *
 * To run a mutation, you first call `useUpdateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockMutation, { data, loading, error }] = useUpdateBlockMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      updatedPrompt: // value for 'updatedPrompt'
 *   },
 * });
 */
export function useUpdateBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockMutation,
    UpdateBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBlockMutation, UpdateBlockMutationVariables>(
    UpdateBlockDocument,
    options
  );
}
export type UpdateBlockMutationHookResult = ReturnType<
  typeof useUpdateBlockMutation
>;
export type UpdateBlockMutationResult =
  Apollo.MutationResult<UpdateBlockMutation>;
export type UpdateBlockMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockMutation,
  UpdateBlockMutationVariables
>;
export const UpdateBlockIndexDocument = gql`
  mutation UpdateBlockIndex($blockID: uuid!, $index: Int!) {
    update_blocks(where: { id: { _eq: $blockID } }, _set: { index: $index }) {
      affected_rows
    }
  }
`;
export type UpdateBlockIndexMutationFn = Apollo.MutationFunction<
  UpdateBlockIndexMutation,
  UpdateBlockIndexMutationVariables
>;
export type UpdateBlockIndexComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateBlockIndexMutation,
    UpdateBlockIndexMutationVariables
  >,
  "mutation"
>;

export const UpdateBlockIndexComponent = (
  props: UpdateBlockIndexComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateBlockIndexMutation,
    UpdateBlockIndexMutationVariables
  >
    mutation={UpdateBlockIndexDocument}
    {...props}
  />
);

/**
 * __useUpdateBlockIndexMutation__
 *
 * To run a mutation, you first call `useUpdateBlockIndexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockIndexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockIndexMutation, { data, loading, error }] = useUpdateBlockIndexMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      index: // value for 'index'
 *   },
 * });
 */
export function useUpdateBlockIndexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockIndexMutation,
    UpdateBlockIndexMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBlockIndexMutation,
    UpdateBlockIndexMutationVariables
  >(UpdateBlockIndexDocument, options);
}
export type UpdateBlockIndexMutationHookResult = ReturnType<
  typeof useUpdateBlockIndexMutation
>;
export type UpdateBlockIndexMutationResult =
  Apollo.MutationResult<UpdateBlockIndexMutation>;
export type UpdateBlockIndexMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockIndexMutation,
  UpdateBlockIndexMutationVariables
>;
export const UpdateBlockIndexManyDocument = gql`
  mutation UpdateBlockIndexMany($updates: [blocks_updates!]!) {
    update_blocks_many(updates: $updates) {
      affected_rows
    }
  }
`;
export type UpdateBlockIndexManyMutationFn = Apollo.MutationFunction<
  UpdateBlockIndexManyMutation,
  UpdateBlockIndexManyMutationVariables
>;
export type UpdateBlockIndexManyComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateBlockIndexManyMutation,
    UpdateBlockIndexManyMutationVariables
  >,
  "mutation"
>;

export const UpdateBlockIndexManyComponent = (
  props: UpdateBlockIndexManyComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateBlockIndexManyMutation,
    UpdateBlockIndexManyMutationVariables
  >
    mutation={UpdateBlockIndexManyDocument}
    {...props}
  />
);

/**
 * __useUpdateBlockIndexManyMutation__
 *
 * To run a mutation, you first call `useUpdateBlockIndexManyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockIndexManyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockIndexManyMutation, { data, loading, error }] = useUpdateBlockIndexManyMutation({
 *   variables: {
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateBlockIndexManyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockIndexManyMutation,
    UpdateBlockIndexManyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBlockIndexManyMutation,
    UpdateBlockIndexManyMutationVariables
  >(UpdateBlockIndexManyDocument, options);
}
export type UpdateBlockIndexManyMutationHookResult = ReturnType<
  typeof useUpdateBlockIndexManyMutation
>;
export type UpdateBlockIndexManyMutationResult =
  Apollo.MutationResult<UpdateBlockIndexManyMutation>;
export type UpdateBlockIndexManyMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockIndexManyMutation,
  UpdateBlockIndexManyMutationVariables
>;
export const UpdateBlockLengthDocument = gql`
  mutation UpdateBlockLength($blockID: uuid!, $newLength: String!) {
    delete_guidance(
      where: { type: { _eq: "BLOCK_LENGTH" }, parent_id: { _eq: $blockID } }
    ) {
      affected_rows
    }
    insert_guidance(
      objects: {
        is_enabled: true
        parent_id: $blockID
        prompt: $newLength
        type: "BLOCK_LENGTH"
      }
      on_conflict: { update_columns: [prompt], constraint: guidance_pkey }
    ) {
      affected_rows
    }
  }
`;
export type UpdateBlockLengthMutationFn = Apollo.MutationFunction<
  UpdateBlockLengthMutation,
  UpdateBlockLengthMutationVariables
>;
export type UpdateBlockLengthComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateBlockLengthMutation,
    UpdateBlockLengthMutationVariables
  >,
  "mutation"
>;

export const UpdateBlockLengthComponent = (
  props: UpdateBlockLengthComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateBlockLengthMutation,
    UpdateBlockLengthMutationVariables
  >
    mutation={UpdateBlockLengthDocument}
    {...props}
  />
);

/**
 * __useUpdateBlockLengthMutation__
 *
 * To run a mutation, you first call `useUpdateBlockLengthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockLengthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockLengthMutation, { data, loading, error }] = useUpdateBlockLengthMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      newLength: // value for 'newLength'
 *   },
 * });
 */
export function useUpdateBlockLengthMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockLengthMutation,
    UpdateBlockLengthMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBlockLengthMutation,
    UpdateBlockLengthMutationVariables
  >(UpdateBlockLengthDocument, options);
}
export type UpdateBlockLengthMutationHookResult = ReturnType<
  typeof useUpdateBlockLengthMutation
>;
export type UpdateBlockLengthMutationResult =
  Apollo.MutationResult<UpdateBlockLengthMutation>;
export type UpdateBlockLengthMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockLengthMutation,
  UpdateBlockLengthMutationVariables
>;
export const UpdateBlockOutputDocument = gql`
  mutation UpdateBlockOutput($blockID: uuid!, $updatedOutput: String!) {
    update_blocks(
      where: { id: { _eq: $blockID } }
      _set: { output: $updatedOutput }
    ) {
      affected_rows
    }
  }
`;
export type UpdateBlockOutputMutationFn = Apollo.MutationFunction<
  UpdateBlockOutputMutation,
  UpdateBlockOutputMutationVariables
>;
export type UpdateBlockOutputComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateBlockOutputMutation,
    UpdateBlockOutputMutationVariables
  >,
  "mutation"
>;

export const UpdateBlockOutputComponent = (
  props: UpdateBlockOutputComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateBlockOutputMutation,
    UpdateBlockOutputMutationVariables
  >
    mutation={UpdateBlockOutputDocument}
    {...props}
  />
);

/**
 * __useUpdateBlockOutputMutation__
 *
 * To run a mutation, you first call `useUpdateBlockOutputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockOutputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockOutputMutation, { data, loading, error }] = useUpdateBlockOutputMutation({
 *   variables: {
 *      blockID: // value for 'blockID'
 *      updatedOutput: // value for 'updatedOutput'
 *   },
 * });
 */
export function useUpdateBlockOutputMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockOutputMutation,
    UpdateBlockOutputMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateBlockOutputMutation,
    UpdateBlockOutputMutationVariables
  >(UpdateBlockOutputDocument, options);
}
export type UpdateBlockOutputMutationHookResult = ReturnType<
  typeof useUpdateBlockOutputMutation
>;
export type UpdateBlockOutputMutationResult =
  Apollo.MutationResult<UpdateBlockOutputMutation>;
export type UpdateBlockOutputMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockOutputMutation,
  UpdateBlockOutputMutationVariables
>;
export const UpdateDocumentDocument = gql`
  mutation UpdateDocument(
    $documentID: uuid!
    $prompt: String!
    $title: String!
  ) {
    update_documents_by_pk(
      pk_columns: { id: $documentID }
      _set: { prompt: $prompt, title: $title }
    ) {
      id
      prompt
      title
    }
  }
`;
export type UpdateDocumentMutationFn = Apollo.MutationFunction<
  UpdateDocumentMutation,
  UpdateDocumentMutationVariables
>;
export type UpdateDocumentComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateDocumentMutation,
    UpdateDocumentMutationVariables
  >,
  "mutation"
>;

export const UpdateDocumentComponent = (
  props: UpdateDocumentComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateDocumentMutation,
    UpdateDocumentMutationVariables
  >
    mutation={UpdateDocumentDocument}
    {...props}
  />
);

/**
 * __useUpdateDocumentMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentMutation, { data, loading, error }] = useUpdateDocumentMutation({
 *   variables: {
 *      documentID: // value for 'documentID'
 *      prompt: // value for 'prompt'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateDocumentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDocumentMutation,
    UpdateDocumentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateDocumentMutation,
    UpdateDocumentMutationVariables
  >(UpdateDocumentDocument, options);
}
export type UpdateDocumentMutationHookResult = ReturnType<
  typeof useUpdateDocumentMutation
>;
export type UpdateDocumentMutationResult =
  Apollo.MutationResult<UpdateDocumentMutation>;
export type UpdateDocumentMutationOptions = Apollo.BaseMutationOptions<
  UpdateDocumentMutation,
  UpdateDocumentMutationVariables
>;
export const UpdateDocumentSummaryDocument = gql`
  mutation UpdateDocumentSummary($documentID: uuid!, $summary: String!) {
    update_documents_by_pk(
      pk_columns: { id: $documentID }
      _set: { summary: $summary }
    ) {
      id
      prompt
      title
      summary
    }
  }
`;
export type UpdateDocumentSummaryMutationFn = Apollo.MutationFunction<
  UpdateDocumentSummaryMutation,
  UpdateDocumentSummaryMutationVariables
>;
export type UpdateDocumentSummaryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateDocumentSummaryMutation,
    UpdateDocumentSummaryMutationVariables
  >,
  "mutation"
>;

export const UpdateDocumentSummaryComponent = (
  props: UpdateDocumentSummaryComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateDocumentSummaryMutation,
    UpdateDocumentSummaryMutationVariables
  >
    mutation={UpdateDocumentSummaryDocument}
    {...props}
  />
);

/**
 * __useUpdateDocumentSummaryMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentSummaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentSummaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentSummaryMutation, { data, loading, error }] = useUpdateDocumentSummaryMutation({
 *   variables: {
 *      documentID: // value for 'documentID'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useUpdateDocumentSummaryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDocumentSummaryMutation,
    UpdateDocumentSummaryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateDocumentSummaryMutation,
    UpdateDocumentSummaryMutationVariables
  >(UpdateDocumentSummaryDocument, options);
}
export type UpdateDocumentSummaryMutationHookResult = ReturnType<
  typeof useUpdateDocumentSummaryMutation
>;
export type UpdateDocumentSummaryMutationResult =
  Apollo.MutationResult<UpdateDocumentSummaryMutation>;
export type UpdateDocumentSummaryMutationOptions = Apollo.BaseMutationOptions<
  UpdateDocumentSummaryMutation,
  UpdateDocumentSummaryMutationVariables
>;
export const UpdateDocumentVisibilityDocument = gql`
  mutation UpdateDocumentVisibility($documentID: uuid!, $visible: Boolean!) {
    update_documents_by_pk(
      pk_columns: { id: $documentID }
      _set: { is_public: $visible }
    ) {
      id
    }
  }
`;
export type UpdateDocumentVisibilityMutationFn = Apollo.MutationFunction<
  UpdateDocumentVisibilityMutation,
  UpdateDocumentVisibilityMutationVariables
>;
export type UpdateDocumentVisibilityComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateDocumentVisibilityMutation,
    UpdateDocumentVisibilityMutationVariables
  >,
  "mutation"
>;

export const UpdateDocumentVisibilityComponent = (
  props: UpdateDocumentVisibilityComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateDocumentVisibilityMutation,
    UpdateDocumentVisibilityMutationVariables
  >
    mutation={UpdateDocumentVisibilityDocument}
    {...props}
  />
);

/**
 * __useUpdateDocumentVisibilityMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentVisibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentVisibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentVisibilityMutation, { data, loading, error }] = useUpdateDocumentVisibilityMutation({
 *   variables: {
 *      documentID: // value for 'documentID'
 *      visible: // value for 'visible'
 *   },
 * });
 */
export function useUpdateDocumentVisibilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateDocumentVisibilityMutation,
    UpdateDocumentVisibilityMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateDocumentVisibilityMutation,
    UpdateDocumentVisibilityMutationVariables
  >(UpdateDocumentVisibilityDocument, options);
}
export type UpdateDocumentVisibilityMutationHookResult = ReturnType<
  typeof useUpdateDocumentVisibilityMutation
>;
export type UpdateDocumentVisibilityMutationResult =
  Apollo.MutationResult<UpdateDocumentVisibilityMutation>;
export type UpdateDocumentVisibilityMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateDocumentVisibilityMutation,
    UpdateDocumentVisibilityMutationVariables
  >;
export const UpdateGuidanceDocument = gql`
  mutation UpdateGuidance($guidanceID: uuid!, $prompt: String!) {
    update_guidance_by_pk(
      pk_columns: { id: $guidanceID }
      _set: { prompt: $prompt }
    ) {
      id
      prompt
    }
  }
`;
export type UpdateGuidanceMutationFn = Apollo.MutationFunction<
  UpdateGuidanceMutation,
  UpdateGuidanceMutationVariables
>;
export type UpdateGuidanceComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateGuidanceMutation,
    UpdateGuidanceMutationVariables
  >,
  "mutation"
>;

export const UpdateGuidanceComponent = (
  props: UpdateGuidanceComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateGuidanceMutation,
    UpdateGuidanceMutationVariables
  >
    mutation={UpdateGuidanceDocument}
    {...props}
  />
);

/**
 * __useUpdateGuidanceMutation__
 *
 * To run a mutation, you first call `useUpdateGuidanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuidanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuidanceMutation, { data, loading, error }] = useUpdateGuidanceMutation({
 *   variables: {
 *      guidanceID: // value for 'guidanceID'
 *      prompt: // value for 'prompt'
 *   },
 * });
 */
export function useUpdateGuidanceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateGuidanceMutation,
    UpdateGuidanceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateGuidanceMutation,
    UpdateGuidanceMutationVariables
  >(UpdateGuidanceDocument, options);
}
export type UpdateGuidanceMutationHookResult = ReturnType<
  typeof useUpdateGuidanceMutation
>;
export type UpdateGuidanceMutationResult =
  Apollo.MutationResult<UpdateGuidanceMutation>;
export type UpdateGuidanceMutationOptions = Apollo.BaseMutationOptions<
  UpdateGuidanceMutation,
  UpdateGuidanceMutationVariables
>;
export const UpdateSuggestionsDocument = gql`
  mutation UpdateSuggestions($documentID: uuid!, $suggestions: jsonb) {
    update_documents_by_pk(
      pk_columns: { id: $documentID }
      _set: { metadata: { suggestions: $suggestions } }
    ) {
      id
    }
  }
`;
export type UpdateSuggestionsMutationFn = Apollo.MutationFunction<
  UpdateSuggestionsMutation,
  UpdateSuggestionsMutationVariables
>;
export type UpdateSuggestionsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateSuggestionsMutation,
    UpdateSuggestionsMutationVariables
  >,
  "mutation"
>;

export const UpdateSuggestionsComponent = (
  props: UpdateSuggestionsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateSuggestionsMutation,
    UpdateSuggestionsMutationVariables
  >
    mutation={UpdateSuggestionsDocument}
    {...props}
  />
);

/**
 * __useUpdateSuggestionsMutation__
 *
 * To run a mutation, you first call `useUpdateSuggestionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSuggestionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSuggestionsMutation, { data, loading, error }] = useUpdateSuggestionsMutation({
 *   variables: {
 *      documentID: // value for 'documentID'
 *      suggestions: // value for 'suggestions'
 *   },
 * });
 */
export function useUpdateSuggestionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSuggestionsMutation,
    UpdateSuggestionsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSuggestionsMutation,
    UpdateSuggestionsMutationVariables
  >(UpdateSuggestionsDocument, options);
}
export type UpdateSuggestionsMutationHookResult = ReturnType<
  typeof useUpdateSuggestionsMutation
>;
export type UpdateSuggestionsMutationResult =
  Apollo.MutationResult<UpdateSuggestionsMutation>;
export type UpdateSuggestionsMutationOptions = Apollo.BaseMutationOptions<
  UpdateSuggestionsMutation,
  UpdateSuggestionsMutationVariables
>;

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
  blocks: ResolverTypeWrapper<Blocks>;
  blocks_aggregate: ResolverTypeWrapper<Blocks_Aggregate>;
  blocks_aggregate_bool_exp: Blocks_Aggregate_Bool_Exp;
  blocks_aggregate_bool_exp_bool_and: Blocks_Aggregate_Bool_Exp_Bool_And;
  blocks_aggregate_bool_exp_bool_or: Blocks_Aggregate_Bool_Exp_Bool_Or;
  blocks_aggregate_bool_exp_count: Blocks_Aggregate_Bool_Exp_Count;
  blocks_aggregate_fields: ResolverTypeWrapper<Blocks_Aggregate_Fields>;
  blocks_aggregate_order_by: Blocks_Aggregate_Order_By;
  blocks_append_input: Blocks_Append_Input;
  blocks_arr_rel_insert_input: Blocks_Arr_Rel_Insert_Input;
  blocks_avg_fields: ResolverTypeWrapper<Blocks_Avg_Fields>;
  blocks_avg_order_by: Blocks_Avg_Order_By;
  blocks_bool_exp: Blocks_Bool_Exp;
  blocks_constraint: Blocks_Constraint;
  blocks_delete_at_path_input: Blocks_Delete_At_Path_Input;
  blocks_delete_elem_input: Blocks_Delete_Elem_Input;
  blocks_delete_key_input: Blocks_Delete_Key_Input;
  blocks_inc_input: Blocks_Inc_Input;
  blocks_insert_input: Blocks_Insert_Input;
  blocks_max_fields: ResolverTypeWrapper<Blocks_Max_Fields>;
  blocks_max_order_by: Blocks_Max_Order_By;
  blocks_min_fields: ResolverTypeWrapper<Blocks_Min_Fields>;
  blocks_min_order_by: Blocks_Min_Order_By;
  blocks_mutation_response: ResolverTypeWrapper<Blocks_Mutation_Response>;
  blocks_obj_rel_insert_input: Blocks_Obj_Rel_Insert_Input;
  blocks_on_conflict: Blocks_On_Conflict;
  blocks_order_by: Blocks_Order_By;
  blocks_pk_columns_input: Blocks_Pk_Columns_Input;
  blocks_prepend_input: Blocks_Prepend_Input;
  blocks_select_column: Blocks_Select_Column;
  blocks_select_column_blocks_aggregate_bool_exp_bool_and_arguments_columns: Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  blocks_select_column_blocks_aggregate_bool_exp_bool_or_arguments_columns: Blocks_Select_Column_Blocks_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  blocks_set_input: Blocks_Set_Input;
  blocks_stddev_fields: ResolverTypeWrapper<Blocks_Stddev_Fields>;
  blocks_stddev_order_by: Blocks_Stddev_Order_By;
  blocks_stddev_pop_fields: ResolverTypeWrapper<Blocks_Stddev_Pop_Fields>;
  blocks_stddev_pop_order_by: Blocks_Stddev_Pop_Order_By;
  blocks_stddev_samp_fields: ResolverTypeWrapper<Blocks_Stddev_Samp_Fields>;
  blocks_stddev_samp_order_by: Blocks_Stddev_Samp_Order_By;
  blocks_stream_cursor_input: Blocks_Stream_Cursor_Input;
  blocks_stream_cursor_value_input: Blocks_Stream_Cursor_Value_Input;
  blocks_sum_fields: ResolverTypeWrapper<Blocks_Sum_Fields>;
  blocks_sum_order_by: Blocks_Sum_Order_By;
  blocks_update_column: Blocks_Update_Column;
  blocks_updates: Blocks_Updates;
  blocks_var_pop_fields: ResolverTypeWrapper<Blocks_Var_Pop_Fields>;
  blocks_var_pop_order_by: Blocks_Var_Pop_Order_By;
  blocks_var_samp_fields: ResolverTypeWrapper<Blocks_Var_Samp_Fields>;
  blocks_var_samp_order_by: Blocks_Var_Samp_Order_By;
  blocks_variance_fields: ResolverTypeWrapper<Blocks_Variance_Fields>;
  blocks_variance_order_by: Blocks_Variance_Order_By;
  cursor_ordering: Cursor_Ordering;
  documents: ResolverTypeWrapper<Documents>;
  documents_aggregate: ResolverTypeWrapper<Documents_Aggregate>;
  documents_aggregate_bool_exp: Documents_Aggregate_Bool_Exp;
  documents_aggregate_bool_exp_bool_and: Documents_Aggregate_Bool_Exp_Bool_And;
  documents_aggregate_bool_exp_bool_or: Documents_Aggregate_Bool_Exp_Bool_Or;
  documents_aggregate_bool_exp_count: Documents_Aggregate_Bool_Exp_Count;
  documents_aggregate_fields: ResolverTypeWrapper<Documents_Aggregate_Fields>;
  documents_aggregate_order_by: Documents_Aggregate_Order_By;
  documents_append_input: Documents_Append_Input;
  documents_arr_rel_insert_input: Documents_Arr_Rel_Insert_Input;
  documents_bool_exp: Documents_Bool_Exp;
  documents_constraint: Documents_Constraint;
  documents_delete_at_path_input: Documents_Delete_At_Path_Input;
  documents_delete_elem_input: Documents_Delete_Elem_Input;
  documents_delete_key_input: Documents_Delete_Key_Input;
  documents_insert_input: Documents_Insert_Input;
  documents_max_fields: ResolverTypeWrapper<Documents_Max_Fields>;
  documents_max_order_by: Documents_Max_Order_By;
  documents_min_fields: ResolverTypeWrapper<Documents_Min_Fields>;
  documents_min_order_by: Documents_Min_Order_By;
  documents_mutation_response: ResolverTypeWrapper<Documents_Mutation_Response>;
  documents_obj_rel_insert_input: Documents_Obj_Rel_Insert_Input;
  documents_on_conflict: Documents_On_Conflict;
  documents_order_by: Documents_Order_By;
  documents_pk_columns_input: Documents_Pk_Columns_Input;
  documents_prepend_input: Documents_Prepend_Input;
  documents_select_column: Documents_Select_Column;
  documents_select_column_documents_aggregate_bool_exp_bool_and_arguments_columns: Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  documents_select_column_documents_aggregate_bool_exp_bool_or_arguments_columns: Documents_Select_Column_Documents_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  documents_set_input: Documents_Set_Input;
  documents_stream_cursor_input: Documents_Stream_Cursor_Input;
  documents_stream_cursor_value_input: Documents_Stream_Cursor_Value_Input;
  documents_update_column: Documents_Update_Column;
  documents_updates: Documents_Updates;
  guidance: ResolverTypeWrapper<Guidance>;
  guidance_aggregate: ResolverTypeWrapper<Guidance_Aggregate>;
  guidance_aggregate_bool_exp: Guidance_Aggregate_Bool_Exp;
  guidance_aggregate_bool_exp_bool_and: Guidance_Aggregate_Bool_Exp_Bool_And;
  guidance_aggregate_bool_exp_bool_or: Guidance_Aggregate_Bool_Exp_Bool_Or;
  guidance_aggregate_bool_exp_count: Guidance_Aggregate_Bool_Exp_Count;
  guidance_aggregate_fields: ResolverTypeWrapper<Guidance_Aggregate_Fields>;
  guidance_aggregate_order_by: Guidance_Aggregate_Order_By;
  guidance_arr_rel_insert_input: Guidance_Arr_Rel_Insert_Input;
  guidance_bool_exp: Guidance_Bool_Exp;
  guidance_constraint: Guidance_Constraint;
  guidance_insert_input: Guidance_Insert_Input;
  guidance_max_fields: ResolverTypeWrapper<Guidance_Max_Fields>;
  guidance_max_order_by: Guidance_Max_Order_By;
  guidance_min_fields: ResolverTypeWrapper<Guidance_Min_Fields>;
  guidance_min_order_by: Guidance_Min_Order_By;
  guidance_mutation_response: ResolverTypeWrapper<Guidance_Mutation_Response>;
  guidance_on_conflict: Guidance_On_Conflict;
  guidance_order_by: Guidance_Order_By;
  guidance_pk_columns_input: Guidance_Pk_Columns_Input;
  guidance_select_column: Guidance_Select_Column;
  guidance_select_column_guidance_aggregate_bool_exp_bool_and_arguments_columns: Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  guidance_select_column_guidance_aggregate_bool_exp_bool_or_arguments_columns: Guidance_Select_Column_Guidance_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  guidance_set_input: Guidance_Set_Input;
  guidance_stream_cursor_input: Guidance_Stream_Cursor_Input;
  guidance_stream_cursor_value_input: Guidance_Stream_Cursor_Value_Input;
  guidance_update_column: Guidance_Update_Column;
  guidance_updates: Guidance_Updates;
  jsonb: ResolverTypeWrapper<Scalars["jsonb"]>;
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  sessions: ResolverTypeWrapper<Sessions>;
  sessions_aggregate: ResolverTypeWrapper<Sessions_Aggregate>;
  sessions_aggregate_bool_exp: Sessions_Aggregate_Bool_Exp;
  sessions_aggregate_bool_exp_count: Sessions_Aggregate_Bool_Exp_Count;
  sessions_aggregate_fields: ResolverTypeWrapper<Sessions_Aggregate_Fields>;
  sessions_aggregate_order_by: Sessions_Aggregate_Order_By;
  sessions_arr_rel_insert_input: Sessions_Arr_Rel_Insert_Input;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_constraint: Sessions_Constraint;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: ResolverTypeWrapper<Sessions_Max_Fields>;
  sessions_max_order_by: Sessions_Max_Order_By;
  sessions_min_fields: ResolverTypeWrapper<Sessions_Min_Fields>;
  sessions_min_order_by: Sessions_Min_Order_By;
  sessions_mutation_response: ResolverTypeWrapper<Sessions_Mutation_Response>;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_select_column: Sessions_Select_Column;
  sessions_set_input: Sessions_Set_Input;
  sessions_stream_cursor_input: Sessions_Stream_Cursor_Input;
  sessions_stream_cursor_value_input: Sessions_Stream_Cursor_Value_Input;
  sessions_update_column: Sessions_Update_Column;
  sessions_updates: Sessions_Updates;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_update_column: Users_Update_Column;
  users_updates: Users_Updates;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_tokens: ResolverTypeWrapper<Verification_Tokens>;
  verification_tokens_aggregate: ResolverTypeWrapper<Verification_Tokens_Aggregate>;
  verification_tokens_aggregate_fields: ResolverTypeWrapper<Verification_Tokens_Aggregate_Fields>;
  verification_tokens_bool_exp: Verification_Tokens_Bool_Exp;
  verification_tokens_constraint: Verification_Tokens_Constraint;
  verification_tokens_insert_input: Verification_Tokens_Insert_Input;
  verification_tokens_max_fields: ResolverTypeWrapper<Verification_Tokens_Max_Fields>;
  verification_tokens_min_fields: ResolverTypeWrapper<Verification_Tokens_Min_Fields>;
  verification_tokens_mutation_response: ResolverTypeWrapper<Verification_Tokens_Mutation_Response>;
  verification_tokens_on_conflict: Verification_Tokens_On_Conflict;
  verification_tokens_order_by: Verification_Tokens_Order_By;
  verification_tokens_pk_columns_input: Verification_Tokens_Pk_Columns_Input;
  verification_tokens_select_column: Verification_Tokens_Select_Column;
  verification_tokens_set_input: Verification_Tokens_Set_Input;
  verification_tokens_stream_cursor_input: Verification_Tokens_Stream_Cursor_Input;
  verification_tokens_stream_cursor_value_input: Verification_Tokens_Stream_Cursor_Value_Input;
  verification_tokens_update_column: Verification_Tokens_Update_Column;
  verification_tokens_updates: Verification_Tokens_Updates;
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
  blocks: Blocks;
  blocks_aggregate: Blocks_Aggregate;
  blocks_aggregate_bool_exp: Blocks_Aggregate_Bool_Exp;
  blocks_aggregate_bool_exp_bool_and: Blocks_Aggregate_Bool_Exp_Bool_And;
  blocks_aggregate_bool_exp_bool_or: Blocks_Aggregate_Bool_Exp_Bool_Or;
  blocks_aggregate_bool_exp_count: Blocks_Aggregate_Bool_Exp_Count;
  blocks_aggregate_fields: Blocks_Aggregate_Fields;
  blocks_aggregate_order_by: Blocks_Aggregate_Order_By;
  blocks_append_input: Blocks_Append_Input;
  blocks_arr_rel_insert_input: Blocks_Arr_Rel_Insert_Input;
  blocks_avg_fields: Blocks_Avg_Fields;
  blocks_avg_order_by: Blocks_Avg_Order_By;
  blocks_bool_exp: Blocks_Bool_Exp;
  blocks_delete_at_path_input: Blocks_Delete_At_Path_Input;
  blocks_delete_elem_input: Blocks_Delete_Elem_Input;
  blocks_delete_key_input: Blocks_Delete_Key_Input;
  blocks_inc_input: Blocks_Inc_Input;
  blocks_insert_input: Blocks_Insert_Input;
  blocks_max_fields: Blocks_Max_Fields;
  blocks_max_order_by: Blocks_Max_Order_By;
  blocks_min_fields: Blocks_Min_Fields;
  blocks_min_order_by: Blocks_Min_Order_By;
  blocks_mutation_response: Blocks_Mutation_Response;
  blocks_obj_rel_insert_input: Blocks_Obj_Rel_Insert_Input;
  blocks_on_conflict: Blocks_On_Conflict;
  blocks_order_by: Blocks_Order_By;
  blocks_pk_columns_input: Blocks_Pk_Columns_Input;
  blocks_prepend_input: Blocks_Prepend_Input;
  blocks_set_input: Blocks_Set_Input;
  blocks_stddev_fields: Blocks_Stddev_Fields;
  blocks_stddev_order_by: Blocks_Stddev_Order_By;
  blocks_stddev_pop_fields: Blocks_Stddev_Pop_Fields;
  blocks_stddev_pop_order_by: Blocks_Stddev_Pop_Order_By;
  blocks_stddev_samp_fields: Blocks_Stddev_Samp_Fields;
  blocks_stddev_samp_order_by: Blocks_Stddev_Samp_Order_By;
  blocks_stream_cursor_input: Blocks_Stream_Cursor_Input;
  blocks_stream_cursor_value_input: Blocks_Stream_Cursor_Value_Input;
  blocks_sum_fields: Blocks_Sum_Fields;
  blocks_sum_order_by: Blocks_Sum_Order_By;
  blocks_updates: Blocks_Updates;
  blocks_var_pop_fields: Blocks_Var_Pop_Fields;
  blocks_var_pop_order_by: Blocks_Var_Pop_Order_By;
  blocks_var_samp_fields: Blocks_Var_Samp_Fields;
  blocks_var_samp_order_by: Blocks_Var_Samp_Order_By;
  blocks_variance_fields: Blocks_Variance_Fields;
  blocks_variance_order_by: Blocks_Variance_Order_By;
  documents: Documents;
  documents_aggregate: Documents_Aggregate;
  documents_aggregate_bool_exp: Documents_Aggregate_Bool_Exp;
  documents_aggregate_bool_exp_bool_and: Documents_Aggregate_Bool_Exp_Bool_And;
  documents_aggregate_bool_exp_bool_or: Documents_Aggregate_Bool_Exp_Bool_Or;
  documents_aggregate_bool_exp_count: Documents_Aggregate_Bool_Exp_Count;
  documents_aggregate_fields: Documents_Aggregate_Fields;
  documents_aggregate_order_by: Documents_Aggregate_Order_By;
  documents_append_input: Documents_Append_Input;
  documents_arr_rel_insert_input: Documents_Arr_Rel_Insert_Input;
  documents_bool_exp: Documents_Bool_Exp;
  documents_delete_at_path_input: Documents_Delete_At_Path_Input;
  documents_delete_elem_input: Documents_Delete_Elem_Input;
  documents_delete_key_input: Documents_Delete_Key_Input;
  documents_insert_input: Documents_Insert_Input;
  documents_max_fields: Documents_Max_Fields;
  documents_max_order_by: Documents_Max_Order_By;
  documents_min_fields: Documents_Min_Fields;
  documents_min_order_by: Documents_Min_Order_By;
  documents_mutation_response: Documents_Mutation_Response;
  documents_obj_rel_insert_input: Documents_Obj_Rel_Insert_Input;
  documents_on_conflict: Documents_On_Conflict;
  documents_order_by: Documents_Order_By;
  documents_pk_columns_input: Documents_Pk_Columns_Input;
  documents_prepend_input: Documents_Prepend_Input;
  documents_set_input: Documents_Set_Input;
  documents_stream_cursor_input: Documents_Stream_Cursor_Input;
  documents_stream_cursor_value_input: Documents_Stream_Cursor_Value_Input;
  documents_updates: Documents_Updates;
  guidance: Guidance;
  guidance_aggregate: Guidance_Aggregate;
  guidance_aggregate_bool_exp: Guidance_Aggregate_Bool_Exp;
  guidance_aggregate_bool_exp_bool_and: Guidance_Aggregate_Bool_Exp_Bool_And;
  guidance_aggregate_bool_exp_bool_or: Guidance_Aggregate_Bool_Exp_Bool_Or;
  guidance_aggregate_bool_exp_count: Guidance_Aggregate_Bool_Exp_Count;
  guidance_aggregate_fields: Guidance_Aggregate_Fields;
  guidance_aggregate_order_by: Guidance_Aggregate_Order_By;
  guidance_arr_rel_insert_input: Guidance_Arr_Rel_Insert_Input;
  guidance_bool_exp: Guidance_Bool_Exp;
  guidance_insert_input: Guidance_Insert_Input;
  guidance_max_fields: Guidance_Max_Fields;
  guidance_max_order_by: Guidance_Max_Order_By;
  guidance_min_fields: Guidance_Min_Fields;
  guidance_min_order_by: Guidance_Min_Order_By;
  guidance_mutation_response: Guidance_Mutation_Response;
  guidance_on_conflict: Guidance_On_Conflict;
  guidance_order_by: Guidance_Order_By;
  guidance_pk_columns_input: Guidance_Pk_Columns_Input;
  guidance_set_input: Guidance_Set_Input;
  guidance_stream_cursor_input: Guidance_Stream_Cursor_Input;
  guidance_stream_cursor_value_input: Guidance_Stream_Cursor_Value_Input;
  guidance_updates: Guidance_Updates;
  jsonb: Scalars["jsonb"];
  jsonb_cast_exp: Jsonb_Cast_Exp;
  jsonb_comparison_exp: Jsonb_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  sessions: Sessions;
  sessions_aggregate: Sessions_Aggregate;
  sessions_aggregate_bool_exp: Sessions_Aggregate_Bool_Exp;
  sessions_aggregate_bool_exp_count: Sessions_Aggregate_Bool_Exp_Count;
  sessions_aggregate_fields: Sessions_Aggregate_Fields;
  sessions_aggregate_order_by: Sessions_Aggregate_Order_By;
  sessions_arr_rel_insert_input: Sessions_Arr_Rel_Insert_Input;
  sessions_bool_exp: Sessions_Bool_Exp;
  sessions_insert_input: Sessions_Insert_Input;
  sessions_max_fields: Sessions_Max_Fields;
  sessions_max_order_by: Sessions_Max_Order_By;
  sessions_min_fields: Sessions_Min_Fields;
  sessions_min_order_by: Sessions_Min_Order_By;
  sessions_mutation_response: Sessions_Mutation_Response;
  sessions_on_conflict: Sessions_On_Conflict;
  sessions_order_by: Sessions_Order_By;
  sessions_pk_columns_input: Sessions_Pk_Columns_Input;
  sessions_set_input: Sessions_Set_Input;
  sessions_stream_cursor_input: Sessions_Stream_Cursor_Input;
  sessions_stream_cursor_value_input: Sessions_Stream_Cursor_Value_Input;
  sessions_updates: Sessions_Updates;
  subscription_root: {};
  timestamptz: Scalars["timestamptz"];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  users_stream_cursor_input: Users_Stream_Cursor_Input;
  users_stream_cursor_value_input: Users_Stream_Cursor_Value_Input;
  users_updates: Users_Updates;
  uuid: Scalars["uuid"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  verification_tokens: Verification_Tokens;
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  verification_tokens_aggregate_fields: Verification_Tokens_Aggregate_Fields;
  verification_tokens_bool_exp: Verification_Tokens_Bool_Exp;
  verification_tokens_insert_input: Verification_Tokens_Insert_Input;
  verification_tokens_max_fields: Verification_Tokens_Max_Fields;
  verification_tokens_min_fields: Verification_Tokens_Min_Fields;
  verification_tokens_mutation_response: Verification_Tokens_Mutation_Response;
  verification_tokens_on_conflict: Verification_Tokens_On_Conflict;
  verification_tokens_order_by: Verification_Tokens_Order_By;
  verification_tokens_pk_columns_input: Verification_Tokens_Pk_Columns_Input;
  verification_tokens_set_input: Verification_Tokens_Set_Input;
  verification_tokens_stream_cursor_input: Verification_Tokens_Stream_Cursor_Input;
  verification_tokens_stream_cursor_value_input: Verification_Tokens_Stream_Cursor_Value_Input;
  verification_tokens_updates: Verification_Tokens_Updates;
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

export type BlocksResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks"] = ResolversParentTypes["blocks"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  document?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType
  >;
  document_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  generated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  guidance?: Resolver<
    Array<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    Partial<BlocksGuidanceArgs>
  >;
  guidance_aggregate?: Resolver<
    ResolversTypes["guidance_aggregate"],
    ParentType,
    ContextType,
    Partial<BlocksGuidance_AggregateArgs>
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  is_locked?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  is_manual_overwrite?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  is_visible?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<BlocksMetadataArgs>
  >;
  output?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_aggregate"] = ResolversParentTypes["blocks_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["blocks_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["blocks"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_aggregate_fields"] = ResolversParentTypes["blocks_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["blocks_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Blocks_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["blocks_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["blocks_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["blocks_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["blocks_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["blocks_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["blocks_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["blocks_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["blocks_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["blocks_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_avg_fields"] = ResolversParentTypes["blocks_avg_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_max_fields"] = ResolversParentTypes["blocks_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  document_id?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  generated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  output?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_min_fields"] = ResolversParentTypes["blocks_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  document_id?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  generated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  output?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_mutation_response"] = ResolversParentTypes["blocks_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["blocks"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_stddev_fields"] = ResolversParentTypes["blocks_stddev_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_stddev_pop_fields"] = ResolversParentTypes["blocks_stddev_pop_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_stddev_samp_fields"] = ResolversParentTypes["blocks_stddev_samp_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_sum_fields"] = ResolversParentTypes["blocks_sum_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_var_pop_fields"] = ResolversParentTypes["blocks_var_pop_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_var_samp_fields"] = ResolversParentTypes["blocks_var_samp_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Blocks_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["blocks_variance_fields"] = ResolversParentTypes["blocks_variance_fields"]
> = {
  index?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents"] = ResolversParentTypes["documents"]
> = {
  blocks?: Resolver<
    Array<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    Partial<DocumentsBlocksArgs>
  >;
  blocks_aggregate?: Resolver<
    ResolversTypes["blocks_aggregate"],
    ParentType,
    ContextType,
    Partial<DocumentsBlocks_AggregateArgs>
  >;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  guidance?: Resolver<
    Array<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    Partial<DocumentsGuidanceArgs>
  >;
  guidance_aggregate?: Resolver<
    ResolversTypes["guidance_aggregate"],
    ParentType,
    ContextType,
    Partial<DocumentsGuidance_AggregateArgs>
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  is_public?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes["jsonb"]>,
    ParentType,
    ContextType,
    Partial<DocumentsMetadataArgs>
  >;
  owner?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  prompt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  template?: Resolver<
    ResolversTypes["jsonb"],
    ParentType,
    ContextType,
    Partial<DocumentsTemplateArgs>
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Documents_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents_aggregate"] = ResolversParentTypes["documents_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["documents_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["documents"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Documents_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents_aggregate_fields"] = ResolversParentTypes["documents_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Documents_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["documents_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["documents_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Documents_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents_max_fields"] = ResolversParentTypes["documents_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Documents_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents_min_fields"] = ResolversParentTypes["documents_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Documents_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["documents_mutation_response"] = ResolversParentTypes["documents_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["documents"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuidanceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance"] = ResolversParentTypes["guidance"]
> = {
  block?: Resolver<Maybe<ResolversTypes["blocks"]>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  document?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  is_enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  parent_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  prompt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Guidance_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance_aggregate"] = ResolversParentTypes["guidance_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["guidance_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["guidance"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Guidance_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance_aggregate_fields"] = ResolversParentTypes["guidance_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Guidance_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["guidance_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["guidance_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Guidance_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance_max_fields"] = ResolversParentTypes["guidance_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Guidance_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance_min_fields"] = ResolversParentTypes["guidance_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  prompt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Guidance_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["guidance_mutation_response"] = ResolversParentTypes["guidance_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["guidance"]>,
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
  delete_blocks?: Resolver<
    Maybe<ResolversTypes["blocks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_BlocksArgs, "where">
  >;
  delete_blocks_by_pk?: Resolver<
    Maybe<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Blocks_By_PkArgs, "id">
  >;
  delete_documents?: Resolver<
    Maybe<ResolversTypes["documents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_DocumentsArgs, "where">
  >;
  delete_documents_by_pk?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Documents_By_PkArgs, "id">
  >;
  delete_guidance?: Resolver<
    Maybe<ResolversTypes["guidance_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_GuidanceArgs, "where">
  >;
  delete_guidance_by_pk?: Resolver<
    Maybe<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Guidance_By_PkArgs, "id">
  >;
  delete_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_SessionsArgs, "where">
  >;
  delete_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Sessions_By_PkArgs, "id">
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
  delete_verification_tokens?: Resolver<
    Maybe<ResolversTypes["verification_tokens_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_TokensArgs, "where">
  >;
  delete_verification_tokens_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Verification_Tokens_By_PkArgs, "token">
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
  insert_blocks?: Resolver<
    Maybe<ResolversTypes["blocks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_BlocksArgs, "objects">
  >;
  insert_blocks_one?: Resolver<
    Maybe<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Blocks_OneArgs, "object">
  >;
  insert_documents?: Resolver<
    Maybe<ResolversTypes["documents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_DocumentsArgs, "objects">
  >;
  insert_documents_one?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Documents_OneArgs, "object">
  >;
  insert_guidance?: Resolver<
    Maybe<ResolversTypes["guidance_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_GuidanceArgs, "objects">
  >;
  insert_guidance_one?: Resolver<
    Maybe<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Guidance_OneArgs, "object">
  >;
  insert_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_SessionsArgs, "objects">
  >;
  insert_sessions_one?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Sessions_OneArgs, "object">
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
  insert_verification_tokens?: Resolver<
    Maybe<ResolversTypes["verification_tokens_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_TokensArgs, "objects">
  >;
  insert_verification_tokens_one?: Resolver<
    Maybe<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Verification_Tokens_OneArgs, "object">
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
  update_blocks?: Resolver<
    Maybe<ResolversTypes["blocks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_BlocksArgs, "where">
  >;
  update_blocks_by_pk?: Resolver<
    Maybe<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Blocks_By_PkArgs, "pk_columns">
  >;
  update_blocks_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["blocks_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Blocks_ManyArgs, "updates">
  >;
  update_documents?: Resolver<
    Maybe<ResolversTypes["documents_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_DocumentsArgs, "where">
  >;
  update_documents_by_pk?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Documents_By_PkArgs, "pk_columns">
  >;
  update_documents_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["documents_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Documents_ManyArgs, "updates">
  >;
  update_guidance?: Resolver<
    Maybe<ResolversTypes["guidance_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_GuidanceArgs, "where">
  >;
  update_guidance_by_pk?: Resolver<
    Maybe<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Guidance_By_PkArgs, "pk_columns">
  >;
  update_guidance_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["guidance_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Guidance_ManyArgs, "updates">
  >;
  update_sessions?: Resolver<
    Maybe<ResolversTypes["sessions_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_SessionsArgs, "where">
  >;
  update_sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_By_PkArgs, "pk_columns">
  >;
  update_sessions_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["sessions_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Sessions_ManyArgs, "updates">
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
  update_verification_tokens?: Resolver<
    Maybe<ResolversTypes["verification_tokens_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Verification_TokensArgs, "where">
  >;
  update_verification_tokens_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType,
    RequireFields<
      Mutation_RootUpdate_Verification_Tokens_By_PkArgs,
      "pk_columns"
    >
  >;
  update_verification_tokens_many?: Resolver<
    Maybe<
      Array<Maybe<ResolversTypes["verification_tokens_mutation_response"]>>
    >,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Verification_Tokens_ManyArgs, "updates">
  >;
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
  blocks?: Resolver<
    Array<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    Partial<Query_RootBlocksArgs>
  >;
  blocks_aggregate?: Resolver<
    ResolversTypes["blocks_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootBlocks_AggregateArgs>
  >;
  blocks_by_pk?: Resolver<
    Maybe<ResolversTypes["blocks"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootBlocks_By_PkArgs, "id">
  >;
  documents?: Resolver<
    Array<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    Partial<Query_RootDocumentsArgs>
  >;
  documents_aggregate?: Resolver<
    ResolversTypes["documents_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootDocuments_AggregateArgs>
  >;
  documents_by_pk?: Resolver<
    Maybe<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootDocuments_By_PkArgs, "id">
  >;
  guidance?: Resolver<
    Array<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    Partial<Query_RootGuidanceArgs>
  >;
  guidance_aggregate?: Resolver<
    ResolversTypes["guidance_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootGuidance_AggregateArgs>
  >;
  guidance_by_pk?: Resolver<
    Maybe<ResolversTypes["guidance"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootGuidance_By_PkArgs, "id">
  >;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    Partial<Query_RootSessionsArgs>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootSessions_AggregateArgs>
  >;
  sessions_by_pk?: Resolver<
    Maybe<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootSessions_By_PkArgs, "id">
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
  verification_tokens?: Resolver<
    Array<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType,
    Partial<Query_RootVerification_TokensArgs>
  >;
  verification_tokens_aggregate?: Resolver<
    ResolversTypes["verification_tokens_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootVerification_Tokens_AggregateArgs>
  >;
  verification_tokens_by_pk?: Resolver<
    Maybe<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootVerification_Tokens_By_PkArgs, "token">
  >;
};

export type SessionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions"] = ResolversParentTypes["sessions"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate"] = ResolversParentTypes["sessions_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["sessions_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["sessions"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_aggregate_fields"] = ResolversParentTypes["sessions_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Sessions_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["sessions_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["sessions_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_max_fields"] = ResolversParentTypes["sessions_max_fields"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  sessionToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_min_fields"] = ResolversParentTypes["sessions_min_fields"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  sessionToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Sessions_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["sessions_mutation_response"] = ResolversParentTypes["sessions_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  blocks?: SubscriptionResolver<
    Array<ResolversTypes["blocks"]>,
    "blocks",
    ParentType,
    ContextType,
    Partial<Subscription_RootBlocksArgs>
  >;
  blocks_aggregate?: SubscriptionResolver<
    ResolversTypes["blocks_aggregate"],
    "blocks_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootBlocks_AggregateArgs>
  >;
  blocks_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["blocks"]>,
    "blocks_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootBlocks_By_PkArgs, "id">
  >;
  blocks_stream?: SubscriptionResolver<
    Array<ResolversTypes["blocks"]>,
    "blocks_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootBlocks_StreamArgs, "batch_size" | "cursor">
  >;
  documents?: SubscriptionResolver<
    Array<ResolversTypes["documents"]>,
    "documents",
    ParentType,
    ContextType,
    Partial<Subscription_RootDocumentsArgs>
  >;
  documents_aggregate?: SubscriptionResolver<
    ResolversTypes["documents_aggregate"],
    "documents_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootDocuments_AggregateArgs>
  >;
  documents_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["documents"]>,
    "documents_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootDocuments_By_PkArgs, "id">
  >;
  documents_stream?: SubscriptionResolver<
    Array<ResolversTypes["documents"]>,
    "documents_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootDocuments_StreamArgs,
      "batch_size" | "cursor"
    >
  >;
  guidance?: SubscriptionResolver<
    Array<ResolversTypes["guidance"]>,
    "guidance",
    ParentType,
    ContextType,
    Partial<Subscription_RootGuidanceArgs>
  >;
  guidance_aggregate?: SubscriptionResolver<
    ResolversTypes["guidance_aggregate"],
    "guidance_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootGuidance_AggregateArgs>
  >;
  guidance_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["guidance"]>,
    "guidance_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGuidance_By_PkArgs, "id">
  >;
  guidance_stream?: SubscriptionResolver<
    Array<ResolversTypes["guidance"]>,
    "guidance_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootGuidance_StreamArgs, "batch_size" | "cursor">
  >;
  sessions?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessionsArgs>
  >;
  sessions_aggregate?: SubscriptionResolver<
    ResolversTypes["sessions_aggregate"],
    "sessions_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootSessions_AggregateArgs>
  >;
  sessions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["sessions"]>,
    "sessions_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_By_PkArgs, "id">
  >;
  sessions_stream?: SubscriptionResolver<
    Array<ResolversTypes["sessions"]>,
    "sessions_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootSessions_StreamArgs, "batch_size" | "cursor">
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
  verification_tokens?: SubscriptionResolver<
    Array<ResolversTypes["verification_tokens"]>,
    "verification_tokens",
    ParentType,
    ContextType,
    Partial<Subscription_RootVerification_TokensArgs>
  >;
  verification_tokens_aggregate?: SubscriptionResolver<
    ResolversTypes["verification_tokens_aggregate"],
    "verification_tokens_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootVerification_Tokens_AggregateArgs>
  >;
  verification_tokens_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["verification_tokens"]>,
    "verification_tokens_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootVerification_Tokens_By_PkArgs, "token">
  >;
  verification_tokens_stream?: SubscriptionResolver<
    Array<ResolversTypes["verification_tokens"]>,
    "verification_tokens_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootVerification_Tokens_StreamArgs,
      "batch_size" | "cursor"
    >
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
  documents?: Resolver<
    Array<ResolversTypes["documents"]>,
    ParentType,
    ContextType,
    Partial<UsersDocumentsArgs>
  >;
  documents_aggregate?: Resolver<
    ResolversTypes["documents_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersDocuments_AggregateArgs>
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sessions?: Resolver<
    Array<ResolversTypes["sessions"]>,
    ParentType,
    ContextType,
    Partial<UsersSessionsArgs>
  >;
  sessions_aggregate?: Resolver<
    ResolversTypes["sessions_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersSessions_AggregateArgs>
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

export type Verification_TokensResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens"] = ResolversParentTypes["verification_tokens"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  identifier?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Tokens_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens_aggregate"] = ResolversParentTypes["verification_tokens_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["verification_tokens_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Tokens_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens_aggregate_fields"] = ResolversParentTypes["verification_tokens_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Verification_Tokens_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["verification_tokens_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["verification_tokens_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Tokens_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens_max_fields"] = ResolversParentTypes["verification_tokens_max_fields"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Tokens_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens_min_fields"] = ResolversParentTypes["verification_tokens_min_fields"]
> = {
  expires?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Verification_Tokens_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["verification_tokens_mutation_response"] = ResolversParentTypes["verification_tokens_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["verification_tokens"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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
  blocks?: BlocksResolvers<ContextType>;
  blocks_aggregate?: Blocks_AggregateResolvers<ContextType>;
  blocks_aggregate_fields?: Blocks_Aggregate_FieldsResolvers<ContextType>;
  blocks_avg_fields?: Blocks_Avg_FieldsResolvers<ContextType>;
  blocks_max_fields?: Blocks_Max_FieldsResolvers<ContextType>;
  blocks_min_fields?: Blocks_Min_FieldsResolvers<ContextType>;
  blocks_mutation_response?: Blocks_Mutation_ResponseResolvers<ContextType>;
  blocks_stddev_fields?: Blocks_Stddev_FieldsResolvers<ContextType>;
  blocks_stddev_pop_fields?: Blocks_Stddev_Pop_FieldsResolvers<ContextType>;
  blocks_stddev_samp_fields?: Blocks_Stddev_Samp_FieldsResolvers<ContextType>;
  blocks_sum_fields?: Blocks_Sum_FieldsResolvers<ContextType>;
  blocks_var_pop_fields?: Blocks_Var_Pop_FieldsResolvers<ContextType>;
  blocks_var_samp_fields?: Blocks_Var_Samp_FieldsResolvers<ContextType>;
  blocks_variance_fields?: Blocks_Variance_FieldsResolvers<ContextType>;
  documents?: DocumentsResolvers<ContextType>;
  documents_aggregate?: Documents_AggregateResolvers<ContextType>;
  documents_aggregate_fields?: Documents_Aggregate_FieldsResolvers<ContextType>;
  documents_max_fields?: Documents_Max_FieldsResolvers<ContextType>;
  documents_min_fields?: Documents_Min_FieldsResolvers<ContextType>;
  documents_mutation_response?: Documents_Mutation_ResponseResolvers<ContextType>;
  guidance?: GuidanceResolvers<ContextType>;
  guidance_aggregate?: Guidance_AggregateResolvers<ContextType>;
  guidance_aggregate_fields?: Guidance_Aggregate_FieldsResolvers<ContextType>;
  guidance_max_fields?: Guidance_Max_FieldsResolvers<ContextType>;
  guidance_min_fields?: Guidance_Min_FieldsResolvers<ContextType>;
  guidance_mutation_response?: Guidance_Mutation_ResponseResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  sessions?: SessionsResolvers<ContextType>;
  sessions_aggregate?: Sessions_AggregateResolvers<ContextType>;
  sessions_aggregate_fields?: Sessions_Aggregate_FieldsResolvers<ContextType>;
  sessions_max_fields?: Sessions_Max_FieldsResolvers<ContextType>;
  sessions_min_fields?: Sessions_Min_FieldsResolvers<ContextType>;
  sessions_mutation_response?: Sessions_Mutation_ResponseResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
  verification_tokens?: Verification_TokensResolvers<ContextType>;
  verification_tokens_aggregate?: Verification_Tokens_AggregateResolvers<ContextType>;
  verification_tokens_aggregate_fields?: Verification_Tokens_Aggregate_FieldsResolvers<ContextType>;
  verification_tokens_max_fields?: Verification_Tokens_Max_FieldsResolvers<ContextType>;
  verification_tokens_min_fields?: Verification_Tokens_Min_FieldsResolvers<ContextType>;
  verification_tokens_mutation_response?: Verification_Tokens_Mutation_ResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
