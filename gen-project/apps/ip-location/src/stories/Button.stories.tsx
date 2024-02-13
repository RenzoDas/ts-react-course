import { Button } from "../components/Button";

export default { title: "Button", component: Button };

export const Default = {
  args: {
    label: "Default",
    onClick: () => console.log("onClick"),
  },
};
