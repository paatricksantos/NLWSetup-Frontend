import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";
import LogoImg from "../../assets/logo.svg";
import { Modal } from "../Modal";
import { NewHabitForm } from "../NewHabitForm";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleClick() {
    setIsModalOpen(true);
  }
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between ">
      <img src={LogoImg} alt="Habits" />
      <Dialog.Root>
        <Dialog.Trigger
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-300 "
          type="button"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen fixed bg-black/80 inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={20} aria-label="Fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl font-extrabold leading-tight">
              Criar hábito
            </Dialog.Title>
            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
