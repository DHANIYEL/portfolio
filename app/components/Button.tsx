import "../globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
  onDoubleClick?: () => void; // Add onDoubleClick prop
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  color = "#14013d",
  onClick,
  onDoubleClick, // Destructure onDoubleClick
  ...props
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: -240000, y: 0 });

  // Use effect to set button width and height
  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
      setButtonHeight(buttonRef.current.offsetHeight);
    }
  }, [buttonRef]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const mouseX = e.pageX - e.currentTarget.offsetLeft;
    const mouseY = e.pageY - e.currentTarget.offsetTop;

    const x = (mouseX / buttonWidth) * 100;
    const y = (mouseY / buttonHeight) * 100;

    setMousePosition({ x, y });
  };

  const cols = buttonWidth / 16;
  const rows = buttonHeight / 16;

  const shadows = [];

  // Determine how many shadows to create
  for (let i = 0; i <= cols; i++) {
    for (let j = 0; j <= rows; j++) {
      shadows.push(
        <Shadow
          key={`s${i}-${j}`}
          left={i * (100 / cols)}
          top={j * (100 / rows)}
          color={
            i < cols / 2 && j < rows / 2
              ? "#304EAE"
              : i > cols / 2 && j < rows / 2
              ? "#FF6D6D"
              : i > cols / 2 && j > rows / 2
              ? "#FFC107"
              : i < cols / 2 && j > rows / 2
              ? "#00B74A"
              : "#888888"
          }
          mousePosition={mousePosition}
        />
      );
    }
  }

  return (
    <motion.div
      ref={buttonRef}
      style={{
        height: "4rem",
        width: "12rem",
        backgroundColor: "#00000000",
        fontWeight: "bold",
        fontSize: "1.5rem",
        fontFamily: "var(--font-porsche-bold)", // Use the custom font here
        position: "relative",
        padding: 0,
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "1.25rem",
        userSelect: "none",
        color,
        border: `2px solid ${color}`, // Set border thickness and color
      }}
      initial={{ boxShadow: `0 0 0rem .5px ${color}` }}
      whileHover={{
        boxShadow: `0 0 0rem 1px ${color}`,
        transition: { duration: 0.5 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -24, y: -1 })}
      onClick={onClick}
      onDoubleClick={onDoubleClick} // Add the onDoubleClick event handler
      {...props}
    >
      {shadows}
      <motion.span
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          zIndex: 1,
          backgroundColor: "#ffffff00",
          backdropFilter: "blur(.5rem)",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "inherit",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 2,
          borderRadius: "inherit",
        }}
        initial={{ boxShadow: `0 0 0 0px ${color}00 inset` }}
        whileTap={{
          boxShadow: [`0 0 0 3px ${color}00 inset`, `0 0 0 0px ${color} inset`],
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const Shadow = ({
  left,
  top,
  color,
  mousePosition,
}: {
  left: number;
  top: number;
  color: string;
  mousePosition: { x: number; y: number };
}) => {
  return (
    <AnimatePresence>
      {mousePosition.x < left + 16 &&
        mousePosition.x > left - 16 &&
        mousePosition.y < top + 16 &&
        mousePosition.y > top - 16 && (
          <motion.span
            style={{
              position: "absolute",
              width: 16,
              height: 16,
              borderRadius: "2rem",
              boxShadow: `0 0 1rem 0.5rem ${color}`,
              filter: "blur(1rem)",
              x: "-50%",
              y: "-50%",
              left: `${left}%`,
              top: `${top}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
          />
        )}
    </AnimatePresence>
  );
};
