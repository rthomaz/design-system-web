import type { Meta, StoryObj } from '@storybook/angular';
import { DesignSystemWebLibComponent } from './design-system-web-lib.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DesignSystemWebLibComponent> = {
  component: DesignSystemWebLibComponent,
  title: 'DesignSystemWebLibComponent',
};
export default meta;
type Story = StoryObj<DesignSystemWebLibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/design-system-web-lib works!/gi)).toBeTruthy();
  },
};
