import type { Preview } from "@storybook/react";
import "../src/styles/base.css";
import { lightTheme } from "../src/styles/theme.css";
import { useEffect } from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        document.body.classList.add(lightTheme);

        return () => {
          document.body.classList.remove(lightTheme);
        };
      }, []);

      return <Story />;
    },
  ],
};

export default preview;
