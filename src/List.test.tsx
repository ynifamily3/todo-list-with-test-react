import { render, fireEvent } from "@testing-library/react";
import List from "./List";
import context from "./jest-plugin-context";
import { Tasks } from "./types/task";

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks: Tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("할 일이 있을 때", () => {
    const tasks = [
      { id: 1, title: "숨쉬기", done: false },
      { id: 2, title: "운동하기", done: false },
    ];

    it("할 일들이 렌더링되는가?", () => {
      const { container } = renderList(tasks);
      expect(container).toHaveTextContent("숨쉬기");
      expect(container).toHaveTextContent("운동하기");
    });

    it("완료 버튼 (지우기) 렌더링 여부", () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText("완료");

      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalledWith(1); // 첫번째 원소 (id:1) 을 클릭했다면 인자로 1이 들어와야 함.
    });
  });

  context("할 일이 없을 때", () => {
    const tasks: Tasks = [];
    it("할 일이 없다는 메시지를 렌더", () => {
      const { container } = renderList(tasks);
      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
