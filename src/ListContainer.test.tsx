import { render, fireEvent } from "@testing-library/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ListContainer from "./ListContainer";
import tasks from "./fixtures/tasks";

jest.mock("recoil");
const mockUseRecoilValue = useRecoilValue as jest.MockedFunction<
  typeof useRecoilValue
>;
const mockUseSetRecoilState = useSetRecoilState as jest.MockedFunction<
  typeof useSetRecoilState
>;

// 태스크가 있으면
// 태스크를 렌더
// 태스크가 없으면
// 태스크가 없다는 메시지를 렌더

describe("ListContainer", () => {
  const setTasks = jest.fn();
  it("할 일들이 렌더링되는가?", () => {
    mockUseRecoilValue.mockImplementation(() => tasks);
    mockUseSetRecoilState.mockImplementation(() => setTasks);
    const { container, getAllByText } = render(<ListContainer />);
    expect(container).toHaveTextContent("숨쉬기");
    expect(container).toHaveTextContent("운동하기");

    const buttons = getAllByText("완료");

    fireEvent.click(buttons[0]); // 첫번째는 id: 1 일 것이다.

    expect(setTasks).toBeCalledWith(tasks.filter((task) => task.id !== 1)); // 삭제할 대상을 제외한 것들로 바꾸도록 함
  });
});
