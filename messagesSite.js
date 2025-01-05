export const messagesSite = {
  elements: [
    {
      id: "messages-div",
      type: "div",
      children: [
        {
          id: "mocked-messages",
          type: "div",
          children: [
            {
              type: "div",
              children: [
                { class: "mockedText", type: "p", content: "Name: Karol" },
                {
                  class: "mockedText",
                  type: "p",
                  content: "Email: karol@email.com",
                },
                {
                  class: "mockedText",
                  type: "p",
                  content:
                    "Message: Hello, I've reviewed your impressive portfolio and am interested in discussing a potential collaboration. Please call me at 712-218-123 to talk further.",
                },
              ],
            },
            {
              type: "div",
              children: [
                { class: "mockedText", type: "p", content: "Name: Ernest " },
                {
                  class: "mockedText",
                  type: "p",
                  content: "Email: ernest@email.com",
                },
                {
                  class: "mockedText",
                  type: "p",
                  content:
                    "Message: Hello, Please call me at 351-152-555 to talk further.",
                },
              ],
            },
            {
              type: "div",
              children: [
                { class: "mockedText", type: "p", content: "Name: Jan" },
                {
                  class: "mockedText",
                  type: "p",
                  content: "Email: jan@email.com",
                },
                {
                  class: "mockedText",
                  type: "p",
                  content:
                    "Message: Welcome Jan. You created really nice project",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export function addNewMessage(name, email, message) {
  return {
    type: "div",
    children: [
      { type: "span", content: `Name: ${name}` },
      { type: "span", content: `Email: ${email}` },
      { type: "span", content: `Message: ${message}` },
    ],
  };
}
