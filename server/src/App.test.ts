import * as supertest from 'supertest';
import App from './App';

describe("Test the root path", () => {
  let request: supertest.SuperTest<supertest.Test>;

  beforeEach(() => {
    request = supertest(App);
  });

  it("should return json", async () => {
    const response: any = await request.get("/");
    expect(response.type).toEqual("application/json");
  });

  it("should have a message prop", async () => {
    const response: any = await request.get("/");
    expect(response.body.message).toEqual("Hello World!");
  });
});
