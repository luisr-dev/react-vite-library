import { Button } from "@mui/material";
import { ReactElement, ElementType } from "react";

// import { TColors } from "../Colors/TColors";
// import { /* PdvIcon,  */ TIconSize } from "../Icons/PdvIcon";
// import { TIconNames } from "../Icons/TIconNames";

type TRounded = "small" | "medium" | "large" | "full";
export type TButtonVariant = "contained" | "outlined" | "default";
export type TButtonSize = "small" | "medium" | "large";
type TPdvButton = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  variant?: TButtonVariant;
  color?: /* TColors */ string;
  textColor?: /* TColors */ string;
  iconColor?: /* TColors */ string;
  size?: TButtonSize;
  asLink?: boolean;
  href?: string;
  type?: "submit" | "button" | "reset";
  // icon?: TIconNames | ReactElement;
  icon?: string;
  iconPosition?: "left" | "right";
  // iconSize?: TIconSize;
  iconSize?: string;
  disabled?: boolean;
  rounded?: TRounded;
  component?: ElementType;
  onClick?: () => void;
};

const PdvButton = (props: TPdvButton) => {
  const {
    children,
    // className,
    // variant = 'contained',
    // asLink,
    // href,
    // iconSize,
    // iconPosition = 'left',
    // disabled = false,
    // color = 'primary-color',
    // iconColor = 'white',
    // rounded = 'medium',
    // textColor,
    // ...rest
  } = props;

  const onClick = () => {
    props?.onClick && props.onClick();
  };

  return (
    <span className={`${props?.disabled ? "cursor-not-allowed" : ""}`}>
      <Button onClick={onClick}>
        <div className="flex items-center justify-center gap-1.5">
          {/* {iconPosition === 'left' && props?.icon && setIcon()} */}
          <h6
            className={`flex items-center ${
              props.size?.includes("small") ? "subtitle2" : "subtitle1"
            }`}
          >
            {children}
          </h6>
          {/* {iconPosition === 'right' && props?.icon && setIcon()} */}
        </div>
      </Button>
    </span>
  );
};

export { PdvButton };