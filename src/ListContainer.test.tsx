import { render } from "@testing-library/react";
import { useRecoilValue } from "recoil";
import ListContainer from "./ListContainer";
import tasks from "./fixtures/tasks";

jest.mock("recoil");
const mockUseRecoilValue = useRecoilValue as jest.MockedFunction<
  typeof useRecoilValue
>;

// 태스크가 있으면
// 태스크를 렌더
// 태스크가 없으면
// 태스크가 없다는 메시지를 렌더

describe("ListContainer", () => {
  it("할 일들이 렌더링되는가?", () => {
    mockUseRecoilValue.mockImplementation(() => tasks);
    const { container } = render(<ListContainer />);
    expect(container).toHaveTextContent("숨쉬기");
    expect(container).toHaveTextContent("운동하기");
  });
});
