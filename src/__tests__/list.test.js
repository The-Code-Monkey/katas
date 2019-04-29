import React from "react";
import { shallow, mount, render } from 'enzyme';
import List from "../components/List";

import 'jsdom-global/register';

import data from '../contants/data.json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let mountComponent, mountComponentFiltered;

beforeEach(() => {
  mountComponent = render(<List filteredData={data} data={data} />);
  mountComponentFiltered = render(<List filteredData={data.slice(0,2)} data={data} />);
});

describe('List Component', () => {
  test('displays data', () => {
    expect(mountComponent.find('.list-item').length).toBe(3);
  });
  
  test('displays filtered data', () => {
    expect(mountComponentFiltered.find('.list-item').length).toBe(2);
  })
});
