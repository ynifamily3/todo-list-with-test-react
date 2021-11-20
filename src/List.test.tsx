import { render } from "@testing-library/react";
import List from "./List";
import tasks from "./fixtures/tasks";

describe("List", () => {
  it("할 일들이 렌더링되는가?", () => {
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("숨쉬기");
    expect(container).toHaveTextContent("운동하기");
  });
});
