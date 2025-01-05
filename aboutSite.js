export const aboutSite = {
  elements: [
    {
      class: "contactDiv",
      type: "div",
      children: [
        {
          id: "home-photo",
          type: "div",
        },
        {
          id: "about-div",
          type: "div",
          children: [
            { class: "aboutP", type: "p", content: "My background" },
            {
              class: "aboutSpan",
              type: "div",
              children: [
                {
                  type: "p",
                  content:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
                },
                {
                  type: "p",
                  content:
                    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                },
                {
                  type: "p",
                  content:
                    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
                {
                  type: "p",
                  content:
                    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
                {
                  type: "p",
                  content:
                    "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
                },
              ],
            },
          ],
        },
        {
          type: "div",
          children: [
            { class: "aboutP", type: "p", content: "My hobbies and interests" },
            {
              class: "aboutSpan",
              type: "div",
              children: [
                {
                  type: "p",
                  content:
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                },
                {
                  type: "p",
                  content:
                    "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
                {
                  type: "p",
                  content:
                    "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "contactButton-div",
      type: "div",
      children: [
        {
          class: "contact-linki",
          id: "about-button",
          type: "div",
          children: [
            { id: "about-photo", type: "div" },
            {
              id: "add-projectStyle",
              type: "div",
              content: "Contact Me",
            },
          ],
        },
      ],
    },
  ],
};
