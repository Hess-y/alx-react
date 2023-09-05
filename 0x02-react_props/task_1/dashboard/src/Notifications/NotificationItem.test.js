import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component tests", () => {
  it("renders NotificationItem component without crashing", () => {
    const notificationItem = shallow(<NotificationItem />);
    expect(notificationItem).toBeDefined();
  });

  it("renders a <li> tag with data-notification-type attribute", () => {
    const type = "default";
    const value = "test";
    const html = { __html: '<u>test</u>' };
    
    const notificationItem = shallow(
      <NotificationItem type={type} value={value} html={html} />
    );

    const liElement = notificationItem.find("li");
    expect(liElement).toHaveLength(1);
    expect(liElement.prop("data-notification-type")).toBe(type);
  });

  it("renders correct HTML content using dangerouslySetInnerHTML", () => {
    const type = "default";
    const value = "test";
    const html = { __html: '<u>test</u>' };
    
    const notificationItem = shallow(
      <NotificationItem type={type} value={value} html={html} />
    );

    const spanElement = notificationItem.find("span");
    expect(spanElement).toHaveLength(1);
    expect(spanElement.prop("dangerouslySetInnerHTML")).toEqual(html);
  });
});
