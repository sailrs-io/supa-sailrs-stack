import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
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
  BigFloat: any;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Opaque: any;
  Time: any;
  UUID: string;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']>;
  gt?: InputMaybe<Scalars['BigFloat']>;
  gte?: InputMaybe<Scalars['BigFloat']>;
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']>;
  lte?: InputMaybe<Scalars['BigFloat']>;
  neq?: InputMaybe<Scalars['BigFloat']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export type FilterIs =
  | 'NOT_NULL'
  | 'NULL';

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Note` collection */
  deleteFromNoteCollection: NoteDeleteResponse;
  /** Deletes zero or more records from the `User` collection */
  deleteFromUserCollection: UserDeleteResponse;
  /** Deletes zero or more records from the `_prisma_migrations` collection */
  deleteFrom_prisma_migrationsCollection: _Prisma_MigrationsDeleteResponse;
  /** Adds one or more `Note` records to the collection */
  insertIntoNoteCollection?: Maybe<NoteInsertResponse>;
  /** Adds one or more `User` records to the collection */
  insertIntoUserCollection?: Maybe<UserInsertResponse>;
  /** Adds one or more `_prisma_migrations` records to the collection */
  insertInto_prisma_migrationsCollection?: Maybe<_Prisma_MigrationsInsertResponse>;
  /** Updates zero or more records in the `Note` collection */
  updateNoteCollection: NoteUpdateResponse;
  /** Updates zero or more records in the `User` collection */
  updateUserCollection: UserUpdateResponse;
  /** Updates zero or more records in the `_prisma_migrations` collection */
  update_prisma_migrationsCollection: _Prisma_MigrationsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromNoteCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<NoteFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrom_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoNoteCollectionArgs = {
  objects: Array<NoteInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoUserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertInto_Prisma_MigrationsCollectionArgs = {
  objects: Array<_Prisma_MigrationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateNoteCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<NoteFilter>;
  set: NoteUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateUserCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdate_Prisma_MigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  set: _Prisma_MigrationsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

export type Note = Node & {
  __typename?: 'Note';
  body: Scalars['String'];
  created_at: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['Datetime']>;
  user: User;
  user_id: Scalars['UUID'];
};

export type NoteConnection = {
  __typename?: 'NoteConnection';
  edges: Array<NoteEdge>;
  pageInfo: PageInfo;
};

export type NoteDeleteResponse = {
  __typename?: 'NoteDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Note>;
};

export type NoteEdge = {
  __typename?: 'NoteEdge';
  cursor: Scalars['String'];
  node: Note;
};

export type NoteFilter = {
  body?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type NoteInsertInput = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type NoteInsertResponse = {
  __typename?: 'NoteInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Note>;
};

export type NoteOrderBy = {
  body?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type NoteUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
  user_id?: InputMaybe<Scalars['UUID']>;
};

export type NoteUpdateResponse = {
  __typename?: 'NoteUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Note>;
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `_prisma_migrations` */
  _prisma_migrationsCollection?: Maybe<_Prisma_MigrationsConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Note` */
  noteCollection?: Maybe<NoteConnection>;
  /** A pagable collection of type `User` */
  userCollection?: Maybe<UserConnection>;
};


/** The root type for querying data */
export type Query_Prisma_MigrationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<_Prisma_MigrationsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<_Prisma_MigrationsOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryNoteCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NoteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NoteOrderBy>>;
};


/** The root type for querying data */
export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  iregex?: InputMaybe<Scalars['String']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  regex?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type User = Node & {
  __typename?: 'User';
  created_at: Scalars['Datetime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  noteCollection?: Maybe<NoteConnection>;
  updated_at?: Maybe<Scalars['Datetime']>;
};


export type UserNoteCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NoteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NoteOrderBy>>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type UserInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type UserInsertResponse = {
  __typename?: 'UserInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type UserUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  updated_at?: InputMaybe<Scalars['Datetime']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type _Prisma_Migrations = Node & {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int'];
  checksum: Scalars['String'];
  finished_at?: Maybe<Scalars['Datetime']>;
  id: Scalars['String'];
  logs?: Maybe<Scalars['String']>;
  migration_name: Scalars['String'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  rolled_back_at?: Maybe<Scalars['Datetime']>;
  started_at: Scalars['Datetime'];
};

export type _Prisma_MigrationsConnection = {
  __typename?: '_prisma_migrationsConnection';
  edges: Array<_Prisma_MigrationsEdge>;
  pageInfo: PageInfo;
};

export type _Prisma_MigrationsDeleteResponse = {
  __typename?: '_prisma_migrationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsEdge = {
  __typename?: '_prisma_migrationsEdge';
  cursor: Scalars['String'];
  node: _Prisma_Migrations;
};

export type _Prisma_MigrationsFilter = {
  applied_steps_count?: InputMaybe<IntFilter>;
  checksum?: InputMaybe<StringFilter>;
  finished_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<StringFilter>;
  migration_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  rolled_back_at?: InputMaybe<DatetimeFilter>;
  started_at?: InputMaybe<DatetimeFilter>;
};

export type _Prisma_MigrationsInsertInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']>;
  started_at?: InputMaybe<Scalars['Datetime']>;
};

