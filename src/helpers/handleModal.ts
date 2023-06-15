export function handleModalRender(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement | null;

  if (!modal) return;

  const isModalOpen = modal.hasAttribute('open');

  if (isModalOpen) return modal.close();

  modal.showModal();
}
