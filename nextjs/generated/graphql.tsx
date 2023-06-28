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

export type CrmDonor = {
  __typename?: "CRMDonor";
  avatar: Scalars["String"];
  id: Scalars["String"];
  momentum?: Maybe<Donors>;
  name: Scalars["String"];
  uuid: Scalars["ID"];
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "donors" */
export type Donors = {
  __typename?: "donors";
  crm?: Maybe<CrmDonor>;
  crm_id: Scalars["String"];
  id: Scalars["uuid"];
  /** An object relationship */
  portfolio?: Maybe<Portfolios>;
  portfolio_id: Scalars["uuid"];
  touches?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "donors" */
export type Donors_Aggregate = {
  __typename?: "donors_aggregate";
  aggregate?: Maybe<Donors_Aggregate_Fields>;
  nodes: Array<Donors>;
};

export type Donors_Aggregate_Bool_Exp = {
  count?: InputMaybe<Donors_Aggregate_Bool_Exp_Count>;
};

export type Donors_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Donors_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Donors_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "donors" */
export type Donors_Aggregate_Fields = {
  __typename?: "donors_aggregate_fields";
  avg?: Maybe<Donors_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Donors_Max_Fields>;
  min?: Maybe<Donors_Min_Fields>;
  stddev?: Maybe<Donors_Stddev_Fields>;
  stddev_pop?: Maybe<Donors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Donors_Stddev_Samp_Fields>;
  sum?: Maybe<Donors_Sum_Fields>;
  var_pop?: Maybe<Donors_Var_Pop_Fields>;
  var_samp?: Maybe<Donors_Var_Samp_Fields>;
  variance?: Maybe<Donors_Variance_Fields>;
};

/** aggregate fields of "donors" */
export type Donors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Donors_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "donors" */
export type Donors_Aggregate_Order_By = {
  avg?: InputMaybe<Donors_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Donors_Max_Order_By>;
  min?: InputMaybe<Donors_Min_Order_By>;
  stddev?: InputMaybe<Donors_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Donors_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Donors_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Donors_Sum_Order_By>;
  var_pop?: InputMaybe<Donors_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Donors_Var_Samp_Order_By>;
  variance?: InputMaybe<Donors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "donors" */
export type Donors_Arr_Rel_Insert_Input = {
  data: Array<Donors_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Donors_On_Conflict>;
};

/** aggregate avg on columns */
export type Donors_Avg_Fields = {
  __typename?: "donors_avg_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "donors" */
export type Donors_Avg_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "donors". All fields are combined with a logical 'AND'. */
export type Donors_Bool_Exp = {
  _and?: InputMaybe<Array<Donors_Bool_Exp>>;
  _not?: InputMaybe<Donors_Bool_Exp>;
  _or?: InputMaybe<Array<Donors_Bool_Exp>>;
  crm_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  portfolio?: InputMaybe<Portfolios_Bool_Exp>;
  portfolio_id?: InputMaybe<Uuid_Comparison_Exp>;
  touches?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "donors" */
export enum Donors_Constraint {
  /** unique or primary key constraint on columns "id" */
  DonorsPkey = "donors_pkey",
}

/** input type for incrementing numeric columns in table "donors" */
export type Donors_Inc_Input = {
  touches?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "donors" */
export type Donors_Insert_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  portfolio?: InputMaybe<Portfolios_Obj_Rel_Insert_Input>;
  portfolio_id?: InputMaybe<Scalars["uuid"]>;
  touches?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Donors_Max_Fields = {
  __typename?: "donors_max_fields";
  crm_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  portfolio_id?: Maybe<Scalars["uuid"]>;
  touches?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "donors" */
export type Donors_Max_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  portfolio_id?: InputMaybe<Order_By>;
  touches?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Donors_Min_Fields = {
  __typename?: "donors_min_fields";
  crm_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  portfolio_id?: Maybe<Scalars["uuid"]>;
  touches?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "donors" */
export type Donors_Min_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  portfolio_id?: InputMaybe<Order_By>;
  touches?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "donors" */
export type Donors_Mutation_Response = {
  __typename?: "donors_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Donors>;
};

/** on_conflict condition type for table "donors" */
export type Donors_On_Conflict = {
  constraint: Donors_Constraint;
  update_columns?: Array<Donors_Update_Column>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

/** Ordering options when selecting data from "donors". */
export type Donors_Order_By = {
  crm_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  portfolio?: InputMaybe<Portfolios_Order_By>;
  portfolio_id?: InputMaybe<Order_By>;
  touches?: InputMaybe<Order_By>;
};

/** primary key columns input for table: donors */
export type Donors_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "donors" */
export enum Donors_Select_Column {
  /** column name */
  CrmId = "crm_id",
  /** column name */
  Id = "id",
  /** column name */
  PortfolioId = "portfolio_id",
  /** column name */
  Touches = "touches",
}

/** input type for updating data in table "donors" */
export type Donors_Set_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  portfolio_id?: InputMaybe<Scalars["uuid"]>;
  touches?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Donors_Stddev_Fields = {
  __typename?: "donors_stddev_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "donors" */
export type Donors_Stddev_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Donors_Stddev_Pop_Fields = {
  __typename?: "donors_stddev_pop_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "donors" */
export type Donors_Stddev_Pop_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Donors_Stddev_Samp_Fields = {
  __typename?: "donors_stddev_samp_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "donors" */
export type Donors_Stddev_Samp_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "donors" */
export type Donors_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Donors_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Donors_Stream_Cursor_Value_Input = {
  crm_id?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  portfolio_id?: InputMaybe<Scalars["uuid"]>;
  touches?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Donors_Sum_Fields = {
  __typename?: "donors_sum_fields";
  touches?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "donors" */
export type Donors_Sum_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** update columns of table "donors" */
export enum Donors_Update_Column {
  /** column name */
  CrmId = "crm_id",
  /** column name */
  Id = "id",
  /** column name */
  PortfolioId = "portfolio_id",
  /** column name */
  Touches = "touches",
}

export type Donors_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Donors_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Donors_Set_Input>;
  /** filter the rows which have to be updated */
  where: Donors_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Donors_Var_Pop_Fields = {
  __typename?: "donors_var_pop_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "donors" */
export type Donors_Var_Pop_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Donors_Var_Samp_Fields = {
  __typename?: "donors_var_samp_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "donors" */
export type Donors_Var_Samp_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Donors_Variance_Fields = {
  __typename?: "donors_variance_fields";
  touches?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "donors" */
export type Donors_Variance_Order_By = {
  touches?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "donors" */
  delete_donors?: Maybe<Donors_Mutation_Response>;
  /** delete single row from the table: "donors" */
  delete_donors_by_pk?: Maybe<Donors>;
  /** delete data from the table: "org_memberships" */
  delete_org_memberships?: Maybe<Org_Memberships_Mutation_Response>;
  /** delete single row from the table: "org_memberships" */
  delete_org_memberships_by_pk?: Maybe<Org_Memberships>;
  /** delete data from the table: "orgs" */
  delete_orgs?: Maybe<Orgs_Mutation_Response>;
  /** delete single row from the table: "orgs" */
  delete_orgs_by_pk?: Maybe<Orgs>;
  /** delete data from the table: "portfolios" */
  delete_portfolios?: Maybe<Portfolios_Mutation_Response>;
  /** delete single row from the table: "portfolios" */
  delete_portfolios_by_pk?: Maybe<Portfolios>;
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
  /** insert data into the table: "donors" */
  insert_donors?: Maybe<Donors_Mutation_Response>;
  /** insert a single row into the table: "donors" */
  insert_donors_one?: Maybe<Donors>;
  /** insert data into the table: "org_memberships" */
  insert_org_memberships?: Maybe<Org_Memberships_Mutation_Response>;
  /** insert a single row into the table: "org_memberships" */
  insert_org_memberships_one?: Maybe<Org_Memberships>;
  /** insert data into the table: "orgs" */
  insert_orgs?: Maybe<Orgs_Mutation_Response>;
  /** insert a single row into the table: "orgs" */
  insert_orgs_one?: Maybe<Orgs>;
  /** insert data into the table: "portfolios" */
  insert_portfolios?: Maybe<Portfolios_Mutation_Response>;
  /** insert a single row into the table: "portfolios" */
  insert_portfolios_one?: Maybe<Portfolios>;
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
  simulateSendEmail: Scalars["String"];
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "donors" */
  update_donors?: Maybe<Donors_Mutation_Response>;
  /** update single row of the table: "donors" */
  update_donors_by_pk?: Maybe<Donors>;
  /** update multiples rows of table: "donors" */
  update_donors_many?: Maybe<Array<Maybe<Donors_Mutation_Response>>>;
  /** update data of the table: "org_memberships" */
  update_org_memberships?: Maybe<Org_Memberships_Mutation_Response>;
  /** update single row of the table: "org_memberships" */
  update_org_memberships_by_pk?: Maybe<Org_Memberships>;
  /** update multiples rows of table: "org_memberships" */
  update_org_memberships_many?: Maybe<
    Array<Maybe<Org_Memberships_Mutation_Response>>
  >;
  /** update data of the table: "orgs" */
  update_orgs?: Maybe<Orgs_Mutation_Response>;
  /** update single row of the table: "orgs" */
  update_orgs_by_pk?: Maybe<Orgs>;
  /** update multiples rows of table: "orgs" */
  update_orgs_many?: Maybe<Array<Maybe<Orgs_Mutation_Response>>>;
  /** update data of the table: "portfolios" */
  update_portfolios?: Maybe<Portfolios_Mutation_Response>;
  /** update single row of the table: "portfolios" */
  update_portfolios_by_pk?: Maybe<Portfolios>;
  /** update multiples rows of table: "portfolios" */
  update_portfolios_many?: Maybe<Array<Maybe<Portfolios_Mutation_Response>>>;
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
export type Mutation_RootDelete_DonorsArgs = {
  where: Donors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Donors_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_Org_MembershipsArgs = {
  where: Org_Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Org_Memberships_By_PkArgs = {
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
export type Mutation_RootDelete_PortfoliosArgs = {
  where: Portfolios_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Portfolios_By_PkArgs = {
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
export type Mutation_RootInsert_DonorsArgs = {
  objects: Array<Donors_Insert_Input>;
  on_conflict?: InputMaybe<Donors_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Donors_OneArgs = {
  object: Donors_Insert_Input;
  on_conflict?: InputMaybe<Donors_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_MembershipsArgs = {
  objects: Array<Org_Memberships_Insert_Input>;
  on_conflict?: InputMaybe<Org_Memberships_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Org_Memberships_OneArgs = {
  object: Org_Memberships_Insert_Input;
  on_conflict?: InputMaybe<Org_Memberships_On_Conflict>;
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
export type Mutation_RootInsert_PortfoliosArgs = {
  objects: Array<Portfolios_Insert_Input>;
  on_conflict?: InputMaybe<Portfolios_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Portfolios_OneArgs = {
  object: Portfolios_Insert_Input;
  on_conflict?: InputMaybe<Portfolios_On_Conflict>;
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
export type Mutation_RootUpdate_DonorsArgs = {
  _inc?: InputMaybe<Donors_Inc_Input>;
  _set?: InputMaybe<Donors_Set_Input>;
  where: Donors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Donors_By_PkArgs = {
  _inc?: InputMaybe<Donors_Inc_Input>;
  _set?: InputMaybe<Donors_Set_Input>;
  pk_columns: Donors_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Donors_ManyArgs = {
  updates: Array<Donors_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Org_MembershipsArgs = {
  _set?: InputMaybe<Org_Memberships_Set_Input>;
  where: Org_Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Org_Memberships_By_PkArgs = {
  _set?: InputMaybe<Org_Memberships_Set_Input>;
  pk_columns: Org_Memberships_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Org_Memberships_ManyArgs = {
  updates: Array<Org_Memberships_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_OrgsArgs = {
  _set?: InputMaybe<Orgs_Set_Input>;
  where: Orgs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orgs_By_PkArgs = {
  _set?: InputMaybe<Orgs_Set_Input>;
  pk_columns: Orgs_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Orgs_ManyArgs = {
  updates: Array<Orgs_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PortfoliosArgs = {
  _set?: InputMaybe<Portfolios_Set_Input>;
  where: Portfolios_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Portfolios_By_PkArgs = {
  _set?: InputMaybe<Portfolios_Set_Input>;
  pk_columns: Portfolios_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Portfolios_ManyArgs = {
  updates: Array<Portfolios_Updates>;
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

/** columns and relationships of "org_memberships" */
export type Org_Memberships = {
  __typename?: "org_memberships";
  id: Scalars["uuid"];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id: Scalars["uuid"];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "org_memberships" */
export type Org_Memberships_Aggregate = {
  __typename?: "org_memberships_aggregate";
  aggregate?: Maybe<Org_Memberships_Aggregate_Fields>;
  nodes: Array<Org_Memberships>;
};

export type Org_Memberships_Aggregate_Bool_Exp = {
  count?: InputMaybe<Org_Memberships_Aggregate_Bool_Exp_Count>;
};

export type Org_Memberships_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Org_Memberships_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "org_memberships" */
export type Org_Memberships_Aggregate_Fields = {
  __typename?: "org_memberships_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Org_Memberships_Max_Fields>;
  min?: Maybe<Org_Memberships_Min_Fields>;
};

/** aggregate fields of "org_memberships" */
export type Org_Memberships_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "org_memberships" */
export type Org_Memberships_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Org_Memberships_Max_Order_By>;
  min?: InputMaybe<Org_Memberships_Min_Order_By>;
};

/** input type for inserting array relation for remote table "org_memberships" */
export type Org_Memberships_Arr_Rel_Insert_Input = {
  data: Array<Org_Memberships_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Org_Memberships_On_Conflict>;
};

/** Boolean expression to filter rows from the table "org_memberships". All fields are combined with a logical 'AND'. */
export type Org_Memberships_Bool_Exp = {
  _and?: InputMaybe<Array<Org_Memberships_Bool_Exp>>;
  _not?: InputMaybe<Org_Memberships_Bool_Exp>;
  _or?: InputMaybe<Array<Org_Memberships_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  org?: InputMaybe<Orgs_Bool_Exp>;
  org_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_memberships" */
export enum Org_Memberships_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgMembershipsPkey = "org_memberships_pkey",
}

/** input type for inserting data into table "org_memberships" */
export type Org_Memberships_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  org?: InputMaybe<Orgs_Obj_Rel_Insert_Input>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Org_Memberships_Max_Fields = {
  __typename?: "org_memberships_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  org_id?: Maybe<Scalars["uuid"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "org_memberships" */
export type Org_Memberships_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Org_Memberships_Min_Fields = {
  __typename?: "org_memberships_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  org_id?: Maybe<Scalars["uuid"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "org_memberships" */
export type Org_Memberships_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "org_memberships" */
export type Org_Memberships_Mutation_Response = {
  __typename?: "org_memberships_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Org_Memberships>;
};

/** on_conflict condition type for table "org_memberships" */
export type Org_Memberships_On_Conflict = {
  constraint: Org_Memberships_Constraint;
  update_columns?: Array<Org_Memberships_Update_Column>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

/** Ordering options when selecting data from "org_memberships". */
export type Org_Memberships_Order_By = {
  id?: InputMaybe<Order_By>;
  org?: InputMaybe<Orgs_Order_By>;
  org_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: org_memberships */
export type Org_Memberships_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "org_memberships" */
export enum Org_Memberships_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  OrgId = "org_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "org_memberships" */
export type Org_Memberships_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "org_memberships" */
export type Org_Memberships_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Org_Memberships_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Org_Memberships_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "org_memberships" */
export enum Org_Memberships_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  OrgId = "org_id",
  /** column name */
  UserId = "user_id",
}

export type Org_Memberships_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Org_Memberships_Set_Input>;
  /** filter the rows which have to be updated */
  where: Org_Memberships_Bool_Exp;
};

/** columns and relationships of "orgs" */
export type Orgs = {
  __typename?: "orgs";
  id: Scalars["uuid"];
  /** An array relationship */
  members: Array<Org_Memberships>;
  /** An aggregate relationship */
  members_aggregate: Org_Memberships_Aggregate;
  name: Scalars["String"];
  /** An array relationship */
  portfolios: Array<Portfolios>;
  /** An aggregate relationship */
  portfolios_aggregate: Portfolios_Aggregate;
};

/** columns and relationships of "orgs" */
export type OrgsMembersArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsPortfoliosArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

/** columns and relationships of "orgs" */
export type OrgsPortfolios_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
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

/** Boolean expression to filter rows from the table "orgs". All fields are combined with a logical 'AND'. */
export type Orgs_Bool_Exp = {
  _and?: InputMaybe<Array<Orgs_Bool_Exp>>;
  _not?: InputMaybe<Orgs_Bool_Exp>;
  _or?: InputMaybe<Array<Orgs_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  members?: InputMaybe<Org_Memberships_Bool_Exp>;
  members_aggregate?: InputMaybe<Org_Memberships_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  portfolios?: InputMaybe<Portfolios_Bool_Exp>;
  portfolios_aggregate?: InputMaybe<Portfolios_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "orgs" */
export enum Orgs_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrgsPkey = "orgs_pkey",
}

/** input type for inserting data into table "orgs" */
export type Orgs_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  members?: InputMaybe<Org_Memberships_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars["String"]>;
  portfolios?: InputMaybe<Portfolios_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orgs_Max_Fields = {
  __typename?: "orgs_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Orgs_Min_Fields = {
  __typename?: "orgs_min_fields";
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
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Org_Memberships_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  portfolios_aggregate?: InputMaybe<Portfolios_Aggregate_Order_By>;
};

/** primary key columns input for table: orgs */
export type Orgs_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "orgs" */
export enum Orgs_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "orgs" */
export type Orgs_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
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
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "orgs" */
export enum Orgs_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type Orgs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orgs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orgs_Bool_Exp;
};

/** columns and relationships of "portfolios" */
export type Portfolios = {
  __typename?: "portfolios";
  id: Scalars["uuid"];
  /** An array relationship */
  members: Array<Donors>;
  /** An aggregate relationship */
  members_aggregate: Donors_Aggregate;
  name: Scalars["String"];
  /** An object relationship */
  org?: Maybe<Orgs>;
  org_id: Scalars["uuid"];
};

/** columns and relationships of "portfolios" */
export type PortfoliosMembersArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

/** columns and relationships of "portfolios" */
export type PortfoliosMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

/** aggregated selection of "portfolios" */
export type Portfolios_Aggregate = {
  __typename?: "portfolios_aggregate";
  aggregate?: Maybe<Portfolios_Aggregate_Fields>;
  nodes: Array<Portfolios>;
};

export type Portfolios_Aggregate_Bool_Exp = {
  count?: InputMaybe<Portfolios_Aggregate_Bool_Exp_Count>;
};

export type Portfolios_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Portfolios_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Portfolios_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "portfolios" */
export type Portfolios_Aggregate_Fields = {
  __typename?: "portfolios_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Portfolios_Max_Fields>;
  min?: Maybe<Portfolios_Min_Fields>;
};

/** aggregate fields of "portfolios" */
export type Portfolios_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Portfolios_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "portfolios" */
export type Portfolios_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Portfolios_Max_Order_By>;
  min?: InputMaybe<Portfolios_Min_Order_By>;
};

/** input type for inserting array relation for remote table "portfolios" */
export type Portfolios_Arr_Rel_Insert_Input = {
  data: Array<Portfolios_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Portfolios_On_Conflict>;
};

/** Boolean expression to filter rows from the table "portfolios". All fields are combined with a logical 'AND'. */
export type Portfolios_Bool_Exp = {
  _and?: InputMaybe<Array<Portfolios_Bool_Exp>>;
  _not?: InputMaybe<Portfolios_Bool_Exp>;
  _or?: InputMaybe<Array<Portfolios_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  members?: InputMaybe<Donors_Bool_Exp>;
  members_aggregate?: InputMaybe<Donors_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  org?: InputMaybe<Orgs_Bool_Exp>;
  org_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "portfolios" */
export enum Portfolios_Constraint {
  /** unique or primary key constraint on columns "id" */
  PortfoliosPkey = "portfolios_pkey",
}

/** input type for inserting data into table "portfolios" */
export type Portfolios_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  members?: InputMaybe<Donors_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars["String"]>;
  org?: InputMaybe<Orgs_Obj_Rel_Insert_Input>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Portfolios_Max_Fields = {
  __typename?: "portfolios_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  org_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "portfolios" */
export type Portfolios_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Portfolios_Min_Fields = {
  __typename?: "portfolios_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  org_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "portfolios" */
export type Portfolios_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "portfolios" */
export type Portfolios_Mutation_Response = {
  __typename?: "portfolios_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Portfolios>;
};

/** input type for inserting object relation for remote table "portfolios" */
export type Portfolios_Obj_Rel_Insert_Input = {
  data: Portfolios_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Portfolios_On_Conflict>;
};

/** on_conflict condition type for table "portfolios" */
export type Portfolios_On_Conflict = {
  constraint: Portfolios_Constraint;
  update_columns?: Array<Portfolios_Update_Column>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

/** Ordering options when selecting data from "portfolios". */
export type Portfolios_Order_By = {
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Donors_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  org?: InputMaybe<Orgs_Order_By>;
  org_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: portfolios */
export type Portfolios_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "portfolios" */
export enum Portfolios_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrgId = "org_id",
}

/** input type for updating data in table "portfolios" */
export type Portfolios_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "portfolios" */
export type Portfolios_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Portfolios_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Portfolios_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  org_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "portfolios" */
export enum Portfolios_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrgId = "org_id",
}

export type Portfolios_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Portfolios_Set_Input>;
  /** filter the rows which have to be updated */
  where: Portfolios_Bool_Exp;
};

export type Query_Root = {
  __typename?: "query_root";
  CRMDonor?: Maybe<CrmDonor>;
  CRMDonors?: Maybe<Array<Maybe<CrmDonor>>>;
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "donors" */
  donors: Array<Donors>;
  /** fetch aggregated fields from the table: "donors" */
  donors_aggregate: Donors_Aggregate;
  /** fetch data from the table: "donors" using primary key columns */
  donors_by_pk?: Maybe<Donors>;
  /** fetch data from the table: "org_memberships" */
  org_memberships: Array<Org_Memberships>;
  /** fetch aggregated fields from the table: "org_memberships" */
  org_memberships_aggregate: Org_Memberships_Aggregate;
  /** fetch data from the table: "org_memberships" using primary key columns */
  org_memberships_by_pk?: Maybe<Org_Memberships>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** An array relationship */
  portfolios: Array<Portfolios>;
  /** An aggregate relationship */
  portfolios_aggregate: Portfolios_Aggregate;
  /** fetch data from the table: "portfolios" using primary key columns */
  portfolios_by_pk?: Maybe<Portfolios>;
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

export type Query_RootCrmDonorArgs = {
  id?: InputMaybe<Scalars["String"]>;
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

export type Query_RootDonorsArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

export type Query_RootDonors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

export type Query_RootDonors_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootOrg_MembershipsArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

export type Query_RootOrg_Memberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

export type Query_RootOrg_Memberships_By_PkArgs = {
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

export type Query_RootPortfoliosArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

export type Query_RootPortfolios_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

export type Query_RootPortfolios_By_PkArgs = {
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
  /** fetch data from the table: "donors" */
  donors: Array<Donors>;
  /** fetch aggregated fields from the table: "donors" */
  donors_aggregate: Donors_Aggregate;
  /** fetch data from the table: "donors" using primary key columns */
  donors_by_pk?: Maybe<Donors>;
  /** fetch data from the table in a streaming manner: "donors" */
  donors_stream: Array<Donors>;
  /** fetch data from the table: "org_memberships" */
  org_memberships: Array<Org_Memberships>;
  /** fetch aggregated fields from the table: "org_memberships" */
  org_memberships_aggregate: Org_Memberships_Aggregate;
  /** fetch data from the table: "org_memberships" using primary key columns */
  org_memberships_by_pk?: Maybe<Org_Memberships>;
  /** fetch data from the table in a streaming manner: "org_memberships" */
  org_memberships_stream: Array<Org_Memberships>;
  /** fetch data from the table: "orgs" */
  orgs: Array<Orgs>;
  /** fetch aggregated fields from the table: "orgs" */
  orgs_aggregate: Orgs_Aggregate;
  /** fetch data from the table: "orgs" using primary key columns */
  orgs_by_pk?: Maybe<Orgs>;
  /** fetch data from the table in a streaming manner: "orgs" */
  orgs_stream: Array<Orgs>;
  /** An array relationship */
  portfolios: Array<Portfolios>;
  /** An aggregate relationship */
  portfolios_aggregate: Portfolios_Aggregate;
  /** fetch data from the table: "portfolios" using primary key columns */
  portfolios_by_pk?: Maybe<Portfolios>;
  /** fetch data from the table in a streaming manner: "portfolios" */
  portfolios_stream: Array<Portfolios>;
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

export type Subscription_RootDonorsArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

export type Subscription_RootDonors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donors_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Donors_Order_By>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

export type Subscription_RootDonors_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDonors_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Donors_Stream_Cursor_Input>>;
  where?: InputMaybe<Donors_Bool_Exp>;
};

export type Subscription_RootOrg_MembershipsArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

export type Subscription_RootOrg_Memberships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

export type Subscription_RootOrg_Memberships_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootOrg_Memberships_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Org_Memberships_Stream_Cursor_Input>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
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

export type Subscription_RootPortfoliosArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

export type Subscription_RootPortfolios_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Portfolios_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Portfolios_Order_By>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
};

export type Subscription_RootPortfolios_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootPortfolios_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Portfolios_Stream_Cursor_Input>>;
  where?: InputMaybe<Portfolios_Bool_Exp>;
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
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["uuid"];
  image?: Maybe<Scalars["String"]>;
  is_admin: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  /** An array relationship */
  orgs: Array<Org_Memberships>;
  /** An aggregate relationship */
  orgs_aggregate: Org_Memberships_Aggregate;
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
export type UsersOrgsArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersOrgs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Memberships_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Org_Memberships_Order_By>>;
  where?: InputMaybe<Org_Memberships_Bool_Exp>;
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
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orgs?: InputMaybe<Org_Memberships_Bool_Exp>;
  orgs_aggregate?: InputMaybe<Org_Memberships_Aggregate_Bool_Exp>;
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
  email?: InputMaybe<Scalars["String"]>;
  emailVerified?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  is_admin?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  orgs?: InputMaybe<Org_Memberships_Arr_Rel_Insert_Input>;
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
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orgs_aggregate?: InputMaybe<Org_Memberships_Aggregate_Order_By>;
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
  IsAdmin = "is_admin",
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

export type GetDonorQueryVariables = Exact<{
  donorID: Scalars["uuid"];
}>;

export type GetDonorQuery = {
  __typename?: "query_root";
  donors_by_pk?:
    | {
        __typename?: "donors";
        id: any;
        touches?: number | undefined;
        crm?:
          | {
              __typename?: "CRMDonor";
              name: string;
              id: string;
              avatar: string;
            }
          | undefined;
      }
    | undefined;
};

export type IncrementTouchMutationVariables = Exact<{
  infoID: Scalars["uuid"];
}>;

export type IncrementTouchMutation = {
  __typename?: "mutation_root";
  update_donors_by_pk?:
    | { __typename?: "donors"; id: any; touches?: number | undefined }
    | undefined;
};

export type SimulateSendEmailMutationVariables = Exact<{
  [key: string]: never;
}>;

export type SimulateSendEmailMutation = {
  __typename?: "mutation_root";
  simulateSendEmail: string;
};

export type AssignToPortfolioMutationVariables = Exact<{
  portfolioID: Scalars["uuid"];
  crmID: Scalars["String"];
}>;

export type AssignToPortfolioMutation = {
  __typename?: "mutation_root";
  insert_donors_one?: { __typename?: "donors"; id: any } | undefined;
};

export type DeletePortfolioMutationVariables = Exact<{
  portfolioID: Scalars["uuid"];
}>;

export type DeletePortfolioMutation = {
  __typename?: "mutation_root";
  delete_portfolios_by_pk?: { __typename?: "portfolios"; id: any } | undefined;
};

export type GetPortfolioQueryVariables = Exact<{
  portfolioID: Scalars["uuid"];
}>;

export type GetPortfolioQuery = {
  __typename?: "query_root";
  portfolios_by_pk?:
    | {
        __typename?: "portfolios";
        id: any;
        name: string;
        members: Array<{
          __typename?: "donors";
          id: any;
          crm?:
            | {
                __typename?: "CRMDonor";
                id: string;
                name: string;
                avatar: string;
                momentum?:
                  | {
                      __typename?: "donors";
                      id: any;
                      touches?: number | undefined;
                    }
                  | undefined;
              }
            | undefined;
        }>;
      }
    | undefined;
};

export type GetUnassignedQueryVariables = Exact<{ [key: string]: never }>;

export type GetUnassignedQuery = {
  __typename?: "query_root";
  CRMDonors?:
    | Array<
        | {
            __typename?: "CRMDonor";
            id: string;
            name: string;
            avatar: string;
            momentum?:
              | { __typename?: "donors"; id: any; portfolio_id: any }
              | undefined;
          }
        | undefined
      >
    | undefined;
};

export type AddPortfolioMutationVariables = Exact<{
  name: Scalars["String"];
  org_id: Scalars["uuid"];
}>;

export type AddPortfolioMutation = {
  __typename?: "mutation_root";
  insert_portfolios_one?: { __typename?: "portfolios"; id: any } | undefined;
};

export type AssignOrgMutationVariables = Exact<{
  userID: Scalars["uuid"];
  orgID: Scalars["uuid"];
}>;

export type AssignOrgMutation = {
  __typename?: "mutation_root";
  insert_org_memberships_one?:
    | { __typename?: "org_memberships"; id: any }
    | undefined;
};

export type CreateOrgMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreateOrgMutation = {
  __typename?: "mutation_root";
  insert_orgs_one?: { __typename?: "orgs"; id: any } | undefined;
};

export type GetPortfoliosQueryVariables = Exact<{
  ownerID: Scalars["uuid"];
}>;

export type GetPortfoliosQuery = {
  __typename?: "query_root";
  users_by_pk?:
    | {
        __typename?: "users";
        id: any;
        name?: string | undefined;
        email?: string | undefined;
        orgs: Array<{
          __typename?: "org_memberships";
          org?:
            | {
                __typename?: "orgs";
                id: any;
                name: string;
                portfolios: Array<{
                  __typename?: "portfolios";
                  id: any;
                  name: string;
                }>;
              }
            | undefined;
        }>;
      }
    | undefined;
};

export const GetDonorDocument = gql`
  query GetDonor($donorID: uuid!) {
    donors_by_pk(id: $donorID) {
      id
      touches
      crm {
        name
        id
        avatar
      }
    }
  }
`;
export type GetDonorComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetDonorQuery,
    GetDonorQueryVariables
  >,
  "query"
> &
  ({ variables: GetDonorQueryVariables; skip?: boolean } | { skip: boolean });

export const GetDonorComponent = (props: GetDonorComponentProps) => (
  <ApolloReactComponents.Query<GetDonorQuery, GetDonorQueryVariables>
    query={GetDonorDocument}
    {...props}
  />
);

/**
 * __useGetDonorQuery__
 *
 * To run a query within a React component, call `useGetDonorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDonorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDonorQuery({
 *   variables: {
 *      donorID: // value for 'donorID'
 *   },
 * });
 */
export function useGetDonorQuery(
  baseOptions: Apollo.QueryHookOptions<GetDonorQuery, GetDonorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDonorQuery, GetDonorQueryVariables>(
    GetDonorDocument,
    options
  );
}
export function useGetDonorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDonorQuery,
    GetDonorQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDonorQuery, GetDonorQueryVariables>(
    GetDonorDocument,
    options
  );
}
export type GetDonorQueryHookResult = ReturnType<typeof useGetDonorQuery>;
export type GetDonorLazyQueryHookResult = ReturnType<
  typeof useGetDonorLazyQuery
>;
export type GetDonorQueryResult = Apollo.QueryResult<
  GetDonorQuery,
  GetDonorQueryVariables
>;
export const IncrementTouchDocument = gql`
  mutation IncrementTouch($infoID: uuid!) {
    update_donors_by_pk(pk_columns: { id: $infoID }, _inc: { touches: 1 }) {
      id
      touches
    }
  }
`;
export type IncrementTouchMutationFn = Apollo.MutationFunction<
  IncrementTouchMutation,
  IncrementTouchMutationVariables
>;
export type IncrementTouchComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    IncrementTouchMutation,
    IncrementTouchMutationVariables
  >,
  "mutation"
>;

export const IncrementTouchComponent = (
  props: IncrementTouchComponentProps
) => (
  <ApolloReactComponents.Mutation<
    IncrementTouchMutation,
    IncrementTouchMutationVariables
  >
    mutation={IncrementTouchDocument}
    {...props}
  />
);

/**
 * __useIncrementTouchMutation__
 *
 * To run a mutation, you first call `useIncrementTouchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementTouchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementTouchMutation, { data, loading, error }] = useIncrementTouchMutation({
 *   variables: {
 *      infoID: // value for 'infoID'
 *   },
 * });
 */
export function useIncrementTouchMutation(
  baseOptions?: Apollo.MutationHookOptions<
    IncrementTouchMutation,
    IncrementTouchMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    IncrementTouchMutation,
    IncrementTouchMutationVariables
  >(IncrementTouchDocument, options);
}
export type IncrementTouchMutationHookResult = ReturnType<
  typeof useIncrementTouchMutation
>;
export type IncrementTouchMutationResult =
  Apollo.MutationResult<IncrementTouchMutation>;
export type IncrementTouchMutationOptions = Apollo.BaseMutationOptions<
  IncrementTouchMutation,
  IncrementTouchMutationVariables
>;
export const SimulateSendEmailDocument = gql`
  mutation SimulateSendEmail {
    simulateSendEmail(to: "i@dom.vin", subject: "Hi Dom")
  }
`;
export type SimulateSendEmailMutationFn = Apollo.MutationFunction<
  SimulateSendEmailMutation,
  SimulateSendEmailMutationVariables
>;
export type SimulateSendEmailComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    SimulateSendEmailMutation,
    SimulateSendEmailMutationVariables
  >,
  "mutation"
>;

export const SimulateSendEmailComponent = (
  props: SimulateSendEmailComponentProps
) => (
  <ApolloReactComponents.Mutation<
    SimulateSendEmailMutation,
    SimulateSendEmailMutationVariables
  >
    mutation={SimulateSendEmailDocument}
    {...props}
  />
);

/**
 * __useSimulateSendEmailMutation__
 *
 * To run a mutation, you first call `useSimulateSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSimulateSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [simulateSendEmailMutation, { data, loading, error }] = useSimulateSendEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useSimulateSendEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SimulateSendEmailMutation,
    SimulateSendEmailMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SimulateSendEmailMutation,
    SimulateSendEmailMutationVariables
  >(SimulateSendEmailDocument, options);
}
export type SimulateSendEmailMutationHookResult = ReturnType<
  typeof useSimulateSendEmailMutation
>;
export type SimulateSendEmailMutationResult =
  Apollo.MutationResult<SimulateSendEmailMutation>;
export type SimulateSendEmailMutationOptions = Apollo.BaseMutationOptions<
  SimulateSendEmailMutation,
  SimulateSendEmailMutationVariables
>;
export const AssignToPortfolioDocument = gql`
  mutation AssignToPortfolio($portfolioID: uuid!, $crmID: String!) {
    insert_donors_one(object: { portfolio_id: $portfolioID, crm_id: $crmID }) {
      id
    }
  }
`;
export type AssignToPortfolioMutationFn = Apollo.MutationFunction<
  AssignToPortfolioMutation,
  AssignToPortfolioMutationVariables
>;
export type AssignToPortfolioComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AssignToPortfolioMutation,
    AssignToPortfolioMutationVariables
  >,
  "mutation"
>;

export const AssignToPortfolioComponent = (
  props: AssignToPortfolioComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AssignToPortfolioMutation,
    AssignToPortfolioMutationVariables
  >
    mutation={AssignToPortfolioDocument}
    {...props}
  />
);

/**
 * __useAssignToPortfolioMutation__
 *
 * To run a mutation, you first call `useAssignToPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignToPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignToPortfolioMutation, { data, loading, error }] = useAssignToPortfolioMutation({
 *   variables: {
 *      portfolioID: // value for 'portfolioID'
 *      crmID: // value for 'crmID'
 *   },
 * });
 */
export function useAssignToPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AssignToPortfolioMutation,
    AssignToPortfolioMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AssignToPortfolioMutation,
    AssignToPortfolioMutationVariables
  >(AssignToPortfolioDocument, options);
}
export type AssignToPortfolioMutationHookResult = ReturnType<
  typeof useAssignToPortfolioMutation
>;
export type AssignToPortfolioMutationResult =
  Apollo.MutationResult<AssignToPortfolioMutation>;
export type AssignToPortfolioMutationOptions = Apollo.BaseMutationOptions<
  AssignToPortfolioMutation,
  AssignToPortfolioMutationVariables
>;
export const DeletePortfolioDocument = gql`
  mutation DeletePortfolio($portfolioID: uuid!) {
    delete_portfolios_by_pk(id: $portfolioID) {
      id
    }
  }
`;
export type DeletePortfolioMutationFn = Apollo.MutationFunction<
  DeletePortfolioMutation,
  DeletePortfolioMutationVariables
>;
export type DeletePortfolioComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeletePortfolioMutation,
    DeletePortfolioMutationVariables
  >,
  "mutation"
>;

export const DeletePortfolioComponent = (
  props: DeletePortfolioComponentProps
) => (
  <ApolloReactComponents.Mutation<
    DeletePortfolioMutation,
    DeletePortfolioMutationVariables
  >
    mutation={DeletePortfolioDocument}
    {...props}
  />
);

/**
 * __useDeletePortfolioMutation__
 *
 * To run a mutation, you first call `useDeletePortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePortfolioMutation, { data, loading, error }] = useDeletePortfolioMutation({
 *   variables: {
 *      portfolioID: // value for 'portfolioID'
 *   },
 * });
 */
export function useDeletePortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePortfolioMutation,
    DeletePortfolioMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletePortfolioMutation,
    DeletePortfolioMutationVariables
  >(DeletePortfolioDocument, options);
}
export type DeletePortfolioMutationHookResult = ReturnType<
  typeof useDeletePortfolioMutation
>;
export type DeletePortfolioMutationResult =
  Apollo.MutationResult<DeletePortfolioMutation>;
export type DeletePortfolioMutationOptions = Apollo.BaseMutationOptions<
  DeletePortfolioMutation,
  DeletePortfolioMutationVariables
>;
export const GetPortfolioDocument = gql`
  query GetPortfolio($portfolioID: uuid!) {
    portfolios_by_pk(id: $portfolioID) {
      id
      name
      members(order_by: { touches: asc }) {
        id
        crm {
          id
          name
          avatar
          momentum {
            id
            touches
          }
        }
      }
    }
  }
`;
export type GetPortfolioComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetPortfolioQuery,
    GetPortfolioQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetPortfolioQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetPortfolioComponent = (props: GetPortfolioComponentProps) => (
  <ApolloReactComponents.Query<GetPortfolioQuery, GetPortfolioQueryVariables>
    query={GetPortfolioDocument}
    {...props}
  />
);

/**
 * __useGetPortfolioQuery__
 *
 * To run a query within a React component, call `useGetPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioQuery({
 *   variables: {
 *      portfolioID: // value for 'portfolioID'
 *   },
 * });
 */
export function useGetPortfolioQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortfolioQuery,
    GetPortfolioQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(
    GetPortfolioDocument,
    options
  );
}
export function useGetPortfolioLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortfolioQuery,
    GetPortfolioQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortfolioQuery, GetPortfolioQueryVariables>(
    GetPortfolioDocument,
    options
  );
}
export type GetPortfolioQueryHookResult = ReturnType<
  typeof useGetPortfolioQuery
>;
export type GetPortfolioLazyQueryHookResult = ReturnType<
  typeof useGetPortfolioLazyQuery
>;
export type GetPortfolioQueryResult = Apollo.QueryResult<
  GetPortfolioQuery,
  GetPortfolioQueryVariables
>;
export const GetUnassignedDocument = gql`
  query GetUnassigned {
    CRMDonors {
      id
      name
      avatar
      momentum {
        id
        portfolio_id
      }
    }
  }
`;
export type GetUnassignedComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetUnassignedQuery,
    GetUnassignedQueryVariables
  >,
  "query"
>;

export const GetUnassignedComponent = (props: GetUnassignedComponentProps) => (
  <ApolloReactComponents.Query<GetUnassignedQuery, GetUnassignedQueryVariables>
    query={GetUnassignedDocument}
    {...props}
  />
);

/**
 * __useGetUnassignedQuery__
 *
 * To run a query within a React component, call `useGetUnassignedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnassignedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnassignedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnassignedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUnassignedQuery,
    GetUnassignedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUnassignedQuery, GetUnassignedQueryVariables>(
    GetUnassignedDocument,
    options
  );
}
export function useGetUnassignedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUnassignedQuery,
    GetUnassignedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUnassignedQuery, GetUnassignedQueryVariables>(
    GetUnassignedDocument,
    options
  );
}
export type GetUnassignedQueryHookResult = ReturnType<
  typeof useGetUnassignedQuery
>;
export type GetUnassignedLazyQueryHookResult = ReturnType<
  typeof useGetUnassignedLazyQuery
>;
export type GetUnassignedQueryResult = Apollo.QueryResult<
  GetUnassignedQuery,
  GetUnassignedQueryVariables
>;
export const AddPortfolioDocument = gql`
  mutation AddPortfolio($name: String!, $org_id: uuid!) {
    insert_portfolios_one(object: { name: $name, org_id: $org_id }) {
      id
    }
  }
`;
export type AddPortfolioMutationFn = Apollo.MutationFunction<
  AddPortfolioMutation,
  AddPortfolioMutationVariables
>;
export type AddPortfolioComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddPortfolioMutation,
    AddPortfolioMutationVariables
  >,
  "mutation"
>;

export const AddPortfolioComponent = (props: AddPortfolioComponentProps) => (
  <ApolloReactComponents.Mutation<
    AddPortfolioMutation,
    AddPortfolioMutationVariables
  >
    mutation={AddPortfolioDocument}
    {...props}
  />
);

/**
 * __useAddPortfolioMutation__
 *
 * To run a mutation, you first call `useAddPortfolioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPortfolioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPortfolioMutation, { data, loading, error }] = useAddPortfolioMutation({
 *   variables: {
 *      name: // value for 'name'
 *      org_id: // value for 'org_id'
 *   },
 * });
 */
export function useAddPortfolioMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPortfolioMutation,
    AddPortfolioMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddPortfolioMutation,
    AddPortfolioMutationVariables
  >(AddPortfolioDocument, options);
}
export type AddPortfolioMutationHookResult = ReturnType<
  typeof useAddPortfolioMutation
>;
export type AddPortfolioMutationResult =
  Apollo.MutationResult<AddPortfolioMutation>;
export type AddPortfolioMutationOptions = Apollo.BaseMutationOptions<
  AddPortfolioMutation,
  AddPortfolioMutationVariables
>;
export const AssignOrgDocument = gql`
  mutation AssignOrg($userID: uuid!, $orgID: uuid!) {
    insert_org_memberships_one(object: { org_id: $orgID, user_id: $userID }) {
      id
    }
  }
`;
export type AssignOrgMutationFn = Apollo.MutationFunction<
  AssignOrgMutation,
  AssignOrgMutationVariables
>;
export type AssignOrgComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AssignOrgMutation,
    AssignOrgMutationVariables
  >,
  "mutation"
>;

export const AssignOrgComponent = (props: AssignOrgComponentProps) => (
  <ApolloReactComponents.Mutation<AssignOrgMutation, AssignOrgMutationVariables>
    mutation={AssignOrgDocument}
    {...props}
  />
);

/**
 * __useAssignOrgMutation__
 *
 * To run a mutation, you first call `useAssignOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignOrgMutation, { data, loading, error }] = useAssignOrgMutation({
 *   variables: {
 *      userID: // value for 'userID'
 *      orgID: // value for 'orgID'
 *   },
 * });
 */
export function useAssignOrgMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AssignOrgMutation,
    AssignOrgMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AssignOrgMutation, AssignOrgMutationVariables>(
    AssignOrgDocument,
    options
  );
}
export type AssignOrgMutationHookResult = ReturnType<
  typeof useAssignOrgMutation
>;
export type AssignOrgMutationResult = Apollo.MutationResult<AssignOrgMutation>;
export type AssignOrgMutationOptions = Apollo.BaseMutationOptions<
  AssignOrgMutation,
  AssignOrgMutationVariables
>;
export const CreateOrgDocument = gql`
  mutation CreateOrg($name: String!) {
    insert_orgs_one(object: { name: $name }) {
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
export const GetPortfoliosDocument = gql`
  query GetPortfolios($ownerID: uuid!) {
    users_by_pk(id: $ownerID) {
      id
      name
      email
      orgs {
        org {
          id
          name
          portfolios {
            id
            name
          }
        }
      }
    }
  }
`;
export type GetPortfoliosComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetPortfoliosQuery,
    GetPortfoliosQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetPortfoliosQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const GetPortfoliosComponent = (props: GetPortfoliosComponentProps) => (
  <ApolloReactComponents.Query<GetPortfoliosQuery, GetPortfoliosQueryVariables>
    query={GetPortfoliosDocument}
    {...props}
  />
);

/**
 * __useGetPortfoliosQuery__
 *
 * To run a query within a React component, call `useGetPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfoliosQuery({
 *   variables: {
 *      ownerID: // value for 'ownerID'
 *   },
 * });
 */
export function useGetPortfoliosQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPortfoliosQuery,
    GetPortfoliosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(
    GetPortfoliosDocument,
    options
  );
}
export function useGetPortfoliosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPortfoliosQuery,
    GetPortfoliosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(
    GetPortfoliosDocument,
    options
  );
}
export type GetPortfoliosQueryHookResult = ReturnType<
  typeof useGetPortfoliosQuery
>;
export type GetPortfoliosLazyQueryHookResult = ReturnType<
  typeof useGetPortfoliosLazyQuery
>;
export type GetPortfoliosQueryResult = Apollo.QueryResult<
  GetPortfoliosQuery,
  GetPortfoliosQueryVariables
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
  CRMDonor: ResolverTypeWrapper<CrmDonor>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
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
  cursor_ordering: Cursor_Ordering;
  donors: ResolverTypeWrapper<Donors>;
  donors_aggregate: ResolverTypeWrapper<Donors_Aggregate>;
  donors_aggregate_bool_exp: Donors_Aggregate_Bool_Exp;
  donors_aggregate_bool_exp_count: Donors_Aggregate_Bool_Exp_Count;
  donors_aggregate_fields: ResolverTypeWrapper<Donors_Aggregate_Fields>;
  donors_aggregate_order_by: Donors_Aggregate_Order_By;
  donors_arr_rel_insert_input: Donors_Arr_Rel_Insert_Input;
  donors_avg_fields: ResolverTypeWrapper<Donors_Avg_Fields>;
  donors_avg_order_by: Donors_Avg_Order_By;
  donors_bool_exp: Donors_Bool_Exp;
  donors_constraint: Donors_Constraint;
  donors_inc_input: Donors_Inc_Input;
  donors_insert_input: Donors_Insert_Input;
  donors_max_fields: ResolverTypeWrapper<Donors_Max_Fields>;
  donors_max_order_by: Donors_Max_Order_By;
  donors_min_fields: ResolverTypeWrapper<Donors_Min_Fields>;
  donors_min_order_by: Donors_Min_Order_By;
  donors_mutation_response: ResolverTypeWrapper<Donors_Mutation_Response>;
  donors_on_conflict: Donors_On_Conflict;
  donors_order_by: Donors_Order_By;
  donors_pk_columns_input: Donors_Pk_Columns_Input;
  donors_select_column: Donors_Select_Column;
  donors_set_input: Donors_Set_Input;
  donors_stddev_fields: ResolverTypeWrapper<Donors_Stddev_Fields>;
  donors_stddev_order_by: Donors_Stddev_Order_By;
  donors_stddev_pop_fields: ResolverTypeWrapper<Donors_Stddev_Pop_Fields>;
  donors_stddev_pop_order_by: Donors_Stddev_Pop_Order_By;
  donors_stddev_samp_fields: ResolverTypeWrapper<Donors_Stddev_Samp_Fields>;
  donors_stddev_samp_order_by: Donors_Stddev_Samp_Order_By;
  donors_stream_cursor_input: Donors_Stream_Cursor_Input;
  donors_stream_cursor_value_input: Donors_Stream_Cursor_Value_Input;
  donors_sum_fields: ResolverTypeWrapper<Donors_Sum_Fields>;
  donors_sum_order_by: Donors_Sum_Order_By;
  donors_update_column: Donors_Update_Column;
  donors_updates: Donors_Updates;
  donors_var_pop_fields: ResolverTypeWrapper<Donors_Var_Pop_Fields>;
  donors_var_pop_order_by: Donors_Var_Pop_Order_By;
  donors_var_samp_fields: ResolverTypeWrapper<Donors_Var_Samp_Fields>;
  donors_var_samp_order_by: Donors_Var_Samp_Order_By;
  donors_variance_fields: ResolverTypeWrapper<Donors_Variance_Fields>;
  donors_variance_order_by: Donors_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  org_memberships: ResolverTypeWrapper<Org_Memberships>;
  org_memberships_aggregate: ResolverTypeWrapper<Org_Memberships_Aggregate>;
  org_memberships_aggregate_bool_exp: Org_Memberships_Aggregate_Bool_Exp;
  org_memberships_aggregate_bool_exp_count: Org_Memberships_Aggregate_Bool_Exp_Count;
  org_memberships_aggregate_fields: ResolverTypeWrapper<Org_Memberships_Aggregate_Fields>;
  org_memberships_aggregate_order_by: Org_Memberships_Aggregate_Order_By;
  org_memberships_arr_rel_insert_input: Org_Memberships_Arr_Rel_Insert_Input;
  org_memberships_bool_exp: Org_Memberships_Bool_Exp;
  org_memberships_constraint: Org_Memberships_Constraint;
  org_memberships_insert_input: Org_Memberships_Insert_Input;
  org_memberships_max_fields: ResolverTypeWrapper<Org_Memberships_Max_Fields>;
  org_memberships_max_order_by: Org_Memberships_Max_Order_By;
  org_memberships_min_fields: ResolverTypeWrapper<Org_Memberships_Min_Fields>;
  org_memberships_min_order_by: Org_Memberships_Min_Order_By;
  org_memberships_mutation_response: ResolverTypeWrapper<Org_Memberships_Mutation_Response>;
  org_memberships_on_conflict: Org_Memberships_On_Conflict;
  org_memberships_order_by: Org_Memberships_Order_By;
  org_memberships_pk_columns_input: Org_Memberships_Pk_Columns_Input;
  org_memberships_select_column: Org_Memberships_Select_Column;
  org_memberships_set_input: Org_Memberships_Set_Input;
  org_memberships_stream_cursor_input: Org_Memberships_Stream_Cursor_Input;
  org_memberships_stream_cursor_value_input: Org_Memberships_Stream_Cursor_Value_Input;
  org_memberships_update_column: Org_Memberships_Update_Column;
  org_memberships_updates: Org_Memberships_Updates;
  orgs: ResolverTypeWrapper<Orgs>;
  orgs_aggregate: ResolverTypeWrapper<Orgs_Aggregate>;
  orgs_aggregate_fields: ResolverTypeWrapper<Orgs_Aggregate_Fields>;
  orgs_bool_exp: Orgs_Bool_Exp;
  orgs_constraint: Orgs_Constraint;
  orgs_insert_input: Orgs_Insert_Input;
  orgs_max_fields: ResolverTypeWrapper<Orgs_Max_Fields>;
  orgs_min_fields: ResolverTypeWrapper<Orgs_Min_Fields>;
  orgs_mutation_response: ResolverTypeWrapper<Orgs_Mutation_Response>;
  orgs_obj_rel_insert_input: Orgs_Obj_Rel_Insert_Input;
  orgs_on_conflict: Orgs_On_Conflict;
  orgs_order_by: Orgs_Order_By;
  orgs_pk_columns_input: Orgs_Pk_Columns_Input;
  orgs_select_column: Orgs_Select_Column;
  orgs_set_input: Orgs_Set_Input;
  orgs_stream_cursor_input: Orgs_Stream_Cursor_Input;
  orgs_stream_cursor_value_input: Orgs_Stream_Cursor_Value_Input;
  orgs_update_column: Orgs_Update_Column;
  orgs_updates: Orgs_Updates;
  portfolios: ResolverTypeWrapper<Portfolios>;
  portfolios_aggregate: ResolverTypeWrapper<Portfolios_Aggregate>;
  portfolios_aggregate_bool_exp: Portfolios_Aggregate_Bool_Exp;
  portfolios_aggregate_bool_exp_count: Portfolios_Aggregate_Bool_Exp_Count;
  portfolios_aggregate_fields: ResolverTypeWrapper<Portfolios_Aggregate_Fields>;
  portfolios_aggregate_order_by: Portfolios_Aggregate_Order_By;
  portfolios_arr_rel_insert_input: Portfolios_Arr_Rel_Insert_Input;
  portfolios_bool_exp: Portfolios_Bool_Exp;
  portfolios_constraint: Portfolios_Constraint;
  portfolios_insert_input: Portfolios_Insert_Input;
  portfolios_max_fields: ResolverTypeWrapper<Portfolios_Max_Fields>;
  portfolios_max_order_by: Portfolios_Max_Order_By;
  portfolios_min_fields: ResolverTypeWrapper<Portfolios_Min_Fields>;
  portfolios_min_order_by: Portfolios_Min_Order_By;
  portfolios_mutation_response: ResolverTypeWrapper<Portfolios_Mutation_Response>;
  portfolios_obj_rel_insert_input: Portfolios_Obj_Rel_Insert_Input;
  portfolios_on_conflict: Portfolios_On_Conflict;
  portfolios_order_by: Portfolios_Order_By;
  portfolios_pk_columns_input: Portfolios_Pk_Columns_Input;
  portfolios_select_column: Portfolios_Select_Column;
  portfolios_set_input: Portfolios_Set_Input;
  portfolios_stream_cursor_input: Portfolios_Stream_Cursor_Input;
  portfolios_stream_cursor_value_input: Portfolios_Stream_Cursor_Value_Input;
  portfolios_update_column: Portfolios_Update_Column;
  portfolios_updates: Portfolios_Updates;
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
  CRMDonor: CrmDonor;
  Float: Scalars["Float"];
  ID: Scalars["ID"];
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
  donors: Donors;
  donors_aggregate: Donors_Aggregate;
  donors_aggregate_bool_exp: Donors_Aggregate_Bool_Exp;
  donors_aggregate_bool_exp_count: Donors_Aggregate_Bool_Exp_Count;
  donors_aggregate_fields: Donors_Aggregate_Fields;
  donors_aggregate_order_by: Donors_Aggregate_Order_By;
  donors_arr_rel_insert_input: Donors_Arr_Rel_Insert_Input;
  donors_avg_fields: Donors_Avg_Fields;
  donors_avg_order_by: Donors_Avg_Order_By;
  donors_bool_exp: Donors_Bool_Exp;
  donors_inc_input: Donors_Inc_Input;
  donors_insert_input: Donors_Insert_Input;
  donors_max_fields: Donors_Max_Fields;
  donors_max_order_by: Donors_Max_Order_By;
  donors_min_fields: Donors_Min_Fields;
  donors_min_order_by: Donors_Min_Order_By;
  donors_mutation_response: Donors_Mutation_Response;
  donors_on_conflict: Donors_On_Conflict;
  donors_order_by: Donors_Order_By;
  donors_pk_columns_input: Donors_Pk_Columns_Input;
  donors_set_input: Donors_Set_Input;
  donors_stddev_fields: Donors_Stddev_Fields;
  donors_stddev_order_by: Donors_Stddev_Order_By;
  donors_stddev_pop_fields: Donors_Stddev_Pop_Fields;
  donors_stddev_pop_order_by: Donors_Stddev_Pop_Order_By;
  donors_stddev_samp_fields: Donors_Stddev_Samp_Fields;
  donors_stddev_samp_order_by: Donors_Stddev_Samp_Order_By;
  donors_stream_cursor_input: Donors_Stream_Cursor_Input;
  donors_stream_cursor_value_input: Donors_Stream_Cursor_Value_Input;
  donors_sum_fields: Donors_Sum_Fields;
  donors_sum_order_by: Donors_Sum_Order_By;
  donors_updates: Donors_Updates;
  donors_var_pop_fields: Donors_Var_Pop_Fields;
  donors_var_pop_order_by: Donors_Var_Pop_Order_By;
  donors_var_samp_fields: Donors_Var_Samp_Fields;
  donors_var_samp_order_by: Donors_Var_Samp_Order_By;
  donors_variance_fields: Donors_Variance_Fields;
  donors_variance_order_by: Donors_Variance_Order_By;
  mutation_root: {};
  org_memberships: Org_Memberships;
  org_memberships_aggregate: Org_Memberships_Aggregate;
  org_memberships_aggregate_bool_exp: Org_Memberships_Aggregate_Bool_Exp;
  org_memberships_aggregate_bool_exp_count: Org_Memberships_Aggregate_Bool_Exp_Count;
  org_memberships_aggregate_fields: Org_Memberships_Aggregate_Fields;
  org_memberships_aggregate_order_by: Org_Memberships_Aggregate_Order_By;
  org_memberships_arr_rel_insert_input: Org_Memberships_Arr_Rel_Insert_Input;
  org_memberships_bool_exp: Org_Memberships_Bool_Exp;
  org_memberships_insert_input: Org_Memberships_Insert_Input;
  org_memberships_max_fields: Org_Memberships_Max_Fields;
  org_memberships_max_order_by: Org_Memberships_Max_Order_By;
  org_memberships_min_fields: Org_Memberships_Min_Fields;
  org_memberships_min_order_by: Org_Memberships_Min_Order_By;
  org_memberships_mutation_response: Org_Memberships_Mutation_Response;
  org_memberships_on_conflict: Org_Memberships_On_Conflict;
  org_memberships_order_by: Org_Memberships_Order_By;
  org_memberships_pk_columns_input: Org_Memberships_Pk_Columns_Input;
  org_memberships_set_input: Org_Memberships_Set_Input;
  org_memberships_stream_cursor_input: Org_Memberships_Stream_Cursor_Input;
  org_memberships_stream_cursor_value_input: Org_Memberships_Stream_Cursor_Value_Input;
  org_memberships_updates: Org_Memberships_Updates;
  orgs: Orgs;
  orgs_aggregate: Orgs_Aggregate;
  orgs_aggregate_fields: Orgs_Aggregate_Fields;
  orgs_bool_exp: Orgs_Bool_Exp;
  orgs_insert_input: Orgs_Insert_Input;
  orgs_max_fields: Orgs_Max_Fields;
  orgs_min_fields: Orgs_Min_Fields;
  orgs_mutation_response: Orgs_Mutation_Response;
  orgs_obj_rel_insert_input: Orgs_Obj_Rel_Insert_Input;
  orgs_on_conflict: Orgs_On_Conflict;
  orgs_order_by: Orgs_Order_By;
  orgs_pk_columns_input: Orgs_Pk_Columns_Input;
  orgs_set_input: Orgs_Set_Input;
  orgs_stream_cursor_input: Orgs_Stream_Cursor_Input;
  orgs_stream_cursor_value_input: Orgs_Stream_Cursor_Value_Input;
  orgs_updates: Orgs_Updates;
  portfolios: Portfolios;
  portfolios_aggregate: Portfolios_Aggregate;
  portfolios_aggregate_bool_exp: Portfolios_Aggregate_Bool_Exp;
  portfolios_aggregate_bool_exp_count: Portfolios_Aggregate_Bool_Exp_Count;
  portfolios_aggregate_fields: Portfolios_Aggregate_Fields;
  portfolios_aggregate_order_by: Portfolios_Aggregate_Order_By;
  portfolios_arr_rel_insert_input: Portfolios_Arr_Rel_Insert_Input;
  portfolios_bool_exp: Portfolios_Bool_Exp;
  portfolios_insert_input: Portfolios_Insert_Input;
  portfolios_max_fields: Portfolios_Max_Fields;
  portfolios_max_order_by: Portfolios_Max_Order_By;
  portfolios_min_fields: Portfolios_Min_Fields;
  portfolios_min_order_by: Portfolios_Min_Order_By;
  portfolios_mutation_response: Portfolios_Mutation_Response;
  portfolios_obj_rel_insert_input: Portfolios_Obj_Rel_Insert_Input;
  portfolios_on_conflict: Portfolios_On_Conflict;
  portfolios_order_by: Portfolios_Order_By;
  portfolios_pk_columns_input: Portfolios_Pk_Columns_Input;
  portfolios_set_input: Portfolios_Set_Input;
  portfolios_stream_cursor_input: Portfolios_Stream_Cursor_Input;
  portfolios_stream_cursor_value_input: Portfolios_Stream_Cursor_Value_Input;
  portfolios_updates: Portfolios_Updates;
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

export type CrmDonorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CRMDonor"] = ResolversParentTypes["CRMDonor"]
> = {
  avatar?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  momentum?: Resolver<Maybe<ResolversTypes["donors"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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

export type DonorsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors"] = ResolversParentTypes["donors"]
> = {
  crm?: Resolver<Maybe<ResolversTypes["CRMDonor"]>, ParentType, ContextType>;
  crm_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  portfolio?: Resolver<
    Maybe<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType
  >;
  portfolio_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  touches?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_aggregate"] = ResolversParentTypes["donors_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["donors_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["donors"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_aggregate_fields"] = ResolversParentTypes["donors_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["donors_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Donors_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["donors_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["donors_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["donors_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["donors_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["donors_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["donors_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["donors_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["donors_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["donors_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_avg_fields"] = ResolversParentTypes["donors_avg_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_max_fields"] = ResolversParentTypes["donors_max_fields"]
> = {
  crm_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  portfolio_id?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  touches?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_min_fields"] = ResolversParentTypes["donors_min_fields"]
> = {
  crm_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  portfolio_id?: Resolver<
    Maybe<ResolversTypes["uuid"]>,
    ParentType,
    ContextType
  >;
  touches?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_mutation_response"] = ResolversParentTypes["donors_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["donors"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_stddev_fields"] = ResolversParentTypes["donors_stddev_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_stddev_pop_fields"] = ResolversParentTypes["donors_stddev_pop_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_stddev_samp_fields"] = ResolversParentTypes["donors_stddev_samp_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_sum_fields"] = ResolversParentTypes["donors_sum_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_var_pop_fields"] = ResolversParentTypes["donors_var_pop_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_var_samp_fields"] = ResolversParentTypes["donors_var_samp_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Donors_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["donors_variance_fields"] = ResolversParentTypes["donors_variance_fields"]
> = {
  touches?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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
  delete_donors?: Resolver<
    Maybe<ResolversTypes["donors_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_DonorsArgs, "where">
  >;
  delete_donors_by_pk?: Resolver<
    Maybe<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Donors_By_PkArgs, "id">
  >;
  delete_org_memberships?: Resolver<
    Maybe<ResolversTypes["org_memberships_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Org_MembershipsArgs, "where">
  >;
  delete_org_memberships_by_pk?: Resolver<
    Maybe<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Org_Memberships_By_PkArgs, "id">
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
  delete_portfolios?: Resolver<
    Maybe<ResolversTypes["portfolios_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_PortfoliosArgs, "where">
  >;
  delete_portfolios_by_pk?: Resolver<
    Maybe<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_Portfolios_By_PkArgs, "id">
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
  insert_donors?: Resolver<
    Maybe<ResolversTypes["donors_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_DonorsArgs, "objects">
  >;
  insert_donors_one?: Resolver<
    Maybe<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Donors_OneArgs, "object">
  >;
  insert_org_memberships?: Resolver<
    Maybe<ResolversTypes["org_memberships_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Org_MembershipsArgs, "objects">
  >;
  insert_org_memberships_one?: Resolver<
    Maybe<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Org_Memberships_OneArgs, "object">
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
  insert_portfolios?: Resolver<
    Maybe<ResolversTypes["portfolios_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_PortfoliosArgs, "objects">
  >;
  insert_portfolios_one?: Resolver<
    Maybe<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_Portfolios_OneArgs, "object">
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
  update_donors?: Resolver<
    Maybe<ResolversTypes["donors_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_DonorsArgs, "where">
  >;
  update_donors_by_pk?: Resolver<
    Maybe<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Donors_By_PkArgs, "pk_columns">
  >;
  update_donors_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["donors_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Donors_ManyArgs, "updates">
  >;
  update_org_memberships?: Resolver<
    Maybe<ResolversTypes["org_memberships_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_MembershipsArgs, "where">
  >;
  update_org_memberships_by_pk?: Resolver<
    Maybe<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_Memberships_By_PkArgs, "pk_columns">
  >;
  update_org_memberships_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["org_memberships_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Org_Memberships_ManyArgs, "updates">
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
  update_portfolios?: Resolver<
    Maybe<ResolversTypes["portfolios_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_PortfoliosArgs, "where">
  >;
  update_portfolios_by_pk?: Resolver<
    Maybe<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Portfolios_By_PkArgs, "pk_columns">
  >;
  update_portfolios_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["portfolios_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_Portfolios_ManyArgs, "updates">
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

export type Org_MembershipsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships"] = ResolversParentTypes["org_memberships"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes["orgs"]>, ParentType, ContextType>;
  org_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Memberships_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships_aggregate"] = ResolversParentTypes["org_memberships_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["org_memberships_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Memberships_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships_aggregate_fields"] = ResolversParentTypes["org_memberships_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Org_Memberships_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["org_memberships_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["org_memberships_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Memberships_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships_max_fields"] = ResolversParentTypes["org_memberships_max_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Memberships_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships_min_fields"] = ResolversParentTypes["org_memberships_min_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Org_Memberships_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["org_memberships_mutation_response"] = ResolversParentTypes["org_memberships_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrgsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs"] = ResolversParentTypes["orgs"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  members?: Resolver<
    Array<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    Partial<OrgsMembersArgs>
  >;
  members_aggregate?: Resolver<
    ResolversTypes["org_memberships_aggregate"],
    ParentType,
    ContextType,
    Partial<OrgsMembers_AggregateArgs>
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  portfolios?: Resolver<
    Array<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    Partial<OrgsPortfoliosArgs>
  >;
  portfolios_aggregate?: Resolver<
    ResolversTypes["portfolios_aggregate"],
    ParentType,
    ContextType,
    Partial<OrgsPortfolios_AggregateArgs>
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
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Orgs_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["orgs_min_fields"] = ResolversParentTypes["orgs_min_fields"]
> = {
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

export type PortfoliosResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios"] = ResolversParentTypes["portfolios"]
> = {
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  members?: Resolver<
    Array<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    Partial<PortfoliosMembersArgs>
  >;
  members_aggregate?: Resolver<
    ResolversTypes["donors_aggregate"],
    ParentType,
    ContextType,
    Partial<PortfoliosMembers_AggregateArgs>
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  org?: Resolver<Maybe<ResolversTypes["orgs"]>, ParentType, ContextType>;
  org_id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolios_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios_aggregate"] = ResolversParentTypes["portfolios_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["portfolios_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolios_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios_aggregate_fields"] = ResolversParentTypes["portfolios_aggregate_fields"]
> = {
  count?: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    Partial<Portfolios_Aggregate_FieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes["portfolios_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["portfolios_min_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolios_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios_max_fields"] = ResolversParentTypes["portfolios_max_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolios_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios_min_fields"] = ResolversParentTypes["portfolios_min_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  org_id?: Resolver<Maybe<ResolversTypes["uuid"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolios_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["portfolios_mutation_response"] = ResolversParentTypes["portfolios_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  CRMDonor?: Resolver<
    Maybe<ResolversTypes["CRMDonor"]>,
    ParentType,
    ContextType,
    Partial<Query_RootCrmDonorArgs>
  >;
  CRMDonors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CRMDonor"]>>>,
    ParentType,
    ContextType
  >;
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
  donors?: Resolver<
    Array<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    Partial<Query_RootDonorsArgs>
  >;
  donors_aggregate?: Resolver<
    ResolversTypes["donors_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootDonors_AggregateArgs>
  >;
  donors_by_pk?: Resolver<
    Maybe<ResolversTypes["donors"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootDonors_By_PkArgs, "id">
  >;
  org_memberships?: Resolver<
    Array<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    Partial<Query_RootOrg_MembershipsArgs>
  >;
  org_memberships_aggregate?: Resolver<
    ResolversTypes["org_memberships_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootOrg_Memberships_AggregateArgs>
  >;
  org_memberships_by_pk?: Resolver<
    Maybe<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootOrg_Memberships_By_PkArgs, "id">
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
  portfolios?: Resolver<
    Array<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    Partial<Query_RootPortfoliosArgs>
  >;
  portfolios_aggregate?: Resolver<
    ResolversTypes["portfolios_aggregate"],
    ParentType,
    ContextType,
    Partial<Query_RootPortfolios_AggregateArgs>
  >;
  portfolios_by_pk?: Resolver<
    Maybe<ResolversTypes["portfolios"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootPortfolios_By_PkArgs, "id">
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
  donors?: SubscriptionResolver<
    Array<ResolversTypes["donors"]>,
    "donors",
    ParentType,
    ContextType,
    Partial<Subscription_RootDonorsArgs>
  >;
  donors_aggregate?: SubscriptionResolver<
    ResolversTypes["donors_aggregate"],
    "donors_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootDonors_AggregateArgs>
  >;
  donors_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["donors"]>,
    "donors_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootDonors_By_PkArgs, "id">
  >;
  donors_stream?: SubscriptionResolver<
    Array<ResolversTypes["donors"]>,
    "donors_stream",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootDonors_StreamArgs, "batch_size" | "cursor">
  >;
  org_memberships?: SubscriptionResolver<
    Array<ResolversTypes["org_memberships"]>,
    "org_memberships",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrg_MembershipsArgs>
  >;
  org_memberships_aggregate?: SubscriptionResolver<
    ResolversTypes["org_memberships_aggregate"],
    "org_memberships_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootOrg_Memberships_AggregateArgs>
  >;
  org_memberships_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["org_memberships"]>,
    "org_memberships_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootOrg_Memberships_By_PkArgs, "id">
  >;
  org_memberships_stream?: SubscriptionResolver<
    Array<ResolversTypes["org_memberships"]>,
    "org_memberships_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootOrg_Memberships_StreamArgs,
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
  portfolios?: SubscriptionResolver<
    Array<ResolversTypes["portfolios"]>,
    "portfolios",
    ParentType,
    ContextType,
    Partial<Subscription_RootPortfoliosArgs>
  >;
  portfolios_aggregate?: SubscriptionResolver<
    ResolversTypes["portfolios_aggregate"],
    "portfolios_aggregate",
    ParentType,
    ContextType,
    Partial<Subscription_RootPortfolios_AggregateArgs>
  >;
  portfolios_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["portfolios"]>,
    "portfolios_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootPortfolios_By_PkArgs, "id">
  >;
  portfolios_stream?: SubscriptionResolver<
    Array<ResolversTypes["portfolios"]>,
    "portfolios_stream",
    ParentType,
    ContextType,
    RequireFields<
      Subscription_RootPortfolios_StreamArgs,
      "batch_size" | "cursor"
    >
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
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  is_admin?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  orgs?: Resolver<
    Array<ResolversTypes["org_memberships"]>,
    ParentType,
    ContextType,
    Partial<UsersOrgsArgs>
  >;
  orgs_aggregate?: Resolver<
    ResolversTypes["org_memberships_aggregate"],
    ParentType,
    ContextType,
    Partial<UsersOrgs_AggregateArgs>
  >;
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
  CRMDonor?: CrmDonorResolvers<ContextType>;
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
  donors?: DonorsResolvers<ContextType>;
  donors_aggregate?: Donors_AggregateResolvers<ContextType>;
  donors_aggregate_fields?: Donors_Aggregate_FieldsResolvers<ContextType>;
  donors_avg_fields?: Donors_Avg_FieldsResolvers<ContextType>;
  donors_max_fields?: Donors_Max_FieldsResolvers<ContextType>;
  donors_min_fields?: Donors_Min_FieldsResolvers<ContextType>;
  donors_mutation_response?: Donors_Mutation_ResponseResolvers<ContextType>;
  donors_stddev_fields?: Donors_Stddev_FieldsResolvers<ContextType>;
  donors_stddev_pop_fields?: Donors_Stddev_Pop_FieldsResolvers<ContextType>;
  donors_stddev_samp_fields?: Donors_Stddev_Samp_FieldsResolvers<ContextType>;
  donors_sum_fields?: Donors_Sum_FieldsResolvers<ContextType>;
  donors_var_pop_fields?: Donors_Var_Pop_FieldsResolvers<ContextType>;
  donors_var_samp_fields?: Donors_Var_Samp_FieldsResolvers<ContextType>;
  donors_variance_fields?: Donors_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  org_memberships?: Org_MembershipsResolvers<ContextType>;
  org_memberships_aggregate?: Org_Memberships_AggregateResolvers<ContextType>;
  org_memberships_aggregate_fields?: Org_Memberships_Aggregate_FieldsResolvers<ContextType>;
  org_memberships_max_fields?: Org_Memberships_Max_FieldsResolvers<ContextType>;
  org_memberships_min_fields?: Org_Memberships_Min_FieldsResolvers<ContextType>;
  org_memberships_mutation_response?: Org_Memberships_Mutation_ResponseResolvers<ContextType>;
  orgs?: OrgsResolvers<ContextType>;
  orgs_aggregate?: Orgs_AggregateResolvers<ContextType>;
  orgs_aggregate_fields?: Orgs_Aggregate_FieldsResolvers<ContextType>;
  orgs_max_fields?: Orgs_Max_FieldsResolvers<ContextType>;
  orgs_min_fields?: Orgs_Min_FieldsResolvers<ContextType>;
  orgs_mutation_response?: Orgs_Mutation_ResponseResolvers<ContextType>;
  portfolios?: PortfoliosResolvers<ContextType>;
  portfolios_aggregate?: Portfolios_AggregateResolvers<ContextType>;
  portfolios_aggregate_fields?: Portfolios_Aggregate_FieldsResolvers<ContextType>;
  portfolios_max_fields?: Portfolios_Max_FieldsResolvers<ContextType>;
  portfolios_min_fields?: Portfolios_Min_FieldsResolvers<ContextType>;
  portfolios_mutation_response?: Portfolios_Mutation_ResponseResolvers<ContextType>;
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
