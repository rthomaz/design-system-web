import type { Meta, StoryObj } from '@storybook/angular';
import { AssetsComponent } from './assets.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AssetsComponent> = {
  component: AssetsComponent,
  title: 'AssetsComponent',
};
export default meta;
type Story = StoryObj<AssetsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/assets works!/gi)).toBeTruthy();
  },
};
