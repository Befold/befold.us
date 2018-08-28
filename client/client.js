import React from 'react';
import * as allComponents from '@constants/component_dictionary';
import { render } from 'react-dom';

const mountQueue = window.mountQueue || [];

mountQueue.forEach(({ component, mountTarget, props = {} }) => {
  const Element = allComponents[component];

  console.log(allComponents);

  if (Element && mountTarget) {
    render(<Element {...props} />, mountTarget);
  } else {
    console.error(`Failed to render component ${component} to target ${mountTarget} with props`, props);
  }
});
