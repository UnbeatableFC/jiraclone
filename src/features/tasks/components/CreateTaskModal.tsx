"use client";

import ResponsiveModal from "../../../components/responsive-modal";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";

const CreateTaskModal = () => {
  const { isOpen, setIsOpen } = useCreateTaskModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <div>TODO: Task Form</div>
    </ResponsiveModal>
  );
};

export default CreateTaskModal;
