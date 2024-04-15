import { hello } from "@/index"

describe("hello function", () =>{
  it("prints 'Hello world'", () => {
    expect(hello()).toEqual("Hello world!")
  })
})
