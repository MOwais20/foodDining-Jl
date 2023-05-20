import Swal from "sweetalert2";

export default function ({ $axios, redirect, $swal, store }) {
  $axios.onRequest((config) => {});
  $axios.onError((error) => {
    if (error?.response?.status != 200) {
      $swal.fire({
        toast: true,
        timerProgressBar: true,
        position: "top-end",
        icon: "error",
        text: error?.response?.data?.message || "Something didn't worked out.",
        showConfirmButton: false,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", $swal.stopTimer);
          toast.addEventListener("mouseleave", $swal.resumeTimer);
        },
      });
    }
  });
  $axios.onResponseError((error) => {});
  $axios.onResponse((response) => {});
}
