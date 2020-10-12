import React from 'react';
import ReactDom from "react-dom";
import { render } from '@testing-library/react';
import AppReactSamuraiJS from './App';

test('renders crash', () => {
  const div = document.createElement("div")
  ReactDom.render(<AppReactSamuraiJS />, div);
  ReactDom.unmountComponentAtNode(div)
});

