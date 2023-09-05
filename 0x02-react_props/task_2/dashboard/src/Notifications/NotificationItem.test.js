import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
  it('renders NotificationItem component without crashing', () => {
    const notificationItem = shallow(<NotificationItem />);
    expect(notificationItem.exists()).toBe(true);
  });

  it('renders correct HTML when type and value props are provided', () => {
    const type = 'default';
    const value = 'test';

    const notificationItem = shallow(<NotificationItem type={type} value={value} />);

    const liElement = notificationItem.find('li');
    expect(liElement.exists()).toBe(true);
    expect(liElement.prop('data-notification-type')).toBe(type);

    const spanElement = notificationItem.find('span');
    expect(spanElement.exists()).toBe(true);
    expect(spanElement.text()).toBe(value);
  });

  it('renders correct HTML when html prop is provided', () => {
    const html = { __html: '<u>test</u>' };

    const notificationItem = shallow(<NotificationItem html={html} />);

    const liElement = notificationItem.find('li');
    expect(liElement.exists()).toBe(true);

    const spanElement = notificationItem.find('span');
    expect(spanElement.exists()).toBe(true);
    expect(spanElement.prop('dangerouslySetInnerHTML')).toEqual(html);
  });
});
