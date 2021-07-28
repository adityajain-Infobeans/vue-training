import HelloWorld from "@/components/HelloWorld";
import { getMessage } from "@/services/axios";

import { mount } from "@vue/test-utils";

import flushPromises from "flush-promises";

jest.mock("@/services/axios");

describe("MessageDisplay", () => {
  it("Calls getMessage once and displays message", async () => {
    const mockMessage = "Hello from the db";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(HelloWorld);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1); // check that call happened once

    // check that component displays message
  });
});
