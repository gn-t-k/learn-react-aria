import type { Meta, StoryObj } from "@storybook/react";

import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "../button/button";

const meta: Meta<typeof DialogTrigger> = {
  component: DialogTrigger,
};

export default meta;
type Story = StoryObj<typeof DialogTrigger>;

export const Default: Story = {
  render: () => (
    <DialogTrigger>
      <Button>open</Button>
      <DialogOverlay>
        <DialogContent>
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <p>content</p>
              <DialogFooter>
                <Button onPress={close}>OK</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  ),
};
