export function handleModalRender() {
  const modal = document.getElementById('modal') as HTMLDialogElement | null;

  if (!modal) return;

  const isModalOpen = modal.hasAttribute('open');

  if (isModalOpen) return modal.close();

  modal.showModal();
}
