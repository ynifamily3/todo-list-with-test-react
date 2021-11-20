import { render } from "@testing-library/react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import App from "./App";
import tasks from "./fixtures/tasks";

jest.mock("recoil");
const mockRecoilRoot = RecoilRoot as jest.MockedFunction<typeof RecoilRoot>;
const mockUseSetRecoilState = useSetRecoilState as jest.MockedFunction<
  typeof useSetRecoilState
>;
const mockUseRecoilValue = useRecoilValue as jest.MockedFunction<
  typeof useRecoilValue
>;

describe("App", () => {
  it("할 일들이 렌더링되는가?", () => {
    mockRecoilRoot.mockImplementation(({ children }) => <>{children}</>);
    mockUseSetRecoilState.mockImplementation(() => () => {});
    mockUseRecoilValue.mockImplementation(() => tasks); // points

    const { container } = render(<App />);
    expect(container).toHaveTextContent("숨쉬기");
    expect(container).toHaveTextContent("운동하기");
  });
});
