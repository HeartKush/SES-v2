"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export interface Picture {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface HistoryModalProps {
  year: string;
  pictures: Picture[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({
  year,
  pictures,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{year}</ModalHeader>
            <ModalBody>
              {pictures.map((pic, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-semibold">{pic.title}</h3>
                  <img
                    src={pic.src}
                    alt={pic.alt}
                    className="w-24 object-cover rounded-md mb-2 mx-auto"
                  />

                  <p className="text-sm">{pic.description}</p>
                </div>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
