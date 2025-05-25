describe("Http requests", () => {
  let data = {
    title: "Enwer",
    body: "Memet",
    userId: 1,
  };

  it("should make a GET request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        console.log("get", response.body);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
      }
    );
  });

  it("should make a POST request", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", data).then(
      (response) => {
        console.log("post", response.body);
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("title", data.title);
      }
    );
  });

  it("should make a PUT request", () => {
    data.body = "Erdem";
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: data.title,
      body: data.body,
      userId: 1,
    }).then((response) => {
      console.log("put", response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("body", data.body);
    });
  });

  it("should make a DELETE request", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        console.log("delete", response.body);
        expect(response.status).to.eq(200);
      }
    );
  });

  it.only("should make a PUT request using json object", () => {
    let username = Math.random().toString(36).substring(7);
    let users = {
        title: username,
        body: username+"@gmail.com",
        userId: 1,
    }

      cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        title: users.title,
        body: users.body,
      }).then((response) => {
        console.log("put", response.body);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("title", users.title);
        expect(response.body).to.have.property("body", users.body);
      });
    
  });
  it.only("should make a PUT request using fixture file", () => {
    cy.fixture("users").then((users) => {
      console.log(users[0]);

      cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
        title: users[0].name,
        body: users[0].email,
      }).then((response) => {
        console.log("put", response.body);
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("title", users[0].name);
        expect(response.body).to.have.property("body", users[0].email);
      });
    });
  });
});  


it("should make a POST request using json object", () => {
  
});
