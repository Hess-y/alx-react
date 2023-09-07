import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  });

     
  it("renders correctly with an empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);

    expect(wrapper.find("tbody").children()).toHaveLength(0);
  });

  it("renders courses correctly when listCourses is provided", () => {
    const courses = [
      { id: 1, name: "Course 1" },
      { id: 2, name: "Course 2" },
      { id: 3, name: "Course 3" },
    ];

    const wrapper = shallow(<CourseList listCourses={courses} />);
    const courseRows = wrapper.find("tbody").find(CourseListRow);

    expect(courseRows).toHaveLength(courses.length);

    courseRows.forEach((node, index) => {
      expect(node.props().textFirstCell).toBe(courses[index].name);
    });
  });
});
