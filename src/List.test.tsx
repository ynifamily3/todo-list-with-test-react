import { render } from "@testing-library/react";
import List from "./List";
// import context from "./jest-plugin-context";
import { Tasks } from "./types/task";

describe("List", () => {
  it("할 일이 있을 때....", () => {
    const tasks = [
      { id: 1, title: "숨쉬기", done: false },
      { id: 2, title: "운동하기", done: false },
    ];
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("숨쉬기");
    expect(container).toHaveTextContent("운동하기");
  });
  it("할 일이 없을 때....", () => {
    const tasks: Tasks = [];
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("할 일이 없어요!");
  });
});

// describe("List", () => {
//   context("할 일이 있을 때", () => {
//     const tasks = [
//       { id: 1, title: "숨쉬기", done: false },
//       { id: 2, title: "운동하기", done: false },
//     ];

//     it("할 일들이 렌더링되는가?", () => {
//       const { container } = render(<List tasks={tasks} />);
//       expect(container).toHaveTextContent("숨쉬기");
//       expect(container).toHaveTextContent("운동하기");
//     });
//   });

//   context("할 일이 없을 때", () => {
//     const tasks: Tasks = [];
//     it("할 일이 없다는 메시지를 렌더", () => {
//       const { container } = render(<List tasks={tasks} />);
//       expect(container).toHaveTextContent("할 일이 없어요!");
//     });
//   });
// });
