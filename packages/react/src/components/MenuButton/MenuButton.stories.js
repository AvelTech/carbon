/**
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import { MenuItem, MenuItemDivider } from '../Menu';

import { MenuButton } from './';
import mdx from './MenuButton.mdx';

export default {
  title: 'Experimental/unstable__MenuButton',
  component: MenuButton,
  subcomponents: {
    MenuItem,
    MenuItemDivider,
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = () => (
  <MenuButton label="Actions">
    <MenuItem label="First action" />
    <MenuItem label="Second action" />
    <MenuItem label="Third action" disabled />
  </MenuButton>
);

export const WithDanger = () => (
  <MenuButton label="Actions">
    <MenuItem label="First action" />
    <MenuItem label="Second action" />
    <MenuItem label="Third action" />
    <MenuItemDivider />
    <MenuItem label="Danger action" kind="danger" />
  </MenuButton>
);

export const WithDividers = () => (
  <MenuButton label="Actions">
    <MenuItem label="Create service request" />
    <MenuItem label="Create work order" />
    <MenuItemDivider />
    <MenuItem label="Add plan" />
    <MenuItem label="Add flag" />
    <MenuItemDivider />
    <MenuItem label="Edit source location" />
    <MenuItem label="Recalculate source" />
  </MenuButton>
);

export const Playground = (args) => {
  const onClick = action('onClick (MenuItem)');

  return (
    <MenuButton {...args}>
      <MenuItem label="First action" onClick={onClick} />
      <MenuItem label="Second action" onClick={onClick} />
      <MenuItem label="Third action" onClick={onClick} disabled />
    </MenuButton>
  );
};

Playground.argTypes = {
  children: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
  label: {
    defaultValue: 'Actions',
  },
};
