import type { Meta, StoryObj } from '@storybook/angular';
import { CssComponent } from './css.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CssComponent> = {
  component: CssComponent,
  title: 'CssComponent',
};
export default meta;
type Story = StoryObj<CssComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/css works!/gi)).toBeTruthy();
  },
};
