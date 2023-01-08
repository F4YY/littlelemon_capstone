import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import { useRef } from "react";

  function Alert() {
    const { isOpen, type, message , onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success"

    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? 'rgb(244,206,20)' : '#FF8A65'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccess ? 'Congratulation!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }

  export default Alert;
