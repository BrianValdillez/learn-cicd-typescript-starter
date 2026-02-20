import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const no_auth = {};
const bad_auth = { authorization: "some sort of nonsense" };
const valid_auth = { authorization: "ApiKey bingbangboom" };

describe("getAPIKey", () => {
  test("no authorization", () => {
    expect(getAPIKey(no_auth)).toBeNull();
  });

  test("invalid authorization", () => {
    expect(getAPIKey(bad_auth)).toBeNull();
  });

  test("valid authorization", () => {
    expect(getAPIKey(valid_auth)).toBeTypeOf("string");
  });






});