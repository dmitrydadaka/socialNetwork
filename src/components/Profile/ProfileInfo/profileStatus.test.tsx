import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
   /*  test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra.com");
    }); */
    test("after creation span should be displayed", () => {
      //@ts-ignore

        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
  
      });
      test("after creation span should not be displayed", () => {
        //@ts-ignore

        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        expect(()=>{        let input = root.findByType("input");
      }).toThrow();
  
      });
      test("after creation span should be contains with correct status", () => {
        //@ts-ignore

        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span =root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
  
      });
      test("input shoul be instead span after click", () => {
        //@ts-ignore

        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span =root.findByType("span");
        span.props.onDoubleClick();
        let input =root.findByType("input");

        expect(input.props.value).toBe("it-kamasutra.com");
  
      });
      test("callback should be called", () => {
        const mockCallback=jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
        const instance =component.getInstance();
        //@ts-ignore

        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
  
      });
  });