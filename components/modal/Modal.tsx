import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { ModalPage } from "./ModalPage";

interface ModalStyle {
  style: any;
  wrapperRef?: any;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  content: string;
  statusColor?: string;
}
export default function Modal(props: ModalStyle) {
  const { showModal, setShowModal } = props;
  /* const sendEmail = () => {
    //TODO: add share via email functionality > mailto: subject line
    //TODO: 2nd modal content to enter emails to share with
  };
 */
  return (
    <motion.div className={props.style}>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalPage
              modalContent={props.content}
              colorStatus={props.statusColor}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
