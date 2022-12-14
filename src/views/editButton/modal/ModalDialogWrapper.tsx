import React from "react";
import { AddAnimation } from "../../../stylingComponents/AddAnimation";
import { CloseDialogIcon } from "../icons/CloseDialogIcon";

export const ModalDialogWrapper: React.FC<{
  title: string;
  closeDialog: () => void;
  children: JSX.Element;
}> = ({ title, closeDialog, children }) => {
  return (
    <AddAnimation className=" fixed top-0 left-0 right-0 backdrop-blur-sm	 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative w-full h-full ">
        <div className="relative rounded-lg min-h-full  md:mx-40 md:my-8 bg-white shadow dark:bg-gray-700">
          <div className="flex flex-col items-center justify-between p-5 rounded-t dark:border-gray-600">
            <button
              onClick={closeDialog}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <CloseDialogIcon />
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="text-xl p-4 font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="flex w-full items-center justify-center mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AddAnimation>
  );
};
