import Swal from "sweetalert2";

interface ToastMessageProps {
  icone: 'success' | 'error' | 'warning' | 'info';
  text: string;
}

export default function ToastMessage({ icone, text }: ToastMessageProps) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: icone,
    background: '#b1533c',
    html: `<div class="font-k2d text-[14px]">${text}</div>`,
    customClass: {
      popup: 'custom-popup-toast',
      title: 'custom-title-toast',
    },
    color: 'white',
  });

  return null;  // Since this component does not render anything
}
