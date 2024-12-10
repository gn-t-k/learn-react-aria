import type { Meta, StoryObj } from "@storybook/react";

import {
  DialogContent,
  DialogDescription,
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
                <DialogDescription>Dialog Description</DialogDescription>
              </DialogHeader>
              <p>content</p>
              <DialogFooter>
                <Button onPress={close}>OK</Button>
                <Button onPress={close} variant="outline">
                  Cancel
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  ),
};
