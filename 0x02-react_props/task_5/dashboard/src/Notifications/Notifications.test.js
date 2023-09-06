import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("ul")).toBeDefined();
  });

  it("renders NotificationItem elements", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("NotificationItem")).toHaveLength(3); // Assuming your NotificationItem component has a unique name
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);
    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });

  it("renders correct HTML for the first NotificationItem", () => {
  const notification = shallow(<Notifications />);
  const notificationItem = notification.find("NotificationItem").first();
  
  // Assuming your NotificationItem component has a prop for HTML content
  const htmlProp = notificationItem.prop("html");
  expect(htmlProp).toEqual({ __html: "HTML content here" }); // Replace with your expected HTML
});

  it("renders correctly with an empty listNotifications prop", () => {
    const notification = shallow(<Notifications listNotifications={[]} />);
    expect(notification.find("li").text()).toBe("No new notification for now");
  });

  it("renders listNotifications correctly", () => {
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
    ];

    const notification = shallow(<Notifications listNotifications={listNotifications} />);
    expect(notification.find(NotificationItem)).toHaveLength(listNotifications.length);
  });

  it("does not display default message when listNotifications is empty", () => {
    const notification = shallow(<Notifications listNotifications={[]} />);
    expect(notification.find("p").text()).not.toBe("Here is the list of notifications");
    expect(notification.find("li").text()).toBe("No new notification for now");
  });
});
      