export type _Prisma_MigrationsInsertResponse = {
  __typename?: '_prisma_migrationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type _Prisma_MigrationsOrderBy = {
  applied_steps_count?: InputMaybe<OrderByDirection>;
  checksum?: InputMaybe<OrderByDirection>;
  finished_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  logs?: InputMaybe<OrderByDirection>;
  migration_name?: InputMaybe<OrderByDirection>;
  rolled_back_at?: InputMaybe<OrderByDirection>;
  started_at?: InputMaybe<OrderByDirection>;
};

export type _Prisma_MigrationsUpdateInput = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['Datetime']>;
  started_at?: InputMaybe<Scalars['Datetime']>;
};

export type _Prisma_MigrationsUpdateResponse = {
  __typename?: '_prisma_migrationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<_Prisma_Migrations>;
};

export type CreateNoteMutationVariables = Exact<{
  objects: Array<NoteInsertInput> | NoteInsertInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', insertIntoNoteCollection?: { __typename?: 'NoteInsertResponse', affectedCount: number, records: Array<{ __typename?: 'Note', id: string, title: string, body: string }> } | null };

export type DeleteNotesMutationVariables = Exact<{
  ids: Array<Scalars['UUID']> | Scalars['UUID'];
  userId: Scalars['UUID'];
}>;


export type DeleteNotesMutation = { __typename?: 'Mutation', deleteFromNoteCollection: { __typename?: 'NoteDeleteResponse', affectedCount: number } };

export type GetNoteByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
  userId: Scalars['UUID'];
}>;


export type GetNoteByIdQuery = { __typename?: 'Query', noteCollection?: { __typename?: 'NoteConnection', edges: Array<{ __typename?: 'NoteEdge', node: { __typename?: 'Note', id: string, title: string, body: string } }> } | null };

export type GetNotesByUserIdQueryVariables = Exact<{
  userId: Scalars['UUID'];
}>;


export type GetNotesByUserIdQuery = { __typename?: 'Query', noteCollection?: { __typename?: 'NoteConnection', edges: Array<{ __typename?: 'NoteEdge', node: { __typename?: 'Note', id: string, title: string, body: string } }> } | null };


export const CreateNoteDocument = gql`
    mutation CreateNote($objects: [NoteInsertInput!]!) {
  insertIntoNoteCollection(objects: $objects) {
    affectedCount
    records {
      id
      title
      body
    }
  }
}
    `;
export const DeleteNotesDocument = gql`
    mutation DeleteNotes($ids: [UUID!]!, $userId: UUID!) {
  deleteFromNoteCollection(filter: {id: {in: $ids}, user_id: {eq: $userId}}) {
    affectedCount
  }
}
    `;
export const GetNoteByIdDocument = gql`
    query GetNoteById($id: UUID!, $userId: UUID!) {
  noteCollection(filter: {id: {eq: $id}, user_id: {eq: $userId}}) {
    edges {
      node {
        id
        title
        body
      }
    }
  }
}
    `;
export const GetNotesByUserIdDocument = gql`
    query GetNotesByUserId($userId: UUID!) {
  noteCollection(filter: {user_id: {eq: $userId}}) {
    edges {
      node {
        id
        title
        body
      }
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    CreateNote(variables: CreateNoteMutationVariables, options?: C): Promise<CreateNoteMutation> {
      return requester<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, variables, options) as Promise<CreateNoteMutation>;
    },
    DeleteNotes(variables: DeleteNotesMutationVariables, options?: C): Promise<DeleteNotesMutation> {
      return requester<DeleteNotesMutation, DeleteNotesMutationVariables>(DeleteNotesDocument, variables, options) as Promise<DeleteNotesMutation>;
    },
    GetNoteById(variables: GetNoteByIdQueryVariables, options?: C): Promise<GetNoteByIdQuery> {
      return requester<GetNoteByIdQuery, GetNoteByIdQueryVariables>(GetNoteByIdDocument, variables, options) as Promise<GetNoteByIdQuery>;
    },
    GetNotesByUserId(variables: GetNotesByUserIdQueryVariables, options?: C): Promise<GetNotesByUserIdQuery> {
      return requester<GetNotesByUserIdQuery, GetNotesByUserIdQueryVariables>(GetNotesByUserIdDocument, variables, options) as Promise<GetNotesByUserIdQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;