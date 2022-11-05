import { DateTimeResolver, GraphQLJSONObject, TimeResolver } from "graphql-scalars";
import { asNexusMethod } from "nexus";

export * from "./User";

export const date = asNexusMethod(DateTimeResolver, "date");
export const Time = asNexusMethod(TimeResolver, "date");
export const JSONObject = asNexusMethod(GraphQLJSONObject, "JSONObject");
