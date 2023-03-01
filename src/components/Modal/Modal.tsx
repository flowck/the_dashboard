import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "components/Button/Button";
import { ReactNode } from "react";
import { keyframes, styled } from "stitches.config";

interface Props {
  title: string;
  description?: string;
  confirmButton: ReactNode;
  openModalButton: ReactNode;
  children: ReactNode | ReactNode[];
}

export function Modal({
  title,
  description,
  openModalButton,
  confirmButton,
}: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{openModalButton}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}

          <Flex css={{ marginTop: 25, justifyContent: "flex-end", gap: "$2" }}>
            <Dialog.Close asChild>
              <Button variant="secondary">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>{confirmButton}</Dialog.Close>
          </Flex>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogOverlay = styled(Dialog.Overlay, {
  inset: 0,
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  top: "50%",
  left: "50%",
  padding: 25,
  width: "90vw",
  borderRadius: 6,
  maxHeight: "85vh",
  position: "fixed",
  maxWidth: "576px",
  backgroundColor: "$shade850",
  border: "1px solid $shade800",
  transform: "translate(-50%, -50%)",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "&:focus": { outline: "none" },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontSize: 17,
  fontWeight: 500,
  color: "$white",
});

const DialogDescription = styled(Dialog.Description, {
  fontSize: 15,
  lineHeight: 1.5,
  color: "$shade500",
  margin: "10px 0 20px",
});

const Flex = styled("div", { display: "flex" });
