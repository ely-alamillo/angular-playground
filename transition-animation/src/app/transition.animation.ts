import {
  state,
  trigger,
  style,
  animate,
  transition,
  query
} from "@angular/animations";

export const routerAnimation =
  trigger("routerAnimation", [
    transition("* <=> *", [
      query(":enter",
            style({
              position: "fixed",
              width: "100%",
              transform: "translateX(-100%)"
            }),
            {optional: true}),
      query(":leave",
            animate("500ms ease",
                    style({
                      position: "fixed",
                      width: "100%",
                      transform: "translateX(100%)"
                    })), {optional: true}),
      query(":enter",
            animate("500ms ease",
                    style({
                      opacity: 1,
                      transform: "translateX(0%)"
                    })), {optional: true})
    ])
  ]);
