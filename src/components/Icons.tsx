import { ActivityLogIcon, PersonIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export const Icons = {
  user: (props: IconProps) => <PersonIcon {...props} />,
  logo: (props: IconProps) => (
    <ActivityLogIcon {...props} className="rotate-90 h-10 w-10" />
  ),
};
